import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
  } from 'react-native';
  import { WebView } from 'react-native-webview';

  export const ArticleScreen = ({route}: any ) =>{
    const {article} = route.params;
    const URL:string = article.link;
    return(
        <SafeAreaView style={styles.container}>
            <WebView
             source={{ uri: URL.toString() }}
            />
            {/* <Text>{ URL.toString() }</Text> */}
        </SafeAreaView>
   )
  };

  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
    }
  });