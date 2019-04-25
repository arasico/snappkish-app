import React , { Component } from 'react';
import {View, Text, StyleSheet, 
    TouchableOpacity, KeyboardAvoidingView, TextInput , ImageBackground , ScrollView, Linking, ActivityIndicator} from 'react-native';
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
            reactivate: false ,
            ticketNumber:''
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

                    <Text style={styles.titlerOfTextBox}>کد بلیط</Text>
                        <View style={{flexDirection:'row',  backgroundColor:'yellow' }}>
                            <View style={{flex:1, backgroundColor:'red'}}></View>
                            <View style={{flex:5}}>
                                <TextInput
                                     
                                    style={styles.textInputStyle}
                                    placeholder='_  _  _  _  _  _  _  _'
                                    keyboardType='keyboard' 
                                    placeholderTextColor="rgba(35, 36, 42, 0.3)"
                                    // onChangeText={onChangeText}
                                    // onChange={onChange}
                                    onChangeText={(ticketNumber) => this.setState({ticketNumber})}

                                    underlineColorAndroid="transparent"
                                    autoCapitalize="none"
                                />                    
                            </View>
                            <View style={{flex:1,       alignItems:'center', justifyContent:'center' , borderLeftWidth:1, borderLeftColor:'#f1f1f1'}}>
                                <Text style={styles.textStyle}>A</Text>
                            </View>
                        </View>
                </View>
                <View style={styles.cards}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.onPressSending}>
                            <View >
                                <View >
                                    {this.state.isLoading ? (
                                        <ActivityIndicator color="#333" />
                                    ) : (
                                        <Text style={styles.txt}>ارسال</Text>
                                    )}
                                </View>
                            </View>
                    </TouchableOpacity>
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
        padding: 5,
        marginBottom: 10
       

    },
    textStyle :{
        fontFamily:'IRANSans',
        fontSize: normalize(20),
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',

    },
    textInputStyle: {
        textAlign:'center',
        fontSize:normalize(20)
    },
    titlerOfTextBox : {
        fontFamily:'IRANSans',
        fontSize:normalize(18),
        color:'#333333',

    },
    buttonContainer:{
        flexDirection: 'row',
        backgroundColor: '#ededed',
        height:60,
        width:'100%',
        borderRadius: 50,
        justifyContent: 'center', 
        alignItems:'center'
     },
     txt:{
        fontFamily:'IRANSans',
        color:colors.red,
   
    },
  });
 
export default  KeyPadComponent;