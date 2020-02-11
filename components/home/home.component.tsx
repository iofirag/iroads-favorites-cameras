import React, {Component} from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { CamItem } from '../../types';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class HomeComponent extends Component<Props> {

  state = {
    iroadCamList: []
  }

  constructor() {
    super(null)
    this.init();
  }

  private async init() {
    const res = await fetch('https://raw.githubusercontent.com/iofirag/iroads-favorites-cameras/master/config.json');
    if (res) {
      const jsonRes = await res.json();
      this.setState({
        iroadCamList: jsonRes.iroadCamList
      })
    }
  }

  renderItem(item: CamItem, index) {
    const { navigation } = this.props;
    return (
      <TouchableOpacity 
        key={index} 
        style={styles.camTouchableOpacity} 
        onPress={() => { 
          navigation.navigate('Viewer', {camTitle: item.camTitle})
        }}>
        
        <Text style={styles.camText}>{item.camTitle}</Text>
        <Image source={{uri: item.camImg}} style={styles.camImage}/>
      </TouchableOpacity>
    )
  }
  
  render = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.iroadCamList}
          renderItem={({ item, index }) => this.renderItem(item, index)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  }
});