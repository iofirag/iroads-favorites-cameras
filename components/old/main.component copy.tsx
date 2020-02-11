// import React, {Component} from 'react';
// import { StyleSheet, Image, View, Text, TouchableOpacity, Modal } from 'react-native';
// import { WebView } from 'react-native-webview';



// export default class MainComponent extends Component {

//   private iroadList: string[] = [
//     'http://iroads.bvtech.co.il/upfiles/OHALIM/OHALIM.PNG',
//     'http://iroads.bvtech.co.il/upfiles/MODIININDUSTRY/MODIININDUSTRY.PNG',
//     'http://iroads.bvtech.co.il/upfiles/EVLAIM/evlaim.png'
//   ];
//   private closeButton: string = 'https://pluspng.com/img-png/exit-button-png-button-cancel-close-delete-exit-remove-stop-x-icon-512.png';
//   private avishayPhoto: string = 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/541269_330018203735025_466459741_n.jpg?_nc_cat=102&_nc_ohc=w8HiOSbDkOQAX9sWwAE&_nc_ht=scontent.fsdv2-1.fna&oh=6108fb4b96910ccb88193836739e15db&oe=5EBE8479';

//   state = {
//     modalVisible: false,
//   }

  
//   public setModalVisible = (visible) => {
//     this.setState({modalVisible: visible});
//   }
//   public toggleModal = () => {
//     this.setModalVisible(!this.state.modalVisible)
//   }
  
  
//   render = () => {
//     const buttonsList = this.iroadList.map((item, i) => {
//       return (
//         <TouchableOpacity key={i} style={styles.touchableOpacity} onPress={this.toggleModal}>
//           <Text>item {i+1}</Text>
//           <Image source={{uri: item}} style={styles.image}/>
//         </TouchableOpacity>
//       );
//     });

//     return (
//     <View style={styles.container}>
//       {/* <ModalComponent isVisible={this.state.modalVisible}></ModalComponent> */}
//         {/* <Modal
//           animationType="slide"
//           transparent={false}
//           visible={this.state.modalVisible}
//           onRequestClose={this.toggleModal}
//           >
//           <View style={styles.modalWrapper}>
//             <View style={styles.modal}>

//               <TouchableOpacity onPress={this.toggleModal}>
//                 <Image style={[styles.modalBackIcon]} source={{uri: this.closeButton}} />
//               </TouchableOpacity>
//               <Image style={[styles.modalContent]} source={{uri: this.avishayPhoto}} />
            
//             </View>
//           </View>
//         </Modal> */}

//       {buttonsList}
//     </View>
//     );
//   }
// }

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
