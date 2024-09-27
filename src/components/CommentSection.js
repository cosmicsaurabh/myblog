import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const CommentSection = ({ comments }) => {
  const { theme } = useTheme(); 

  return (
    <View style={[styles.container, { backgroundColor: theme.cardBackground }]}>
      {comments.length === 0 ? (
        <Text style={[styles.noComments, { color: theme.text }]}>No comments yet.</Text>
      ) : (
        comments.map((comment, index) => (
          <View key={index} style={[styles.commentContainer, { backgroundColor: theme.cardBackground }]}>
            <View style={styles.userAvatar}>
              <Text style={styles.avatarText}>{comment.username.charAt(0).toUpperCase()}</Text>
            </View>
            <View style={styles.commentContent}>
              <Text style={[styles.username, { color: theme.text }]}>{comment.username}</Text>
              <Text style={[styles.commentText, { color: theme.text }]}>{comment.text}</Text>
              <Text style={[styles.timestamp, { color: theme.text }]}>{comment.timestamp}</Text>
            </View>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
  },
  noComments: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#007BFF',  
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatarText: {
    color: '#fff', 
    fontWeight: 'bold',
  },
  commentContent: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 2,
  },
  commentText: {
    fontSize: 14,
    marginBottom: 2,
  },
  timestamp: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default CommentSection;
