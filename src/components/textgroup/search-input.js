import React from 'react'
import { View, Text, TextInput, StyleSheet , TouchableOpacity } from 'react-native'

import colors from '../../styles/colors'

//
// Icons ----------------------->
//

import IconSearch from 'react-native-vector-icons/Ionicons'


const styles = StyleSheet.create({

    container: { 
            flexDirection: 'row', 
        },
    searchContainer:{
            flex:1, 
            padding:5,
            alignItems: 'center',
            justifyContent: 'center',
        },
    InputContainer:{
            flex:6, 
            padding:5,

        },
    inputLabel: {
            fontSize: 14,
            color: colors.red,
            fontFamily: "IRANSans",
    },
    inputBox: { 
            color: colors.shadow,  
            textAlign: 'right',
            fontFamily:'IRANSans',
            padding: 5
    
    },
    empty: { 

    },
    error: {
            color: colors.google,
            fontSize: 16,
    },
    buttonSearchContainer:{
            width:40,
            height: 40, 
            alignItems: 'center',
            justifyContent: 'center',


    }
})

const SearchInput = (
  {
    label,
    value,
    placeholder,
    keyboard,
    onChangeText,
    onChange,
    error,
    secureTextEntry,
    multiline,
    maxLength,
    style,
    editable,
    labelStyle,
    fontSize,
    onpress,
    ...props
  } = { labelStyle: null, fontSize: 14},
) => (
  <View {...props} style={styles.container}>
    <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.buttonSearchContainer} onPress={onpress}>
            <IconSearch style={{color: '#555555'}}  size={25} name='ios-search' />
        </TouchableOpacity>
    </View>
    <View style={styles.InputContainer}>
        <TextInput
        style={[styles.inputBox, !value && styles.empty, style, { fontSize }]}
        value={value}
        placeholder={placeholder}
        keyboardType={keyboard}
        placeholderTextColor="rgba(35, 36, 42, 0.3)"
        onChangeText={onChangeText}
        onChange={onChange}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        maxLength={maxLength}
        editable={editable}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        />
    </View>
  </View>
)

export default SearchInput




/*  Example to use search input

    import SearchInput from '../../components/textgroup/search-input'; 


      onpress = () => {
        console.log("Press is worked!")
    }


    <SearchInput  
        placeholder="جستجو . . ."
        style={styles.txtInput}
        maxLength={30}
        keyboardType={'numeric'}
        onpress={this.onpress}
    />




*/