/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState,useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
} from 'react-native';
import axios from "axios";
import { parseString } from 'xml2js'; // xml2jsライブラリをインポート

import {ListItem} from "../componens/ListItem"

const URL = "https://feeds.mtmx.jp/feed.xml";

export const HomeScreen = ({ navigation }: any) =>{
  const [articles, setArticles] = useState<Article[]>([]); // 初期値を空の配列に設定

  const fetchRSSFeed = async () => {
    try {
      const response = await axios.get(URL); // RSSフィードのURLを指定
      const xmlData = response.data;

      // XMLデータをJavaScriptオブジェクトにパースする
      parseString(xmlData, (err, result) => {
        if (!err) {
          setArticles(result.rss.channel[0].item); // パースされたデータをセット
        //   console.log(result.rss.channel[0].item);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchRSSFeed();
  },[])

  interface Article {
    imageUrl: string;
    title: string;
    // author:any;
    description:any;
  }

  const items = articles.map((article: Article, index: number) => (
    <ListItem
      imageUrl={article.imageUrl}
      title={article.title}
    //   author={article.author}
      key={index.toString()}
    />
  ));

  return (
      <SafeAreaView style={styles.container}>
        <FlatList
        data={articles}
        renderItem={({ item, index }) => (
          <ListItem
            imageUrl={item.description[0].match(/src="(.*?)"/)[1]}
            title={item.title[0]}
            // author={item.author[0]}
            key={index.toString()}
            onPress={() => navigation.navigate("Article",{article: item})}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#eee",
    // alignItems: "center",
    // justifyContent: "center",
    fontFamily: "メイリオ",
  },
});
