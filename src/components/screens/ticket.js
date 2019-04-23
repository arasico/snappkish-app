import React , { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, 
    KeyboardAvoidingView, Platform , 
    ImageBackground , ScrollView, Image} from 'react-native';
import {H1, H2, HR} from '../../typography'
import SearchInput from '../../components/textgroup/search-input'; 
import normalize from '../../styles/normalizeText';



 


//
//
import colors from '../../styles/colors'
import Icon from '../../styles/icons'
//
// Icons form react native vectors ------------------->
//

import IconsIonic from 'react-native-vector-icons/Ionicons' 
import IocnFontAwesome5 from 'react-native-vector-icons/FontAwesome5' 
import IocnsEntypo from 'react-native-vector-icons/Entypo' 





class  TicketComponnet extends Component {
    constructor(props) {
        super(props);
         
    }


 

    render() { 
 
        return ( 
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerClose}>
                        <TouchableOpacity style={styles.btnClose}>
                            <IconsIonic style={{color: '#333333'}}  size={20} name='md-close' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={{fontFamily:'IRANSans_Bold' , fontSize:normalize(20), color:'#333333'}}>اطلاعات بلیط</Text>
                    </View>
                </View>

                <View style={{width:'100%',  alignItems: 'center', }}> 
                    <View style={styles.card}>
                        <View style={styles.logoContainer}>
                            <Image
                                source={require('../../assets/img/logo.png')}
                                style={styles.logo}
                            />
                        </View>

                        <View style={styles.contentContainer}>
                            <View style={styles.menuButtonContainer}>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnsEntypo style={{color: '#46ADD8'}}  size={30} name='old-phone' />
                                    <Text style={styles.buttonTittle}>تلفن تماس</Text>
                                    <Text style={styles.buttonTittleBold}>09111231425</Text>
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={30} name='user-alt' />
                                    <Text style={styles.buttonTittle}>نام و نام خانوادگی</Text>
                                    <Text style={styles.buttonTittleBold}>امیدآرمانی</Text>
                                </TouchableOpacity>  
                            </View>

                            <View style={styles.menuButtonContainer}>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(25)} name='calendar-alt' />
                                    <Text style={styles.buttonTittle}> تاریخ</Text>
                                    <Text style={styles.buttonTittleBold}>10/12/2019</Text>
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(25)} name='ticket-alt' />
                                    <Text style={styles.buttonTittle}> نام محصول </Text>
                                    <Text style={styles.buttonTittleBold}>پاراگلایدر</Text>
                                </TouchableOpacity>  
                            </View>

                            <View style={styles.menuButtonContainer}>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(25)} name='clock' />
                                    <Text style={styles.buttonTittle}> سانس</Text>
                                    <Text style={styles.buttonTittleBold}>10 - 12</Text>
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(25)} name='coins' />
                                    <Text style={styles.buttonTittle}>مبلغ</Text>
                                    <Text style={styles.buttonTittleBold}>130.000 تومان</Text>
                                </TouchableOpacity>  
                            </View>

                            <View style={styles.menuButtonContainer}>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(25)} name='users' />
                                    <Text style={styles.buttonTittle}> تعداد</Text>
                                    <Text style={styles.buttonTittleBold}>15 نفر</Text>
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(25)} name='user-secret' />
                                    <Text style={styles.buttonTittle}>نام آژانس</Text>
                                    <Text style={styles.buttonTittleBold}>آژانس وحدت</Text>
                                </TouchableOpacity>  
                            </View>

                        </View>
                    </View>
                </View>

            </View>
         );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor: '#F6F6F6',
        
    },

    header : {
        width:'100%',
        height: 70, 
        top:0,
        flexDirection: 'row',
        elevation : 3, 

    },
    headerClose :{ 
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerTitle: { 
        flex:5,
        justifyContent: 'center',
        paddingRight: 20

    },
    btnClose :{
        width:40,
        height:40,
        backgroundColor:'#fcfcfc',
        borderRadius: 300,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:2,
    },
    card : {
        width:'93%',
        backgroundColor:'#fff',
        elevation: 3 ,
        borderRadius: 3 , 
        padding: 5
    },
    logoContainer : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        resizeMode: 'contain',
        height: 80,
        
    },
    contentContainer : {
        width:'100%', 
        // backgroundColor:'red',
        flexDirection: 'column',
    
    },
    menuButtonContainer : {
        flexDirection:'row',

    },
    buttonContainer:{
        flex:2,
        backgroundColor:'#F4F4F4', 
        margin: 5,
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        elevation: 2,

    },
    buttonTittle: {
        fontFamily:'IRANSans',
        color:'#999999',
        fontSize:normalize(10),
    },
    buttonTittleBold: {
        fontFamily:'IRANSans_Bold',
        color:'#444444',
        fontSize:normalize(12),
    }


  });
 
export default  TicketComponnet;