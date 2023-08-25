/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

/**
 * @param {
 *  imageUrl: 画像URL(string)
 *  title: タイトル(string)
 *  author: ニュース提供元(string)
 *  onPress: タップされたときのイベント
 * } props
 * @returns 
 */
export const ListItem = (props:any) => {
  const TitleText= "サンプル";
  return (
        <TouchableOpacity style={styles.itemconteainer} onPress={props.onPress}>
          <View style={styles.leftconteainer}>
            <Image 
              style={{width: 100, height: 100}}
              source={{uri:props.imageUrl}}
            />
          </View>
          <View style={styles.rightconteainer}>
            <Text numberOfLines={3} style={styles.text}>
              {props.title}
            </Text>
            <Text style={styles.auther}>{props.auther}</Text>
          </View> 
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemconteainer:{
    height:100,
    width:"100%",
    flexDirection:"row",
    backgroundColor:"white",
    marginVertical:1,
  },
  leftconteainer:{
    width:100,
  },
  rightconteainer:{
    flex:1,
    padding:10,
    justifyContent:"space-between",
  },
  text:{
    fontSize:16,
  },
  auther:{
    fontSize:12,
    color: "gray",
  }
});

