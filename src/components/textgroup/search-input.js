import React from 'react'
import { View, Text, TextInput, StyleSheet , TouchableOpacity } from 'react-native'

import colors from '../../styles/colors'

const styles = StyleSheet.create({

container: { 
        flexDirection: 'row',
        backgroundColor:'red'
    },
searchContainer:{
        flex:1,
        backgroundColor:'yellow',
        padding:5,
    },
InputContainer:{
        flex:6,
        backgroundColor:'blue',
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
        width:30,
        height: 30,
        backgroundColor: 'red'
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
    ...props
  } = { labelStyle: null, fontSize: 14},
) => (
  <View {...props} style={styles.container}>
    <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.buttonSearchContainer}>

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
