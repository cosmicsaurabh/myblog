import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { BlogContext } from '../context/BlogContext';
import { UserContext } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext'; 
const LikeButton = ({ blogId }) => {
  const { likeBlog, getBlogById } = useContext(BlogContext);
  const { user } = useContext(UserContext); 
  const { theme } = useTheme();
  const blog = getBlogById(blogId);
  const hasLiked = blog.likes.includes(user.id); 

  const handleLike = () => {
    likeBlog(blogId, user.id); 
  };

  return (
    <TouchableOpacity
      style={[styles.button, hasLiked ? { backgroundColor: theme.likedButtonBackground } : { backgroundColor: theme.unlikedButtonBackground }]}
      onPress={handleLike}
    >
      
      <Text style={styles.buttonText}>
        {hasLiked ? `Unlike ${blog.likes.length}` : `Like ${blog.likes.length}`}
      </Text>
    </TouchableOpacity>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
