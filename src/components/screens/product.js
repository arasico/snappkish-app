import React , { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform , ImageBackground , ScrollView} from 'react-native';
import {H1, H2, HR} from '../../typography'
import SearchInput from '../../components/textgroup/search-input'; 
import normalize from '../../styles/normalizeText';





//
//
import colors from '../../styles/colors'
import Icon from '../../styles/icons'




class  ProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    onpress = () => {
        console.log("Press is worked!")
    }

    render() { 

        const renderProduct = (
            <TouchableOpacity style={styles.cards}>
            <View style={styles.productContainer}>
              
                <View style={styles.StatusContainer}>
                    <View style={styles.stateBox}>
                        <Text style={{fontSize:normalize(10), color:'#555555',fontFamily:'IRANSans'}}>فعال</Text>
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    <View style={{flexDirection:'row', justifyContent:'flex-end'}}>
                        <Text style={{fontSize:normalize(12), color:'#555555', paddingTop:7, fontFamily:'IRANSans' }}>@گردشگری</Text>
                        <Text style={styles.titleProdcut}>کشتی اوستا</Text>
                    </View>
                    <H2>تاریخ: 10/12/1398</H2>
                    <H2>محدودیت زمانی دارد</H2>
                </View>
                <View style={styles.imageContainer}>

                </View>
                
            </View>

       </TouchableOpacity>
        )
        return ( 
            <View style={styles.container}>
               <View style={styles.cards}>
                    <SearchInput  
                        placeholder="جستجو . . ."
                        style={styles.txtInput}
                        maxLength={30}
                        keyboardType={'numeric'}
                        onpress={this.onpress}
                    />
               </View>
                <ScrollView>
                {renderProduct}
                {renderProduct}
                {renderProduct}
                {renderProduct}
                {renderProduct}
                {renderProduct}
                {renderProduct}
                {renderProduct}
                {renderProduct}
                {renderProduct}
                </ScrollView>
              

               

            </View>
         );
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
        backgroundColor: '#F6F6F6',


    },
    cards: {
        backgroundColor: '#ffffff',
        width: '100%',
        borderRadius: 7,
        elevation:3,
        padding: 5,
        marginBottom: 7

    },
    productContainer:{ 
        width:'100%',
        padding:5,
        height: 100,
        flexDirection: 'row',

    },
    imageContainer:{
        flex:2,
        backgroundColor:'#dddddd',
        padding:10,
        borderRadius:5

    },
    contentContainer: {
        flex:4, 
        padding:10, 
    },
    StatusContainer: {
        flex:1, 
        padding:5, 
    },
    titleProdcut : {
        fontFamily:'IRANSans_Bold',
        fontSize: normalize(20),  
        color:'#333333',
        textAlign: 'right',
        paddingHorizontal: 10
        
    },
    stateBox:{
        backgroundColor:'#6FCF97',
        borderRadius:50,
        justifyContent:'center',
        alignItems: 'center',
        width:'100%',




    }
,

})
 
export default  ProductComponent;