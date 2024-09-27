import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import BlogCard from '../components/BlogCard';


const BlogList = ({ blogs, theme, navigation, loadMoreBlogs }) => (
  <FlatList
    data={blogs}
    renderItem={({ item }) => (
      <TouchableOpacity
        onPress={() => navigation.navigate('BlogDetailScreen', { item })}
        style={[styles.blogCardContainer, { backgroundColor: theme.cardBackground }]}
      >
        <BlogCard blog={item} showFullContent={false} />
      </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id.toString()}
    contentContainerStyle={styles.flatListContent}
    onEndReached={loadMoreBlogs}
    onEndReachedThreshold={0.5}
  />
);

const styles = StyleSheet.create({
  blogCardContainer: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  flatListContent: {
    paddingBottom: 20,
  },
});

export default BlogList;
