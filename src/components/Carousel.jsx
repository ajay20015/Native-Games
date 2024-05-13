import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {screenHeight, screenWidth} from '../utils/dimentions/dimentions';
import {useTheme, useNavigation} from '@react-navigation/native';
import {TrendingGames} from '../helper/GamesStore';
const TrendingCarousel = () => {
  const {colors} = useTheme();
  const styles = ThemeStyles(colors);
  const navigation = useNavigation();
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('GamePLay', {url: item.gameUrl});
        }}>
        <View style={styles.item}>
          <Image style={styles.sliderImage} source={item.image} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Carousel
      loop
      width={screenWidth}
      height={220}
      autoPlay={true}
      data={TrendingGames}
      autoPlayInterval={1500}
      pagingEnabled
      scrollAnimationDuration={1000}
      renderItem={renderItem}
    />
  );
};
const ThemeStyles = theme =>
  StyleSheet.create({
    item: {
      backgroundColor: theme.secondary,
      borderRadius: 10,
      padding: 2,
      marginHorizontal: 5,
      //   marginVertical: 15,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 0.84,
      elevation: 2,
      // shadowColor: theme.secondary,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
    },
    sliderImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      objectFit: 'fill',
    },
  });

export default TrendingCarousel;
