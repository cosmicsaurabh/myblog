import React from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import BlogCard from '../components/BlogCard';
import CommentSection from '../components/CommentSection';
import LikeButton from '../components/LikeButton';
import {useTheme} from '../context/ThemeContext';
import ShareButton from '../components/ShareButton';
import {SafeAreaView} from 'react-native-safe-area-context';

const BlogDetailScreen = ({route}) => {
  const {item} = route.params;
  const {theme} = useTheme();

  if (!item) {
    return <Text>No blog data available</Text>;
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <ScrollView
        style={[styles.container, {backgroundColor: theme.background}]}>
        <View
          style={[
            styles.cardContainer,
            {
              backgroundColor: theme.cardBackground,
              shadowColor: theme.shadowColor,
            },
          ]}>
          <BlogCard blog={item} showFullContent={true} />

          <View style={styles.buttonsContainer}>
            <LikeButton blogId={item.id} />
            <ShareButton blog={item} />
          </View>

          <Text style={[styles.subheading, {color: theme.text}]}>Comments</Text>
          <CommentSection blogId={item.id} comments={item.comments} />
        </View>
      </ScrollView>
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
  cardContainer: {
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  subheading: {},
});

export default BlogDetailScreen;
