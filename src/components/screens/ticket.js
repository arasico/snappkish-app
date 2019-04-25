import React , { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, 
    KeyboardAvoidingView, Platform , 
    ImageBackground , ScrollView, Image} from 'react-native';
import {H1, H2, HR} from '../../typography'
import SearchInput from '../../components/textgroup/search-input'; 
import normalize from '../../styles/normalizeText';
import {AsyncStorage} from 'react-native'; 
import Sound  from 'react-native-sound';


//
// Apit Controler
//

import PostAPI from '../../contoroler/postToApi';
import TimeToDate from '../common/times/timespanToDate'; 




 


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
        this.state = {
            name:''
        }
         
        this.playSound= this.playSound.bind(this)
    }


    static navigationOptions = {
        header: null, 
        TokenState: '' 
        
      }
 
      

      componentWillMount = async()  => {
        const Token = await AsyncStorage.getItem('AUTHORIZATION');
        const ticketn = this.props.navigation.getParam('ticketNumber', 'NO-ID');
         this.setState({TokenState: Token})

          const data = {
              'ticketNumber' : ticketn
          }
        const res = await PostAPI(data, 'supplier/ticket', Token)

        console.log(res.data)
        await this.setState({
            name: res.data.customer.name, 
            phone: res.data.customer.phone, 
            product: res.data.products.title, 
            startDate: res.data.products_episode.start_date, 
            price: res.data.price_all, 
            startTime: res.data.products_episode.start_hours, 
            endTime: res.data.products_episode.end_hours, 
            agancyName: res.data.customer.name, 
            capicatiy: res.data.count, 
        })
        console.log(this.state.data.customer)
      }

      _callBack() { 
        this.props.navigation.goBack();
    }

    onPressDashboard  (val) {
        this.props.navigation.navigate(val);
      }   
      
      _cancelTicket  (key) {
         console.log(key)
         const data = {
             'ticket_id':key
         }

        const res =  PostAPI(data,'supplier/ticket/repeal',this.state.TokenState );
        console.log(res);
        this.playSound()
        this._callBack();
        


      }

      playSound()  {
        const SuccessSound = new Sound('a_success.mp3', Sound.MAIN_BUNDLE, (error) => {
           
            if (error) {
              console.log(error)
            }
            SuccessSound.play((success) => {
                if (!success) {
                  console.log('Sound did not play')
                }
              })

          })

      
      }


   

    render() { 
 

   


        return ( 
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerClose}>
                        <TouchableOpacity style={styles.btnClose} onPress={this._callBack.bind(this)}>
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
                                    <IocnsEntypo style={{color: '#46ADD8'}}  size={normalize(15)} name='old-phone' />
                                    <Text style={styles.buttonTittle}>تلفن تماس</Text>
                                    <Text style={styles.buttonTittleBold}>{this.state.phone}</Text>
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(15)} name='user-alt' />
                                    <Text style={styles.buttonTittle}>نام و نام خانوادگی</Text>
                                    <Text style={styles.buttonTittleBold}> {this.state.name} </Text>
                                </TouchableOpacity>  
                            </View>

                            <View style={styles.menuButtonContainer}>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(15)} name='calendar-alt' />
                                    <Text style={styles.buttonTittle}> تاریخ</Text>
                                    <Text style={styles.buttonTittleBold}>{TimeToDate(this.state.startDate)}</Text>
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(15)} name='ticket-alt' />
                                    <Text style={styles.buttonTittle}> نام محصول </Text>
                                    <Text style={styles.buttonTittleBold}>{this.state.product}</Text>
                                </TouchableOpacity>  
                            </View>

                            <View style={styles.menuButtonContainer}>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(15)} name='clock' />
                                    <Text style={styles.buttonTittle}> سانس</Text>
                                    <Text style={styles.buttonTittleBold}>{this.state.startTime} - {this.state.endTime}</Text>
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(15)} name='coins' />
                                    <Text style={styles.buttonTittle}>مبلغ</Text>
                                    <Text style={styles.buttonTittleBold}>{this.state.price} تومان</Text>
                                </TouchableOpacity>  
                            </View>

                            <View style={styles.menuButtonContainer}>
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(15)} name='users' />
                                    <Text style={styles.buttonTittle}> تعداد</Text>
                                    <Text style={styles.buttonTittleBold}>{this.state.capicatiy} نفر</Text>
                                </TouchableOpacity>  
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <IocnFontAwesome5 style={{color: '#46ADD8'}}  size={normalize(15)} name='user-secret' />
                                    <Text style={styles.buttonTittle}>نام آژانس</Text>
                                    <Text style={styles.buttonTittleBold}>آژانس وحدت</Text>
                                </TouchableOpacity>  
                            </View>

                        </View>
                        <View style={styles.contentContainer}>
                            <TouchableOpacity style={styles.btnSubmit} onPress={() => this._cancelTicket(this.props.navigation.getParam('ticketNumber', 'NO-ID')) } >
                                <Text style={styles.btnSubmitText}> ثبت</Text>
                                <IconsIonic style={{color: '#ffffff', flex: 1, alignItems:'center', textAlign: 'center',}}  size={normalize(20)} name='ios-arrow-forward' />
                            </TouchableOpacity> 
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
        marginBottom: 20
    
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
    },
    btnSubmit : { 
        backgroundColor:'#6FCF97', 
        margin: 5,
        borderRadius:3,
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        elevation: 2,
        flexDirection:'row',
      
    },
    btnSubmitText : {
        color:'#fff',
        fontFamily:'IRANSans_Bold', 
        fontSize:normalize(16),
        flex:9,
        alignItems:'center',
        justifyContent:'center',
        textAlign: 'center', 

    }


  });
 
export default  TicketComponnet;