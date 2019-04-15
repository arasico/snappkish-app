import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import normalize from '../../styles/normalizeText';

class TimerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { secend:120, error:'کد وارد شده نا معتبر می باشد' }
    }

    // timer for count down in text start in 120  sec
    timer(){
        var timerClock =  setInterval( () =>{ 
                  if(this.state.secend > 0)
                          this.setState({secend: this.state.secend - 1 })
                  else{
                          console.log("timer is finish & Token expire"); // TODO later
                          clearTimeout(timerClock);
                      }
           }, 1000);
      }

      componentWillMount(){
          this.timer();
      }


    render() { 
        return ( 

            <View style={styles.container}>
                
                <View >
                    <View style={styles.timerContainer}>
                        <Text style={styles.timerText}>ارسال مجدد</Text>
                        <Icon name="refresh" size={normalize(18)} color={colors.black} />
                    </View>
                    <View style={styles.timerClock}><Text style={styles.timerNumber} >{this.state.secend} ثانیه </Text></View>
                </View>
                {/* validation error text box */}
                <View style={styles.containerValidation}>
                    <Text style={styles.textValidation}>{this.state.error}</Text>
                </View>

            </View>
         );
    }
}
 


const styles = StyleSheet.create({

    container:{
            paddingHorizontal: 30,
            backgroundColor: 'transparent',

    },
    timerContainer:{
        backgroundColor: colors.white,
        borderRadius: 30,
        height: 50,
        justifyContent: 'flex-end',
        alignItems: 'center', 
        width: '80%',
        marginLeft: '20%',
        flexDirection:'row',
        paddingRight: 10,

    },
    timerClock:{
        position: 'absolute',
        backgroundColor: colors.red,
        width: '50%',
        borderRadius: 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerNumber:{
        paddingRight:20,
        fontFamily: 'IRANSans',
        color:colors.white,


    },
    timerText:{
        paddingRight:20,
        fontFamily: 'IRANSans',
        color:colors.black,
        

    },
    containerValidation:{
        backgroundColor: colors.themeBackgroundOpacity,
        padding: 12,
        borderRadius:30,
        marginTop: 20,


    },
    textValidation:{
        fontFamily: 'IRANSans',
        color:colors.white,
        fontSize: Platform.OS === 'ios' ? normalize(8) : normalize(10),
    },
})

export default TimerComponent;