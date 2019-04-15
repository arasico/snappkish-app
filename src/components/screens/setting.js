import React, {Component} from 'react';
import {View, Text, StyleSheet,CheckBox, TouchableOpacity } from 'react-native';


//
//
import colors from '../../styles/colors';



class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = { checked:true }
    }


    _callChechbox(){
        this.setState({ checked: !this.state.checked });

    }
    render() { 
        return ( 
            <View style={styles.Container}>
            <View style={styles.card}>
                <View style={styles.toggleContainer}>
                    <TouchableOpacity style={styles.checkboxContainer} onPress={() => this._callChechbox()}>
                        <CheckBox 
                        containerStyle={{backgroundColor: 'red'}}
                        value={this.state.checked}
                        onValueChange={() => this.setState({ checked: !this.state.checked })}
                        />
                    
                        {this.state.checked ? (<Text style={styles.iransans}>فعال</Text>) : (<Text style={styles.iransans}>غیر فعال</Text>)}
                    
                    </TouchableOpacity>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.H1}> نوتیفیکیشن</Text>
                    <Text style={styles.H3}> شما باید در مورد موارد احساسی مانند خاطرات کودکی، آرزوها اهداف و مواردی که او را احساساتی می نماید صحبت نمایید.</Text>
                </View>
            </View>


            <View style={styles.card}>
                <View style={styles.toggleContainer}>
                    <TouchableOpacity style={styles.checkboxContainer} onPress={() => this._callChechbox()}>
                        <CheckBox 
                        containerStyle={{backgroundColor: 'red'}}
                        value={this.state.checked}
                        onValueChange={() => this.setState({ checked: !this.state.checked })}
                        />
                    
                        {this.state.checked ? (<Text>Active</Text>) : (<Text>Deactive</Text>)}
                    
                    </TouchableOpacity>
                </View>
                <View style={styles.txtContainer}>
                    <Text style={styles.H1}> تنظیمات نوتیفیکیشن</Text>
                    <Text style={styles.H3}>برای بدست آوردن شهروندی یا تابعیت آلمان شرایط قانونی خاصی وجود دارند که شخص متقاضی فقط با برآورده کردن آنها می تواند تابعیت آلمانی را دریافت کند.</Text>
                </View>
            </View>
           
         

               


            </View>
         );
    }
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
      
    },
    card:{
        flexDirection:'row', 
        alignItems: 'flex-start', 
        elevation:2,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical: 20,

    },
    toggleContainer:{
       
        flex:2,
        justifyContent:'center',
        alignItems:'center'

    },
    txtContainer:{ 
        flex:3, 
        paddingVertical:10,
        paddingRight:10,
         

    },
    H1:{
        fontSize:20,
        textAlign:'right',
        fontFamily:'IRANSans'

    },
    H3:{
        fontSize:12,
        textAlign:'right',
        fontFamily:'IRANSans'
    },




    checkboxContainer:{
        flexDirection:'row', 
        backgroundColor:colors.white,
        width:100,
        paddingVertical:5,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        elevation:1
    },
    iransans:{
        fontFamily:'IRANSans'
    }



})
 
export default Setting;