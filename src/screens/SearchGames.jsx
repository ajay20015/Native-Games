import {
  FlatList,
  Image,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useTheme, useNavigation} from '@react-navigation/native';
import {AllGames} from '../helper/GamesStore';
import Animated from 'react-native-reanimated';

const SearchGames = () => {
  const {colors} = useTheme();
  const styles = ThemeStyles(colors);
  const navigation = useNavigation();

  const [query, setQuery] = useState('');
  const [games, setGames] = useState([]);
  const [filterGames, setFilterGames] = useState([]);

  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    fnGetAllGames();
  }, []);

  const fnGetAllGames = () => {
    setGames(AllGames);
    setFilterGames(AllGames)
    setRefreshing(false);

  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fnGetAllGames();
  }, []);

  const HandleChangeInput = value => {
    setRefreshing(true);
    setQuery(value);
    if (value == '') {
      setRefreshing(false);
      setFilterGames(games);
    } else {
      searchByGameName(value);
    }
  };
  const searchByGameName = title => {
    const value = games.filter(res => {
      return res.title.toLowerCase().includes(title.toLowerCase());
    });
    setRefreshing(false);
    setFilterGames(value);
  };
  const CategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('GamePLay', {url: item.item.gameUrl});
        }}>
        <Animated.Image style={styles.sliderImage} source={item.item.image} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Pressable
        onPress={() => {
          navigation.navigate('Search');
        }}
        style={styles.searchContainar}>
        <Image
          style={styles.searchImage}
          source={require('../assets/images/search.png')}
        />
        <TextInput
          autoFocus
          placeholderTextColor={colors.primary}
          onChangeText={HandleChangeInput}
          cursorColor={colors.primary}
          placeholder="Search by game name"
          style={styles.searchText}
        />
      </Pressable>


      {filterGames.length > 0 ? (
        <FlatList
          keyExtractor={(item, index) => index}
          data={filterGames}
          numColumns={2}
          onRefresh={onRefresh}
          refreshing={refreshing}
          renderItem={item => <CategoryItem item={item} />}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={styles.noPostImage}
            source={require('../assets/images/noPosts.png')}
          />
          <Text
            style={{
              color: colors.primary,
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            No Posts Available
          </Text>
        </View>
      )}
    </>
  );
};

export default SearchGames;

const ThemeStyles = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      padding: 10,
      backgroundColor: theme.secondary,

      borderBottomWidth: 1.5,
      borderColor: theme.primary,
    },
    input: {
      width: '100%',
      height: 50,
      fontSize: 20,
      color: theme.primary,
      fontWeight: '500',
      //   backgroundColor: 'red',
    },
    logo: {
      height: 25,
      marginRight: 10,
      width: 25,
      objectFit: 'contain',
      marginTop: 10,
      tintColor: theme.primary,
    },
    searchContainar: {
      backgroundColor: theme.secondary,
      borderColor: theme.primary,
      borderWidth: 1,
      flexDirection: 'row',
      //   borderRadius: 7,
      alignItems: 'center',
      // height:50,
      padding: 7,
      //   margin: 5,
    },
    searchText: {
      fontSize: 18,
      marginLeft: 10,
      fontWeight: '400',
      color: theme.primary,
    },
    searchImage: {
      height: 20,
      width: 20,
      tintColor: theme.primary,
    },
    noPostImage: {
      height: '30%',
      width: '50%',
      objectFit: 'contain',
      // tintColor:COLORS.primary
    },
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
