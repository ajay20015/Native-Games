import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useTheme, useNavigation} from '@react-navigation/native';
import { memo } from 'react';

const HorizontalGamesCard = ({item}) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const styles = ThemeStyles(colors);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('GamePLay', {url: item.item.gameUrl});
      }}>
      <View style={styles.item}>
        <Image style={styles.sliderImage} source={item.item.image} />
      </View>
    </TouchableOpacity>
  );
};

export default memo(HorizontalGamesCard);

const ThemeStyles = theme =>
  StyleSheet.create({
    item: {
      backgroundColor: theme.secondary,
      borderRadius: 10,
      padding: 2,
      marginHorizontal: 5,
    },
    sliderImage: {
      width: 150,
      height: 100,
      borderRadius: 10,
      objectFit: 'cover',
    },
  });
