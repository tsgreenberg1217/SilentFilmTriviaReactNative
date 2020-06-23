import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated, Image } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';
import { getGiph } from '../services/GiphyService.js'
import { AnswerStyle } from '../styles.js'
import LottieView from 'lottie-react-native'
import GifContainerView from './GifContainerView.js'


const AnswerView = props => {
    const styles = StyleSheet.create(AnswerStyle)
    const {isCorrect, question} = props.navigation.state.params
    const imgFadeAnim = useRef(new Animated.Value(0)).current
    const FADE_DURATION = 1500

    useEffect(() => {
        const timerId = setTimeout(() => {
            Animated.timing( imgFadeAnim, { toValue: 1, duration: FADE_DURATION, useNativeDriver: true  } ).start()
        }, FADE_DURATION)

        return () => { 
            clearTimeout(timerId)         }
    })

    return(
        <View style={styles.viewStyle}>

            <View style={{flex: 1}}>
                <View style={{flex: 1.6}}>
                    <LottieView style={{alignItems:"stretch"}} 
                        source={require("../../assets/animation/movie_frame.json")} 
                        loop={false} autoPlay
                        /> 
                    <Animated.View style={{...styles.imgView, opacity: imgFadeAnim}}>
                        <GifContainerView giphyId = {question.giphy_id} style={{alignItems:"center"}} />   
                    </Animated.View>
                </View>

                <View style={{flex: 1}}>
                    <Text style={styles.buttonTextStyle}>{isCorrect ? "Correct" : "Incorrect"}</Text>
                    <Text style={styles.buttonTextStyle}>{question.info}</Text>    
                </View>       
            </View>
        </View>
    )
    

}

export default AnswerView