import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useTheme, useNavigation} from '@react-navigation/native';
import NavigationHeader from '../components/NavigationHeader';
import Animated from 'react-native-reanimated';
import {AllGames} from '../helper/GamesStore';
const GamesListScreen = ({route}) => {
  const {colors} = useTheme();
  const styles = ThemeStyles(colors);
  const navigation = useNavigation();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    let Type = route.params.type;

    if (Type == 'All') {
      setCategory(AllGames);
    } else {
      let response = AllGames.filter(item => item.category == Type);
      setCategory(response);
    }
  }, [route.params.type]);

  const CategoryItem =useCallback(({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('GamePLay', {url: item.item.gameUrl})
        }}>
        <Animated.Image style={styles.sliderImage} source={item.item.image} />
      </TouchableOpacity>
    );
  },[])
  return (
    <View style={{backgroundColor: colors.primary, flex: 1}}>
      <NavigationHeader title={route.params.type + ' Games'} />
      <FlatList
        keyExtractor={(item, index) => index}
        data={category}
        numColumns={2}
        renderItem={item => <CategoryItem item={item} />}
      />
    </View>
  );
};

export default GamesListScreen;

const ThemeStyles = theme =>
  StyleSheet.create({
    item: {
      // backgroundColor: theme.secondary,
      width: '45%',
      borderRadius: 10,
      margin: 10,
      alignItems: 'center',

      // marginHorizontal: 5
    },
    sliderImage: {
      width: '100%',
      height: 250,
      borderRadius: 10,
      objectFit: 'cover',
    },
    title: {
      fontSize: 20,
      fontWeight: '800',
      color: theme.secondary,
      // marginTop:5
    },
  });
