import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native'

const styles = StyleSheet.create({
    viewStyle:{
        flex: 1,
        backgroundColor:"#0E0E0E"
    },

    animationViewStyle:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonsViewStyle:{
        justifyContent:"flex-start",
        flex:1
    },
    buttonStyle:{
        justifyContent:"center",
        margin:30,
        marginHorizontal:60,
        marginBottom:0,
        borderWidth:1,
        borderColor:"white",
        height:60
    },
    buttonTextStyle:{
        fontFamily: "cagliostro",
        color:"white",
        fontSize:20,
        textAlign:"center"
    }
})

const HomeView = () => {


      const MainView =  <View style={styles.viewStyle}>
                            <View style={styles.animationViewStyle}>
                                <LottieView style={{height:200, width:200}} source={require("../assets/animation/title2.json")} loop autoPlay/>
                            </View> 

                            <View style={styles.buttonsViewStyle}>
                                <TouchableOpacity style={styles.buttonStyle}>
                                    <Text style={styles.buttonTextStyle}>Start</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonStyle}>
                                    <Text style={styles.buttonTextStyle}>Results</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
    return  MainView

}

export default HomeView