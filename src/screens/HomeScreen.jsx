import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme, useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import TrendingCarousel from '../components/Carousel';
import HorizontalGamesCard from '../components/HorizontalGamesCard';
import {AllGames, RecommendedGames} from '../helper/GamesStore';

const HomeScreen = () => {
  const {colors} = useTheme();
  const styles = ThemeStyles(colors);
  const navigation = useNavigation();
  const [recommendedGames, setRecommendedGames] = useState([]);
  const [sportsGames, setSportsGames] = useState([]);
  const [puzzleGames, setPuzzleGames] = useState([]);
  const [racingGames, setRacingGames] = useState([]);
  const [girlsGames, setGirlsGames] = useState([]);
  const [runGames, setRunGames] = useState([]);
  const [shooterGames, setShooterGames] = useState([]);
  const [cardsGames, setCardsGames] = useState([]);
  const [quizGames, setQuizGames] = useState([]);

  useEffect(() => {
    setRecommendedGames(RecommendedGames);
    setPuzzleGames([]);
    setRacingGames([]);
    setQuizGames([]);
    setSportsGames([]);
    setGirlsGames([]);
    setRunGames([]);
    setShooterGames([]);
    setCardsGames([]);
    AllGames.map(item => {
      if (item.category == 'PUZZLE') {
        setPuzzleGames(prev => [...prev, item]);
      } else if (item.category == 'SPORT') {
        setSportsGames(prev => [...prev, item]);
      } else if (item.category == 'QUIZ') {
        setQuizGames(prev => [...prev, item]);
      } else if (item.category == 'RACING') {
        setRacingGames(prev => [...prev, item]);
      } else if (item.category == 'CARDS') {
        setCardsGames(prev => [...prev, item]);
      } else if (item.category == 'SHOOTER') {
        setShooterGames(prev => [...prev, item]);
      } else if (item.category == 'GIRLS') {
        setGirlsGames(prev => [...prev, item]);
      } else if (item.category == 'RUN') {
        setRunGames(prev => [...prev, item]);
      }
    });
  }, []);

  return (
    <ScrollView
      style={{backgroundColor: colors.primary}}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[3]}
      scrollToOverflowEnabled={false}>
      <Header />
      <View style={{paddingVertical: 10}}>
        <Text style={styles.Header}> Trending Games 🔥</Text>
      </View>
      <TrendingCarousel />
      <Pressable
        onPress={() => {
          navigation.navigate('Search');
        }}
        style={styles.searchContainar}>
        <View style={{flexDirection:'row'}}>
          <Image
            style={styles.searchImage}
            source={require('../assets/images/search.png')}
          />
          <Text style={styles.searchText}>Search games...</Text>
        </View>
      </Pressable>
      <View style={styles.sideHeaderContainar}>
        <Text style={styles.subHeader}> Recommend Games 🕵️</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('GamesList', {type: 'All'})}>
          <Text style={styles.sideHeader}> View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recommendedGames}
        keyExtractor={(item, index) => index}
        renderItem={(item, index) => {
          return <HorizontalGamesCard key={index} item={item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sideHeaderContainar}>
        <Text style={styles.subHeader}> Racing 🏎️</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('GamesList', {type: 'RACING'})}>
          <Text style={styles.sideHeader}> View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={racingGames}
        keyExtractor={(item, index) => index}
        renderItem={(item, index) => {
          return <HorizontalGamesCard key={index} item={item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sideHeaderContainar}>
        <Text style={styles.subHeader}> Sport ⚽</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('GamesList', {type: 'SPORT'})}>
          <Text style={styles.sideHeader}> View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={sportsGames}
        renderItem={(item, index) => {
          return <HorizontalGamesCard key={index} item={item} />;
        }}
        keyExtractor={(item, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sideHeaderContainar}>
        <Text style={styles.subHeader}> Puzzle 🧩</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('GamesList', {type: 'PUZZLE'})}>
          <Text style={styles.sideHeader}> View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={puzzleGames}
        keyExtractor={(item, index) => index}
        renderItem={(item, index) => {
          return <HorizontalGamesCard key={index} item={item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sideHeaderContainar}>
        <Text style={styles.subHeader}> Quiz 💡</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('GamesList', {type: 'QUIZ'})}>
          <Text style={styles.sideHeader}> View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={quizGames}
        renderItem={(item, index) => {
          return <HorizontalGamesCard key={index} item={item} />;
        }}
        horizontal
        keyExtractor={(item, index) => index}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sideHeaderContainar}>
        <Text style={styles.subHeader}> RUN 🏃</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('GamesList', {type: 'RUN'})}>
          <Text style={styles.sideHeader}> View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={runGames}
        renderItem={(item, index) => {
          return <HorizontalGamesCard key={index} item={item} />;
        }}
        horizontal
        keyExtractor={(item, index) => index}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sideHeaderContainar}>
        <Text style={styles.subHeader}> Cards 🃏</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('GamesList', {type: 'CARDS'})}>
          <Text style={styles.sideHeader}> View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={cardsGames}
        renderItem={(item, index) => {
          return <HorizontalGamesCard key={index} item={item} />;
        }}
        horizontal
        keyExtractor={(item, index) => index}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sideHeaderContainar}>
        <Text style={styles.subHeader}> Shooter 🔫</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('GamesList', {type: 'SHOOTER'})}>
          <Text style={styles.sideHeader}> View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={shooterGames}
        renderItem={(item, index) => {
          return <HorizontalGamesCard key={index} item={item} />;
        }}
        horizontal
        keyExtractor={(item, index) => index}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.sideHeaderContainar}>
        <Text style={styles.subHeader}> Girls 🦸‍♀️</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('GamesList', {type: 'GIRLS'})}>
          <Text style={styles.sideHeader}> View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={girlsGames}
        renderItem={(item, index) => {
          return <HorizontalGamesCard key={index} item={item} />;
        }}
        horizontal
        keyExtractor={(item, index) => index}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const ThemeStyles = theme =>
  StyleSheet.create({
    Header: {
      color: theme.secondary,
      fontSize: 25,
      fontWeight: 'bold',
    },
    sideHeaderContainar:{
              margin: 5,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
    },
    subHeader: {
      color: theme.secondary,
      fontSize: 20,
      fontWeight: 'bold',
    },
    sideHeader: {
      color: theme.secondary,
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 10,
    },
    searchContainar: {
      backgroundColor: theme.secondary,
      borderColor: theme.primary,
      borderWidth: 1,
      flexDirection: 'row',
      borderRadius: 7,
      alignItems: 'center',
      // height:50,
      padding: 15,
      margin: 5,
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
  });
