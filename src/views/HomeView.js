import React, {useEffect} from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native'
import { HomeStyle } from '../styles'
import { initGameData,  createSession, getSessionData } from '../TriviaDatabase.js'
import { StackActions, NavigationActions } from 'react-navigation';



const HomeView = props => {
    const styles = StyleSheet.create(HomeStyle)
    useEffect(() => {

      initGameData().then(() => {
        console.log('game data inited')
        getSessionData().then(json =>{
          if(!json) return
          const session = JSON.parse(json)
          session['questions'] = session.questions.slice(0,9)
          if(session.inProgress) goToSession(session)
        })
      })
    })


    const startSession = () => {
      createSession().then(session => {
        goToSession(session)
      }).catch(e => {

      })
    }


    const goToSession = (session) => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Game',params: {stubs: session.questions} })],
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