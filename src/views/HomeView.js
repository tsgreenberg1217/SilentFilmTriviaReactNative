import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native'
import {HomeStyle} from '../styles'
import UserSchema from '../models/User'
import Realm from 'realm'
import {createUser, deleteAllUsers, queryAllUsers} from '../TriviaDatabase.js'



const HomeView = () => {
    const styles = StyleSheet.create(HomeStyle)

    

    const makeQuestions = () =>{
      user = {name:"Todd", inProgress:false}
      createUser(user).then(user =>{
        console.log('it worked!')
      }).catch(e => {
        console.log('welp, fuck me then', e)
      })
    }

    const deleteUsers = () =>{
      createUser(user).then(user =>{
        console.log('it worked!')
      }).catch(e => {
        console.log('welp, fuck me then', e)
      })
    }

    const getUsers = () =>{
      queryAllUsers().then(user=>{
        console.log("user is :", user.name)
      }).catch(e =>{
        console.log('didnt query', e)
      })
    }

    const MainView =  <View style={styles.viewStyle}>
                        <View style={styles.animationViewStyle}>
                            <LottieView style={{height:200, width:200}} source={require("../../assets/animation/title2.json")} loop autoPlay/>
                        </View> 

                        <View style={styles.buttonsViewStyle}>
                            <TouchableOpacity
                                onPress = {getUsers}
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