import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StoreContext} from '../hooks/AppProvider';
import HomeNavigator from './HomeNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import themeColors from '../constant/theme';
import ProfileNavigator from './ProfileNavigator';

const AppNavigator = () => {
  const BottomTab = createBottomTabNavigator();
  const {theme} = useContext(StoreContext);

  const HomeIcon = ({focused}) => {
    return (
      <Image
        style={[
          styles.icon,
          {
            tintColor: focused
              ? theme == 'dark'
                ? themeColors['dark'].colors.primary
                : themeColors['light'].colors.primary
              : theme == 'dark'
              ? themeColors['light'].colors.primary
              : themeColors['dark'].colors.primary,
          },
        ]}
        source={require('../assets/images/home.png')}
      />
    );
  };
  const ProfileIcon = ({focused}) => {
    return (
      <Image
        style={[
          styles.icon,
          {
            tintColor: focused
              ? theme == 'dark'
                ? themeColors['dark'].colors.primary
                : themeColors['light'].colors.primary
              : theme == 'dark'
              ? themeColors['light'].colors.primary
              : themeColors['dark'].colors.primary,
          },
        ]}
        source={require('../assets/images/profile.png')}
      />
    );
  };

  return (
    <>
      <StatusBar
        barStyle={theme == 'dark' ? 'dark-content' : 'light-content'}
        backgroundColor={
          theme == 'dark'
            ? themeColors['dark'].colors.primary
            : themeColors['light'].colors.primary
        }
      />
      <NavigationContainer
        theme={theme == 'dark' ? themeColors['dark'] : themeColors['light']}>
        <BottomTab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveBackgroundColor:
              theme == 'dark'
                ? themeColors['light'].colors.primary
                : themeColors['dark'].colors.primary,
            tabBarActiveTintColor:
              theme == 'dark'
                ? themeColors['dark'].colors.primary
                : themeColors['light'].colors.primary,
            tabBarInactiveBackgroundColor:
              theme == 'dark'
                ? themeColors['dark'].colors.primary
                : themeColors['light'].colors.primary,
            tabBarInactiveTintColor:
              theme == 'dark'
                ? themeColors['light'].colors.primary
                : themeColors['dark'].colors.primary,
          }}>
          <BottomTab.Screen
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({focused}) => <HomeIcon focused={focused} />,
            }}
            name="HomeNav"
            component={HomeNavigator}
          />
          <BottomTab.Screen
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({focused}) => <ProfileIcon focused={focused} />,
            }}
            name="ProfileNav"
            component={ProfileNavigator}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    objectFit: 'contain',
  },
});
