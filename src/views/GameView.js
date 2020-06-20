import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import AnswerView from "./AnswerView"
import QuestionView from "./QuestionView"
import {GameStyle} from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'


const GameView = ({navigation}) => {
    const ABC = ["a","b","c","d"]
    const styles = StyleSheet.create(GameStyle)
    const session = navigation.state.params.session
    const questions = session.questions
    const question = questions[0]
    const choices = question.choices
    const choicesArray = new Array()


    Object.keys(choices).forEach(k =>{
        const c = choices[k]
        choicesArray.push(c)
    })
    

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.promptTextStyle}>{question.prompt}</Text>

            <FlatList
            keyExtractor = {c => c}
            data = {choicesArray}
            renderItem = {
                ({index, item}) => {                 
                    return (
                        <TouchableOpacity style={styles.buttonStyle}>
                                <Text style={styles.buttonTextStyle}>{ABC[index]})</Text>
                                <Text style={styles.buttonTextStyle}>{item}</Text>
                                <View/>
                        </TouchableOpacity>
                )
                    }
            }
            />

        </View>
    )
}

export default GameView