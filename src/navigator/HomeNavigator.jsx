import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import GamesListScreen from '../screens/GamesListScreen';
import GamePlayScreen from '../screens/GamePlayScreen';
import SearchGames from '../screens/SearchGames';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Category" component={CategoryScreen} />
      <HomeStack.Screen
        name="GamesList"
        initialParams={{type: 'All'}}
        component={GamesListScreen}
      />
      <HomeStack.Screen name="GamePLay" component={GamePlayScreen} />
      <HomeStack.Screen name="Search" component={SearchGames} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
