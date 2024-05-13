import React from 'react';
import {Image, Text, View} from 'react-native';
import {useTheme,useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ScaledSheet} from 'react-native-size-matters';
import Animated from 'react-native-reanimated';

const Header = () => {
  navigation=useNavigation()
  const {colors} = useTheme();
  const styles = ThemeStyles(colors);
  return (
    <View style={styles.containar}>
      <View style={styles.content}>
        <Text style={styles.name}>Hi Ajay,</Text>
        <Text style={styles.message}>Welcome Back!</Text>
      </View>
      <TouchableOpacity
        style={styles.profile}
        onPress={() => {
          navigation.navigate('ProfileNav');
        }}>
        <Animated.Image sharedTransitionTag='tag'
          style={styles.profileImage}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/116625124?v=4',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const ThemeStyles = theme =>
  ScaledSheet.create({
    containar: {
      backgroundColor: theme.secondary,
      height: '70@vs',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15@s',
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10
    
    },
    content: {},
    name: {
      color: theme.primary,
      fontSize: 22,
    },
    message: {
      color: theme.primary,
      fontSize: 22,
      fontWeight: '800',
    },
    profile: {
      backgroundColor: theme.secondary,
      padding: 5,
      borderRadius: 20,
    },
    profileImage: {
      height: 30,
      width: 30,
      borderRadius: 50,
      objectFit: 'cover',
    },
  });
