import React , { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Header from '../headers/headersWordBox';
import colors from '../../styles/colors';


class ProIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    _callBack() { 
        this.props.navigation.goBack();
    }


    render() { 
        return ( 
            <View style={styles.container}>
                {/* <Header title="خود آموز فالنگ" onPress={this._callBack.bind(this)} />  */}

                <View style={styles.card}>
                    <Image source={require('../../assets/img/victory.png')} style={{flex:1}} resizeMode="cover" />
                </View>

                <View style={[styles.card, styles.p2]}>
                    <Text style={styles.H1}>خودآموز هوشمند!</Text>
                    <Text style={styles.H3}>با استفاده از این شما می توانید ان کنید</Text>
                    <Text style={styles.H3}>همه چی به همین سادگی</Text>
                </View>

                <View style={[styles.card, styles.p2]}>
                    <TouchableOpacity style={[styles.btn, {backgroundColor:colors.silver}]}>
                        <Text>The price is 2000 $</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.btn, {backgroundColor:colors.blue}]}>
                        <Text>Buy</Text>
                    </TouchableOpacity>
                </View>
            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',

        
    },
    card:{
        flex:1,
         backgroundColor: colors.white,
        // borderColor: '#333',
        // borderWidth:1,

    },
    p2:{
        padding:20,
    },
    btn:{
        height:50,
        marginHorizontal:30,
        marginVertical:10,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center'


    },
    H1:{
        fontFamily:'IRANSans',
        fontSize:16,
        color: colors.black,
        fontWeight:'bold',

    },
    H3:{
        fontFamily:'IRANSans',
        fontSize:14,
        color: colors.black,

    }
})
export default ProIndex;