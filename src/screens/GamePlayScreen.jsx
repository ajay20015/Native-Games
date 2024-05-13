import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import WebView from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

const GamePlayScreen = ({route}) => {
  const navigation = useNavigation();
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(route.params.url);
  }, [route.params.url]);

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () =>
      navigation.getParent()?.setOptions({
        tabBarStyle: undefined,
      });
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: url}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
      />
    </View>
  );
};

export default GamePlayScreen;

const styles = StyleSheet.create({});
