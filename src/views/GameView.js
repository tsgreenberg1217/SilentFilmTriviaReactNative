import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {GameStyle} from '../styles'
import { FlatList } from 'react-native-gesture-handler'
import { StackActions, NavigationActions } from 'react-navigation';
import { getQuestion } from '../TriviaDatabase'


const GameView = props => {
    console.log('in game view')
    const [question, setQuestion] = useState({})
    console.log('past state')
    const ABC = ["a","b","c","d"]
    const styles = StyleSheet.create(GameStyle)
    const stubs = props.navigation.state.params.stubs
    const stub = stubs.find(sb => !sb.isAnswered)

    // console.log('found stub is', stub)
    console.log('state is', question)
    const noQuestions = Object.keys(question).length == 0
    console.log('no questions ',noQuestions)

    if(noQuestions){
        console.log("no question")
        getQuestion(stub.id).then(json => {
            console.log("json ", json)
            const q = JSON.parse(json) 
            console.log("fetched is ", q)
            setQuestion(q)
        })
    }


    const isCorrect = choice => {
        const isCorrect = choice == question.answer
        const answerAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Answer',params: {isCorrect, question} })],
          })
          props.navigation.dispatch(answerAction)

    }

    const getView = question => {
        if(!question) return <Text>Getting question...</Text>

        const choices = question.choices
        console.log('choices are', choices)
        const choicesArray = []
    
        Object.keys(choices).forEach(k =>{
            const c = choices[k]
            choicesArray.push(c)
        })

        return(
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

    const QuestionView = getView(question)

        
    return QuestionView


}

export default GameView