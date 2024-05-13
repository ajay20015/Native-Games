import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';

const NavigationHeader = ({title}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = ThemeStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.icons}
            source={require('../assets/images/back_arrow.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerTitle}>
        <Text style={styles.header}>{title}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default NavigationHeader;

const ThemeStyles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      padding: 10,
      paddingVertical: 15,
      backgroundColor: theme.secondary,
      borderBottomWidth: 1,
      borderColor: theme.primary,
      shadowColor: theme.secondary,
    },
    headerLeft: {},
    headerTitle: {
      marginLeft: 7,
    },
    header: {
      fontSize: 20,
      textAlignVertical: 'center',
      fontWeight: 'bold',
      color: theme.primary,
    },
    icon: {
      marginHorizontal: 10,
    },
    icons: {
      height: 25,
      width: 25,
      objectFit: 'contain',
      tintColor: theme.primary,
    },
  });
