import React , { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform , ImageBackground , ScrollView, Linking} from 'react-native';
import {H1, H2, HR} from '../../typography'
import SearchInput from '../../components/textgroup/search-input'; 
import normalize from '../../styles/normalizeText';




//
// QR code scanner liby
//    
import QRCodeScanner from 'react-native-qrcode-scanner';



//
//
import colors from '../../styles/colors'
import Icon from '../../styles/icons'




class  QrCompoenent extends Component {
    constructor(props) {
        super(props);
        this.state = { errordev:'No Number'  }
    }



    onSuccess(e) {
        this.setState({
            errordev: e.data
        })
        // Linking
        //   .openURL(e.data)
        //   .catch(err => console.error('An error occured', err));
      }
 

    render() { 
 
        return ( 
            <View style={styles.container}>
            <View style={styles.lineBarcode}></View>
                <QRCodeScanner 
                    
                    onRead={this.onSuccess.bind(this)}
                    topContent={
                    <Text style={styles.centerText}>
                       Put Your QR Code
                    </Text>
                    }
                    bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable}>
                        {/* <Text style={styles.buttonText}>OK. Got it!</Text> */}
                        <View style={styles.container}>
                            <Text  style={styles.buttonTouchable}>{this.state.errordev}</Text>
                        </View>
                    </TouchableOpacity>

                    }
                />

              

            </View>
         );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    centerText: { 
      fontSize: 18,
      padding: 10, 
      borderColor: '#fff',
      textAlign: 'center',
    },
    textBold: {
      fontWeight: '500',
      color: '#000',
      borderRadius: 4,
      borderWidth: 5,
      borderColor: '#fff',
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)', 
    },
    buttonTouchable: {
      padding: 16,
   
    },
    lineBarcode :{
        position:'absolute',
        zIndex:999, 
        borderWidth: 2,
        borderColor: 'rgba(197, 20, 20, 0.45098039215686275)',
        width: '100%',
        top:'50%'

    }
  });
 
export default  QrCompoenent;