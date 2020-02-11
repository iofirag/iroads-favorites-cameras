import React, {Component} from 'react';
import { WebView } from 'react-native-webview';
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
}