import React, { createContext, useState } from 'react';
import { blogData } from '../data/blogs'; 

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]); 
  const [hasMore, setHasMore] = useState(true); 

  const fetchBlogs = async (page = 1, itemsPerPage = 5) => {
    // console.log(blogs.length);
    if (!hasMore) return;

    const startIndex = (page-1) * itemsPerPage;
    const newBlogs = blogData.blogs.slice(startIndex, startIndex + itemsPerPage); 
    // console.log(newBlogs)
    if (newBlogs.length < itemsPerPage) {
      setHasMore(false); 
    }
    
    setBlogs(prevBlogs => [...prevBlogs, ...newBlogs]); 
  };

  const getBlogById = id => {
    return blogs.find(blog => blog.id === id); 
  };

  const getLikesCountById = (id) => {
    const blog = blogs.find(blog => blog.id === id);
    return blog ? blog.likes.length : 0; 
  };
  const likeBlog = (id, userId) => {
    setBlogs(prevBlogs =>
      prevBlogs.map(blog => {
        if (blog.id === id) {
          const hasLiked = blog.likes.includes(userId);
          return {
            ...blog,
            likes: hasLiked
              ? blog.likes.filter(uid => uid !== userId) 
              : [...blog.likes, userId], 
          };
        }
        return blog; 
      })
    );
  };


  return (
    <BlogContext.Provider value={{ blogs, fetchBlogs, hasMore, getBlogById,getLikesCountById,likeBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
