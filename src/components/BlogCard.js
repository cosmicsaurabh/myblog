import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {useTheme} from '../context/ThemeContext';

const BlogCard = ({blog, showFullContent}) => {
  const {theme} = useTheme();
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const handleImageError=()=>{
    setImageError(true);
    setLoading(false);
  }
  return (
    <View style={[styles.card, {backgroundColor: theme.cardBackground}]}>
      {loading && <Text style={styles.errorText}>Loading IMG...</Text>}
      <Image 
        source={imageError ? require('../assets/alt-image.png') : { uri: blog.imageUrl }} 
        style={styles.image}  
        onLoadEnd={() => setLoading(false)}
        onError={handleImageError} 
      />
      <Text style={[styles.title, {color: theme.text}]}>{blog.title}</Text>
      <Text
        numberOfLines={showFullContent ? undefined : 2}
        style={[styles.text, {color: theme.textSecondary}]}>
        {blog.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
  },
  errorText: {
    color: 'red', 
    textAlign: 'center', 
  },
});

export default BlogCard;
