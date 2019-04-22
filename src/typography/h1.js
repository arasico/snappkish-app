import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'
import colors from '../styles/colors'
import normalize from '../styles/normalizeText'

const styles = StyleSheet.create({
  title: {
    fontSize: Platform.OS === 'ios' ? normalize(26) : normalize(28), 
    color: colors.default,
    fontFamily: 'IRANSans_Bold', 
    fontWeight: '700',
    marginBottom: 5,  
  },
})

const H1 = ({ children }) => <Text style={styles.title}>{children}</Text>

export default H1
