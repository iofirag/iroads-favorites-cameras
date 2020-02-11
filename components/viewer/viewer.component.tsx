import React, {Component} from 'react';
import { WebView } from 'react-native-webview';
import { Alert } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

interface Props {
  route: any, 
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class ViewerComponent extends Component<Props> {
  
  private filterCameraByString(cameraTitle = '') {
    return `
      var cameraTitle = '${cameraTitle}'
      var searchInputEl = document.querySelector('.liveCamerasSection .searchInput');
      searchInputEl.value = cameraTitle;
      if ("createEvent" in document) {
          var evt = document.createEvent("HTMLEvents");
          evt.initEvent("keyup", false, true);
          searchInputEl.dispatchEvent(evt);
      }

      var scrollInterval;
      scrollInterval = setInterval(() => {
          var camAElList = document.querySelectorAll('ul.row.camerasList .cam-item .item');
          if (camAElList.length === 1) {
              clearInterval(scrollInterval)
              camAElList[0].click();
          }
      }, 100);

      var camLiEl = document.querySelector('ul.row.camerasList .cam-item');
      camLiEl.scrollIntoViewIfNeeded();
    `
  }
  render = () => {
    return (
      <WebView 
        source={{ uri: 'https://www.iroads.co.il/%D7%AA%D7%99%D7%A7%D7%99%D7%99%D7%AA-%D7%9E%D7%A6%D7%9C%D7%9E%D7%95%D7%AA' }} 
        scalesPageToFit={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        mixedContentMode="always"
        injectedJavaScript={this.filterCameraByString(this.props.route.params.camTitle)}
        onError={console.error.bind(console, 'error')}
      />
    )
  }
  // render = () => {
  //   // const { navigation } = this.props;
  //   return (
  //     <WebView 
  //       source={{ uri: 'https://www.google.com' }} 
  //       scalesPageToFit={true} 
  //     />
  //   )
  // }
  // render = () => {
  //   // const { navigation } = this.props;
  //   return (
  //     // <View style={{ height: 150, width: 150,overflow:'hidden' }}>
  //       <WebView source={{ uri: 'https://www.google.com' }} />
  //           // {/* <WebView
  //             // source={{ uri: 'https://github.com/facebook/react-native' }}
  //             // scalesPageToFit={true}
  //           // /> */}
  //     // </View>
  //     // <WebView 
  //     //   source={{uri: 'https://www.google.com'}} 
  //     //   style={{width: '100%', height:'100px'}}
  //     // />
  //     // <View style={{ height: 150, width: 150,overflow:'hidden' }}>
  //     //   <Text>Viewer screen</Text>
  //     //   {/* <WebView
  //     //     originWhitelist={['*']}
  //     //     source={{html: '<h1>Hello world</h1>'}}
  //     //   /> */}
        
  //     //   {/* <WebView
  //     //     source={{uri: 'https://github.com'}}
  //     //     style={{width: '100%', height:'100px'}}
  //     //     /> */}
  //     //   {/* <WebView
  //     //     // ref={null}
  //     //     source={{uri: 'https://www.google.com'}}
  //     //     onError={console.error.bind(console, 'error')}
  //     //     javaScriptEnabled={true}
  //     //     style={{width: '100%', height:'100px'}}
  //     //   /> */}
  //     //   <Button title="Go back" onPress={() => navigation.goBack()} />
  //     // </View>
  //   )
  // }
}

// const styles = StyleSheet.create({
//   webView: {
//     backgroundColor: 'green',
//   },
//   container: {
//     marginTop: 30,
//     marginRight: 20,
//     marginLeft: 20,
//     backgroundColor: '#fff',
//   },
//   touchableOpacity: {
//     width:'100%', 
//     height: '30%',
//     marginBottom: 20
//   },
//   image: {
//     width:'100%', 
//     height: '90%',
//   }
//   // modalWrapper: {
//   //   flex: 1,
//   //   alignItems: "center",
//   //   justifyContent: 'center',
//   //   flexDirection: "column",
//   // },
//   // modal: {
//   //   display: 'flex',
//   //   flexDirection: "row-reverse",
//   //   justifyContent: 'center',
//   //   paddingLeft: -50,
//   // },
//   // modalBackIcon: {
//   //   width: 50,
//   //   height: 50,
//   //   resizeMode: "contain",
//   // },
//   // modalContent: {
//   //   marginTop:50,
//   //   marginLeft: 50,
//   //   width: 200,
//   //   height: 200,
//   //   resizeMode: "contain",
//   // },
// });
