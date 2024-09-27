import { useState, useEffect, useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

const useInfiniteScroll = () => {
  const { blogs, fetchBlogs, hasMore } = useContext(BlogContext);
  const [showNoMoreBlogs, setShowNoMoreBlogs] = useState(false); 

  useEffect(() => {
    fetchBlogs(1); 
  }, []);

  const loadMoreBlogs = () => {
    if (hasMore) {
      const nextPage = Math.ceil(blogs.length / 5)  +1; 
      fetchBlogs(nextPage);
    } else {
      setShowNoMoreBlogs(true);
      setTimeout(() => setShowNoMoreBlogs(false), 3000); 
    }
  };

  return { blogs, loadMoreBlogs, showNoMoreBlogs, hasMore };
};

export default useInfiniteScroll;
