import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AccountsScreen from '../screens/AccountsScreen';
import LanguageScreen from '../screens/LanguageScreen';
import PolicyScreen from '../screens/PolicyScreen';

const ProfileNavigator = () => {
  const ProfileStack = createNativeStackNavigator();
  return (
    <ProfileStack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="Edit-Profile" component={EditProfileScreen} />
      <ProfileStack.Screen
        name="Settings"
        initialParams={{type: 'All'}}
        component={SettingsScreen}
      />
      <ProfileStack.Screen name="Accounts" component={AccountsScreen} />
      <ProfileStack.Screen name="Language" component={LanguageScreen} />
      <ProfileStack.Screen name="Terms-Conditions" component={PolicyScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
