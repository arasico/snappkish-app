import React , { Component } from 'react';
import {View, Text, StyleSheet, 
    TouchableOpacity, KeyboardAvoidingView, TextInput , ImageBackground , ScrollView, Linking} from 'react-native';
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




class  KeyPadComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            errordev:'No Number',
            isAuthorized: true,
            reactivate: false 
        }
    }



    onSuccess(e) {
        this.setState({
            errordev: e.data,
            isAuthorized: false,
            reactivate: true
        })
        this.onPressDashboard('TicketComponnet');
        // Linking
        //   .openURL(e.data)
        //   .catch(err => console.error('An error occured', err));
      }
 

      onPressDashboard  (val) {
        this.props.navigation.navigate(val);
      }



    render() { 
 
        return ( 
            <View style={styles.container}>
                <View style={styles.cards}>

                    <Text>Example</Text>
                    <TextInput
                       
                        value=''
                        placeholder='کد بلیط'
                        keyboardType='keyboard'
                        placeholderTextColor="rgba(35, 36, 42, 0.3)"
                        // onChangeText={onChangeText}
                        // onChange={onChange}
                   
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        />
                </View>

            </View>
         );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#f5f5f5',
        padding:5,

    }, 
    cards: {
        width:'93%',
        backgroundColor:'#fff',
        elevation: 3 ,
        borderRadius: 3 , 
        padding: 5

    },
  });
 
export default  KeyPadComponent;