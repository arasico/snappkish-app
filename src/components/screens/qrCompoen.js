import React , { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform , ImageBackground , ScrollView, Linking} from 'react-native';
import {H1, H2, HR} from '../../typography'
import SearchInput from '../../components/textgroup/search-input'; 
import normalize from '../../styles/normalizeText';


// example for QRcompoennt
// https://stackoverflow.com/questions/46948736/react-native-qrcode-scanner-cannot-read-property-oneoftype-undefined

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
        this.state = { errordev:'No Number',
        isAuthorized: true,
        reactivate: false 
      }
    }



    onSuccess =async(e) =>  {
       await this.setState({
            errordev: e.data,
            ticketNumber: e.data,
            isAuthorized: false,
            reactivate: false
        })
        this.onPressDashboard('TicketComponnet');
        // Linking
        //   .openURL(e.data)
        //   .catch(err => console.error('An error occured', err));
      }
 

      onPressDashboard  (val) {
        this.props.navigation.navigate(val,{ 'ticketNumber': this.state.ticketNumber}); //TODO deleet later 0000008

      }



    render() { 
 
        return ( 
            <View style={styles.container}>
                <View style={styles.lineBarcode}></View>
                <View style={styles.barcodeBox}></View>

                <QRCodeScanner 
                    showMarker={false}
                    fadeIn={true}
                    reactivate={true}
                    onRead={this.onSuccess.bind(this)}
                    isAuthorized={this.state.isAuthorized}
                    topContent={
                    <Text style={styles.centerText}>
                       Put Your QR Code
                    </Text>
                    }
                    bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable} onPress={() => this.onPressDashboard('TicketComponnet')}>
                        {/* <Text style={styles.buttonText}>OK. Got it!</Text> */}
                        <View style={styles.container} >
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
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#fff',

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
        width: '90%',
        top:'50%', 
        alignItems: 'center',


    },
    barcodeBox:{
        width:300,
        height: 200, 
        position:'absolute',
        zIndex:998, 
        top:'33%',
        borderRadius: 4,
        borderWidth: 10,
        borderColor: '#fff',
      


    }
  });
 
export default  QrCompoenent;