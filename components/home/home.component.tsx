import React, {Component} from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { CamItem, LoadingStatus } from '../../types';
import * as Utils from '../../utils/helpers';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class HomeComponent extends Component<Props> {

  state = {
    iroadCamList: [],
    loadingImage: '',
    loadingStatus: LoadingStatus.None,
  }

  constructor(props) {
    super(props)
    this.init();
  }

  private async init() {
    try {
      await this.getConfiguration();
    } catch(error) {
      console.error(error);
    }
  }

  private async getConfiguration() {
    this.setState({
      ...this.setState,
      loadingStatus: LoadingStatus.Loading
    });
    const jsonRes = await Utils.getConfiguration();
    this.setState({
      ...this.setState,
      loadingStatus: LoadingStatus.Loaded,
      loadingImage: jsonRes?.loadingImageList[Utils.randomIntFromInterval(0, jsonRes?.loadingImageList?.length-1)],
    })
    setTimeout(() => {
      this.setState({
        ...this.state,
        iroadCamList: jsonRes.iroadCamList,
        loadingStatus: LoadingStatus.Done,
      })
    }, 2000);
  }

  renderItem(item: CamItem, index) {
    const { navigation } = this.props;
    return (
      <TouchableOpacity 
        key={'touchableOpacity'+index} 
        style={styles.camTouchableOpacity} 
        onPress={() => { 
          navigation.navigate('Viewer', {camTitle: item.camTitle})
        }}>
        
        <Text key={'text'+index} style={styles.camText}>{item.camTitle}</Text>
        <Image key={'image'+index} source={{uri: item.camImg}} style={styles.camImage}/>
      </TouchableOpacity>
    )
  }
  
  render = () => {
    return (
      <View style={styles.container}>
        {
          this.state.loadingStatus === LoadingStatus.Done ?
            <FlatList
              data={this.state.iroadCamList}
              renderItem={({ item, index }) => this.renderItem(item, index)}
            />
            :
            <Image source={{uri: this.state.loadingImage}} style={styles.loadingImage}/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camTouchableOpacity: {
    width: '100%',
    padding: 20,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  camText: {
    fontWeight: '700',
    fontSize: 30,
  },
  camImage: {
    resizeMode: 'cover',
    height: 170,
    width: '100%',
    // 
    // flex: 1,
    // resizeMode: 'contain',
    // width: '100%',
    // 
  },
  loadingImage: {
    flex: 1,
    resizeMode: 'cover',
    // height: 500,
    // width: '100%',
  }
});