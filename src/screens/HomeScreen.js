import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import ToggleTheme from '../components/ToggleTheme';
import BlogList from '../components/BlogList'; 
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {theme} = useTheme();
  const {blogs, loadMoreBlogs, showNoMoreBlogs} = useInfiniteScroll();
  
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <ToggleTheme />
      <BlogList
        blogs={blogs}
        theme={theme}
        navigation={navigation}
        loadMoreBlogs={loadMoreBlogs}
      />
      {showNoMoreBlogs && (
        <Text
          style={{
            textAlign: 'center',
            padding: 10,
            color: theme.textSecondary,
          }}>
          No more blogs to load
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
