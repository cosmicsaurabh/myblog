import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BlogProvider} from './src/context/BlogContext';
import {ThemeProvider} from './src/context/ThemeContext';
import {UserProvider} from './src/context/UserContext';
import HomeScreen from './src/screens/HomeScreen';
import BlogDetailScreen from './src/screens/BlogDetailScreen';
import Toast from 'react-native-toast-message';
import NetInfo from '@react-native-community/netinfo';
const Stack = createStackNavigator();

export default function App() {
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        setIsConnected(false);
        Toast.show({
          type: 'error',
          text1: 'Connection Lost',
          text2: 'You are currently offline. Please check your internet connection.',
        });
      } else {
        if (!isConnected) { 
          setIsConnected(true);
          Toast.show({
            type: 'success',
            text1: 'Connection Restored',
            text2: 'You are back online!',
          });
        }
      }
    });

    return () => {
      unsubscribe();
    };
  }, [isConnected]);
  return (
    <>
      <UserProvider>
        <ThemeProvider>
          <BlogProvider>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{headerShown: false}}>
                <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{title: 'Blog Home'}}
                />
                <Stack.Screen
                  name="BlogDetailScreen"
                  component={BlogDetailScreen}
                  options={{title: 'Blog Details'}}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </BlogProvider>
        </ThemeProvider>
      </UserProvider>
      <Toast />
    </>
  );
}
