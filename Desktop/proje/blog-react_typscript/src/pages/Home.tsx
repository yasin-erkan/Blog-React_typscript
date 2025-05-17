// Home.tsx
import React, {useState, useMemo, useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {api, Post, User} from '../services/api';
import Loading from '../components/Loading';
import Error from '../components/Error';
import SearchBar from '../components/SearchBar';
import AuthorSelector from '../components/AuthorSelector';
import PostCard from '../components/PostCard';

const ITEMS_PER_PAGE = 10;

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState<number | null>(null);
  const [visiblePostsCount, setVisiblePostsCount] = useState(ITEMS_PER_PAGE);

  const {
    data: allPosts,
    isLoading: postsLoading,
    error: postsError,
  } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: api.getPosts,
  });

  const {
    data: usersData,
    isLoading: usersLoading,
    error: usersError,
  } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: api.getUsers,
  });

  const users = useMemo(() => {
    if (!usersData) return {};
    return usersData.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {} as {[key: number]: User});
  }, [usersData]);

  const filteredPosts = useMemo(() => {
    if (!allPosts) return [];
    return allPosts.filter(post => {
      const matchesSearch =
        searchTerm === '' ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesAuthor =
        selectedAuthor === null || post.userId === selectedAuthor;
      return matchesSearch && matchesAuthor;
    });
  }, [allPosts, searchTerm, selectedAuthor]);

  const visiblePosts = useMemo(() => {
    return filteredPosts.slice(0, visiblePostsCount);
  }, [filteredPosts, visiblePostsCount]);

  useEffect(() => {
    // Reset the displayed number when the filtering changes
    setVisiblePostsCount(ITEMS_PER_PAGE);
  }, [filteredPosts]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        visiblePosts.length < filteredPosts.length &&
        !postsLoading
      ) {
        setVisiblePostsCount(prevCount =>
          Math.min(prevCount + ITEMS_PER_PAGE, filteredPosts.length),
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visiblePosts.length, filteredPosts.length, postsLoading]);

  if (postsLoading || usersLoading) return <Loading />;
  if (postsError) return <Error message="Failed to fetch posts" />;
  if (usersError) return <Error message="Failed to fetch users" />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-sky-800 mb-4">Health Blog</h1>
          <p className="text-lg text-sky-600">
            Discover the latest health and wellness articles
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-8 items-center">
          <div className="w-full max-w-md">
            <SearchBar
              value={searchTerm}
              onChange={value => setSearchTerm(value)}
            />
          </div>
          <AuthorSelector
            users={users}
            selectedAuthor={selectedAuthor}
            onAuthorSelect={setSelectedAuthor}
          />
        </div>

        <div className="mb-12 text-center">
          <p className="text-sky-700">
            {filteredPosts.length} article
            {filteredPosts.length !== 1 ? 's' : ''} found
            {searchTerm && ` for "${searchTerm}"`}
            {selectedAuthor && ` by ${users[selectedAuthor]?.name}`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map(post => (
            <PostCard key={post.id} post={post} author={users[post.userId]} />
          ))}
        </div>

        {postsLoading && visiblePosts.length > 0 && (
          <div className="text-center py-4">Loading more posts...</div>
        )}

        {filteredPosts.length === 0 && !postsLoading && (
          <div className="text-center py-12">
            <p className="text-sky-600 text-lg">No articles found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
