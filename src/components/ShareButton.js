import React from 'react';
import { Button,Share } from 'react-native';
import { useTheme } from '../context/ThemeContext';
const ShareButton = ({ blog }) => {
    const {theme} = useTheme();
    const shareBlog = async () => {
        try {
          await Share.share({
            message: `${blog.title}\n\n${blog.text}`,
            
          });
        } catch (error) {
          console.error('Share failed:', error.message); 
        }
      };

      return(
        <Button
        title="Share"
        onPress={shareBlog}
        color={theme.buttonBackground} 
      />

      );
};

export default ShareButton;
