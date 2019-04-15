import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image } from 'react-native';


//
//
import colors from '../../styles/colors';



class AboutFalang extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/img/english.jpg')} blurRadius={1}   resizeMode={'cover'} style={styles.img}  >

                </ImageBackground>
                <View style={styles.txtContainer}>
                    <Image source={require('../../assets/img/logo.png')} style={{width:200, height:80}} />
                    <Text style={styles.txt}>امروزه یادگیری زبان انگلیسی یکی از مهمترین کارها، در طی سالهای اخیر شده است. به دلیل وجود بازار کار فراوان و سطح زندگی بالا در کشور های اروپایی و آمریکایی، خیلی از افراد علاقمند به یادگیری سریع زبان انگلیسی برای تحقق بخشیدن به آرزوهای خود می باشند. از این رو با استفاده از جدید ترین و بهترین متد های روز جهان نرم افزاری را بنا نمودیم که به صورت منحصر به فرد و در سریع ترین زمان ممکن، شما را در آموزش زبان انگلیسی یاری نماید.</Text>
                    <Text style={styles.txt}>امروزه یادگیری زبان انگلیسی یکی از مهمترین کارها، در طی سالهای اخیر شده است. به دلیل وجود بازار کار فراوان و سطح زندگی بالا در کشور های اروپایی و آمریکایی، خیلی از افراد علاقمند به یادفزاریو در سریع اید.</Text>

                </View>
                
            </View>
         );
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,   
        justifyContent: 'flex-start'
    },
    img: {
        height: 200,
         
    },
    txtContainer:{
        position: 'absolute',
        backgroundColor: 'rgba(228,228,228,0.9)',
        width:300, 
        alignSelf:'center',
        marginTop:50,
        padding:20,
        textAlign:'center',
        alignItems:'center',
        borderRadius: 10

    },
    txt: {
        fontFamily:'IRANSans',
        paddingVertical:30

    }
})
 
export default AboutFalang;