import React , {Component} from 'react';
import { 
    View , 
    Text , 
    StyleSheet , 
    TouchableOpacity, 
    ImageBackground , 
    Image,
            } from 'react-native';
import Header from '../headers/headersWordBox';
import colors from '../../styles/colors';
import { H1, H2 } from "../../typography/index";
import Icon from 'react-native-vector-icons/FontAwesome';
import normalize from '../../styles/normalizeText';

class PaymentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    _callPayment(){
        alert("Payment")
    }

    render() { 
        return ( 

            <View style={styles.container }>

                <Header  title="خرید بسته خودآموز"/>
        
                <ImageBackground source={require('../../assets/img/victory.png')}
                    resizeMode="cover"  
                    style={styles.backgroundImage}>
                        <View style={styles.iconBox}>
                            <Icon name="money" size={normalize(35)} color={colors.black} />
                        </View>
                        <Text style={styles.txtTitle}>9.000 Toman</Text>
                        <Text>For a month</Text>
                </ImageBackground>
              
                <View style={styles.card}>
                    <View style={styles.box}>
                        <View style={styles.imgLogo}>
                            <Image source={require('../../assets/img/irancell.png')} borderRadius={5}   resizeMode="contain" style={{  height:80, width:80, }} />
                        </View>

                        <H1>پرداخت</H1>
                        <H2 style={{color: colors.silver}}>ارسال عدد 1 به شماره 30095 روزانه 300 تومان</H2>

                        <TouchableOpacity style={[styles.btn, {backgroundColor:colors.blue}]} onPress={this._callPayment}>
                            <H1>پرداخت</H1>
                        </TouchableOpacity>

                    </View>
                </View>
        
            </View>
         );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        backgroundColor:colors.white,

    },
    backgroundImage:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center'
  
    },
    card:{
        flex:1,
        justifyContent:'space-around',

    },
    box:{
        backgroundColor:colors.silver,
        height:250,
        margin:10,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'space-around',
        
    },
    imgLogo:{ 
        borderRadius:10,  
        borderWidth:5,
        borderColor:'#ccc',
        marginTop:5,

    },
    btn:{
        height:50,
        marginHorizontal:30,
        marginVertical:10,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center', 
        width:'80%',

    },
    iconBox:{
        height:90,
        width:90,
        borderRadius:150,
        backgroundColor:colors.white,
        elevation:4,
        alignItems:'center',
        justifyContent:'center', 

    },
    txtTitle:{
        color:colors.red,
        fontSize:normalize(20),
        justifyContent:'center',
        fontFamily:'IRANSans_Bold'
    }
})
 
export default PaymentComponent;
