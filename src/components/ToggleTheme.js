import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { lightTheme,darkTheme } from '../theme';
const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={toggleTheme}>
        <Text style={[styles.buttonText, { color: theme.text }]}>
          {theme === lightTheme ? 'Dark' : 'Light'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007BFF', 
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default ToggleTheme;
