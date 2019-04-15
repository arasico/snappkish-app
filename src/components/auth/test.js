import React, { Component } from 'react';
import { View, Text, StyleSheet , Button} from 'react-native';
import colors from '../../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import normalize from '../../styles/normalizeText';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { secend:5 }
    }


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

    // componentDidMount(){
    //     this.timer.bind(this);
       
    // }


    render() { 



   


        return ( 

            <View style={styles.container}>
                
                <View >
                    <View style={styles.timerContainer}>
                        <Text style={styles.timerNumber}>ارسال مجدد</Text>
                        <Icon name="refresh" size={normalize(18)} color={colors.black} />
                    </View>
                    <View style={styles.timerClock}><Text >{this.state.secend}</Text></View>

                </View>
                <Button onPress={this.timer.bind(this)} title="CLick">
                    
                </Button>
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

    },
})

export default Test;