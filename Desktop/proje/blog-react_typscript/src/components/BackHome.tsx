import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const BackHome: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        navigate('/');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate]);

  return (
    <div className="mb-8 text-sky-600">Press ESC to go back to articles</div>
  );
};

export default BackHome;
