import PropTypes from 'prop-types';
import React, {Component} from 'react'; 
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet, ImageBackground } from 'react-native';

//
//
import Icon  from '../../styles/icons'; 
import colors from '../../styles/colors';


class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground source={require('../../assets/img/english.jpg')}  blurRadius={1} style={styles.headerContainer}>
              <View style={ styles.overImage}>
                <View  style={styles.imageAvator}>
                    <Icon.Ionicons name="md-person" size={50}  />
                </View>
              </View>
          </ImageBackground >

          <View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('MyProfile')}>
              پروفایل من
              </Text>
              <Icon.FontAwesome name="user-o" size={22} style={styles.iconNav} color={colors.red} />
            </View>

            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Index')}>
              مشاهده دروس
              </Text>
              <Icon.FontAwesome name="folder-o" size={22} style={styles.iconNav} color={colors.red} />
            </View>

            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('MyFavorit')}>
              کلمات مورد علاقه من
              </Text>
              <Icon.FontAwesome name="heart-o" size={22} style={styles.iconNav} color={colors.red} />
            </View>


            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Setting')}>
              تنظیمات برنامه
              </Text>
              <Icon.Ionicons name="ios-settings" size={22} style={styles.iconNav} color={colors.red} />
            </View>


            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('AboutFalang')}>
              درباره ما
              </Text>
              <Icon.Ionicons name="ios-information-circle-outline" size={22} style={styles.iconNav} color={colors.red} />
            </View>


          </View>
   
        </ScrollView>
      </View>
    );
  }
}

// SideMenu.propTypes = {
//   navigation: PropTypes.object
// };


const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      navItemStyle: {
        paddingRight: 15,
        fontFamily:'IRANSans',

      },
      navSectionStyle: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        borderBottomColor: '#F2F3F4',
        borderBottomWidth:1,
        paddingVertical:15,
      },
      sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
      },
      footerContainer: {
        padding: 20,
      },
      headerContainer:{
        height:200,
        backgroundColor: 'rgba(69,85,117,0.9)',
        alignItems:'center',
        justifyContent:'center',
         

      },
      iconNav:{
        paddingHorizontal:10,
        paddingRight:20,

      },
      imageAvator:{
        backgroundColor: colors.white,
        height:120,
        width:120,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:5,
        borderColor: 'rgba(241,241,241,0.8)'

      },
      overImage:{
        backgroundColor: 'rgba(181,49,69,0.9)', 
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0, 
        justifyContent:'center', 
        alignItems:'center'
      }
      
})

export default SideMenu;