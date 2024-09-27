import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import ToggleTheme from '../components/ToggleTheme';
import BlogList from '../components/BlogList';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {theme} = useTheme();
  const {blogs, loadMoreBlogs, showNoMoreBlogs} = useInfiniteScroll();
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex:1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
