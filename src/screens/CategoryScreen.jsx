import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavigationHeader from '../components/NavigationHeader';
import {useTheme, useNavigation} from '@react-navigation/native';

const CategoryScreen = ({route}) => {
  const navigation = useNavigation();

  const {colors} = useTheme();
  const styles = ThemeStyles(colors);
  const [category, setCategory] = useState([]);

  useEffect(() => {
  }, [route.params.type]);

  const CategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('GamesList')}>
        <Image style={styles.sliderImage} source={item.item.image} />
        <Text style={styles.title}>New Game</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{backgroundColor: colors.primary, flex: 1}}>
      <NavigationHeader title="Game Categories" />
      <FlatList
        data={category}
        numColumns={2}
        keyExtractor={(item, index) => index}
        renderItem={item => <CategoryItem item={item} />}
      />
    </View>
  );
};

export default CategoryScreen;

const ThemeStyles = theme =>
  StyleSheet.create({
    item: {
      width: '45%',
      borderRadius: 10,
      margin: 10,
      alignItems: 'center',
    },
    sliderImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
      objectFit: 'cover',
    },
    title: {
      fontSize: 20,
      fontWeight: '800',
      color: theme.secondary,
    },
  });
