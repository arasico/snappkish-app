//
// word boxser page is after pres start button 
//

import React, {Component} from 'react';
import { View , StyleSheet, ImageBackground, Animated  } from 'react-native';

import Header from '../headers/headersWordBox';
import WordBoxer from './wordBoxer';
import FooterWordBoxer from './footerWordBoxer';



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.execChildFunct=this.execChildFunct.bind(this);
        this.spinValue = new Animated.Value(0);
        this.child = React.createRef(); // call funcation in other component

    }
   
    componentDidMount(){
        this.spin();
    }

    spin = () => {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,   
            }
            ).start()     
            this.onClick();  

      }
      

      onClick = () => {
        this.child.current.closeWordBox();
      };


    execChildFunct() {
        this.spin();
        }

    
    render() { 

        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
          })


        return ( 

            <ImageBackground source={require('../../assets/img/silver-bg.png')} style={styles.container}>

                    {/* <Header /> */}

                    <Animated.View style={{
                    flex:5,
                    borderRadius: 10, 
                    transform: [{rotateY: spin }] 

                                        }}>

                            <View style={{     
                                            flex:1, 
                                            borderRadius: 10,  
                                            transform: [{rotateY: '180deg' }]  }}
                                        >

                                    <WordBoxer  ref={this.child} /> 
                            
                            </View>
                    </Animated.View>
                    
                    <FooterWordBoxer onPress = {this.execChildFunct.bind(this)} />

            </ImageBackground>
         );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,

    }
})
 
export default Index;