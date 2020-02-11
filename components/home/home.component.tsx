import React, {Component} from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class HomeComponent extends Component<Props> {
  
  private iroadCamList: {camImg: string, camTitle: string}[] = []

  constructor(props) {
    super(props)
    this.init();
  }

  private async init() {
    const res = await fetch('https://mywebsite.com/mydata.json');
    if (res) {
      const jsonRes = await res.json();
      this.iroadCamList = jsonRes.iroadCamList;
    }
  }

  renderItem(item) {
    const { navigation } = this.props;
    return (
      <TouchableOpacity 
        key={item.camTitle} 
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
          data={this.iroadCamList}
          renderItem={({ item }) => this.renderItem(item)}
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