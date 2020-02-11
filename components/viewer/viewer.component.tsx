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
      // Set text value and trigger keyup event
      var cameraTitle = '${cameraTitle}';
      var searchInputEl = document.querySelector('.liveCamerasSection .searchInput');
      searchInputEl.value = cameraTitle;

      var keyupTimeout;
      searchInputEl.addEventListener('keyup', e => {
        window.clearTimeout(keyupTimeout);
        keyupTimeout = setTimeout(() => {          
          
          var camLiEl = document.querySelector('ul.row.camerasList .cam-item');
          camLiEl.scrollIntoView();
          var scrollTimeout;
          window.addEventListener('scroll', e => {
            window.clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {          

              var camLinkEl = document.querySelector('ul.row.camerasList .cam-item .item');
              camLinkEl.click();

            }, 200);
          })
          
        }, 200);
      })

      if ("createEvent" in document) {
          var evt = document.createEvent("HTMLEvents");
          evt.initEvent("keyup", false, true);
          searchInputEl.dispatchEvent(evt);
      }
    `
  }
  render = () => {
    return (
      <WebView 
        source={{ uri: 'https://www.iroads.co.il/%D7%AA%D7%99%D7%A7%D7%99%D7%99%D7%AA-%D7%9E%D7%A6%D7%9C%D7%9E%D7%95%D7%AA' }} 
        scalesPageToFit={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={false}
        mixedContentMode="always"
        injectedJavaScript={this.filterCameraByString(this.props.route.params.camTitle)}
        onError={console.error.bind(console, 'error')}
      />
    )
  }
}