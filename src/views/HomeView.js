import React, {useEffect} from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native'
import {HomeStyle} from '../styles'
import UserSchema from '../models/User'
import Realm from 'realm'
import {initSessionData, toggleSession} from '../TriviaDatabase.js'
import { StackActions, NavigationActions } from 'react-navigation';



const HomeView = props => {
    const styles = StyleSheet.create(HomeStyle)
    useEffect(() => {
      initSessionData().then(sessionJson =>{
        const session = JSON.parse(sessionJson)
        if(session.inProgress) goToSession(session)
      }).catch(e =>{
        console.log("the error is", e)
      })      
    })


    const startSession = () => {
      toggleSession(true).then(session => {
        goToSession(session)
      }).catch(e => {

      })
    }


    const goToSession = (session) => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Game',params: {session} })],
      })
      props.navigation.dispatch(resetAction)

    }


    const MainView =  <View style={styles.viewStyle}>
                        <View style={styles.animationViewStyle}>
                            <LottieView style={{height:200, width:200}} source={require("../../assets/animation/title2.json")} loop autoPlay/>
                        </View> 

                        <View style={styles.buttonsViewStyle}>
                            <TouchableOpacity
                                onPress = {startSession}
                                style={styles.buttonStyle}>
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