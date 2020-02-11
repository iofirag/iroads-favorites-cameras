// import React, {Component} from 'react';
// import { StyleSheet, Image, View, Text, TouchableOpacity, Modal, Alert, TouchableHighlight } from 'react-native';

// export default class ModalComponent extends React.Component {

//   public isVisible = false;
//   private closeButton: string = 'https://pluspng.com/img-png/exit-button-png-button-cancel-close-delete-exit-remove-stop-x-icon-512.png';
//   private avishayPhoto: string = 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/541269_330018203735025_466459741_n.jpg?_nc_cat=102&_nc_ohc=w8HiOSbDkOQAX9sWwAE&_nc_ht=scontent.fsdv2-1.fna&oh=6108fb4b96910ccb88193836739e15db&oe=5EBE8479';
  
  
//   render = () => {
//     return (
//       <View style={styles.container}>
//         <Modal
//           animationType="slide"
//           transparent={false}
//           visible={this.props.isVisible}
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
//         </Modal>
//       </View>
//     );
//   }
// }

// ModalComponent.propTypes ={
//   isVisible: React.PropTypes.bool.isRequired
// }

// const styles = StyleSheet.create({
//   modalWrapper: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: 'center',
//     flexDirection: "column",
//   },
//   modal: {
//     display: 'flex',
//     flexDirection: "row-reverse",
//     justifyContent: 'center',
//     paddingLeft: -50,
//   },
//   modalBackIcon: {
//     width: 50,
//     height: 50,
//     resizeMode: "contain",
//   },
//   modalContent: {
//     marginTop:50,
//     marginLeft: 50,
//     width: 200,
//     height: 200,
//     resizeMode: "contain",
//   },
//   container: {
//     marginTop: 30,
//     marginRight: 20,
//     marginLeft: 20,
//     backgroundColor: '#fff',
//   },
// });
