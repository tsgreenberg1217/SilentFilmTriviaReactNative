import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import AnswerView from "./AnswerView"
import QuestionView from "./QuestionView"
import {GameStyle} from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
import { StackActions, NavigationActions } from 'react-navigation';


const GameView = props => {
    const ABC = ["a","b","c","d"]
    const styles = StyleSheet.create(GameStyle)
    const session = props.navigation.state.params.session
    const questions = session.questions
    const question = questions[0]
    const choices = question.choices
    const choicesArray = new Array()
    const answer = question.answer

    const isCorrect = (choice) => {
        const isCorrect = choice == answer
        const answerAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Answer',params: {isCorrect, question} })],
          })
          props.navigation.dispatch(answerAction)

    }


    Object.keys(choices).forEach(k =>{
        const c = choices[k]
        choicesArray.push(c)
    })
    

    return (
        <View style={styles.viewStyle}>

            <View style={styles.promptViewStyle}>
                <Text style={styles.promptTextStyle}>{question.prompt}</Text>
            </View>
            
            
            <View style = {styles.listStyle}>
                <FlatList
                    keyExtractor = {c => c}
                    data = {choicesArray}
                    renderItem = {
                        ({index, item}) => {                 
                            return (
                                <TouchableOpacity 
                                    onPress={() => {isCorrect(item)}}
                                    style={styles.buttonStyle}>
                                        <Text style={styles.buttonTextStyle}>{ABC[index]})</Text>
                                        <Text style={styles.buttonTextStyle}>{item}</Text>
                                        <View/>
                                </TouchableOpacity>
                        )
                            }
                    }
                    />
            </View>
        </View>
    )
}

export default GameView