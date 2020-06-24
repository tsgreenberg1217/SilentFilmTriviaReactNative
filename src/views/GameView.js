import React, {useState} from 'react'
import { Text } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation';
import { getQuestion, getSessionData, updateSession, deleteSession } from '../TriviaDatabase'
import QuestionView from './QuestionView.js'


const GameView = props => {
    const [question, setQuestion] = useState({})
    
    // checks if state is {}
    const noQuestions = Object.keys(question).length == 0

    if(noQuestions){
        getSessionData().then(json => {
            const session = JSON.parse(json)
            const stub = session.questions.find(stub => !stub.isAnswered)

            if(stub){
                getQuestion(stub.id).then(q => {
                    setQuestion(JSON.parse(q))
                })
            } else{
                endGame()
            }

            
        })
    }

    const endGame = () => deleteSession().then(() => goToHome())
    

    const goToHome = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
          })
          props.navigation.dispatch(resetAction)
    }

    const isCorrect = choice => {
        const isCorrect = choice == question.answer
        const stubId = question._id
        const updateObj = {inProgress: true, stub:{id: stubId, isAnswered: true, isCorrect: isCorrect}}
        updateSession(updateObj).then(() =>  {
            goToAnswer(isCorrect)
        } )
        

    }

    const goToAnswer = isCorrect => {
        const answerAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Answer',params: {isCorrect, question} })],
          })
          props.navigation.dispatch(answerAction)
    }

    const getView = (noQuestions, question) => {
        if(noQuestions){
            return <Text>Getting question...</Text>
        }else{
            const {prompt, choices} = question
            const choicesArray = []
        
            Object.keys(choices).forEach(k =>{
                const c = choices[k]
                choicesArray.push(c)
            })
    
            return <QuestionView prompt = {prompt} choices = {choicesArray} isCorrectCallBack = {isCorrect} /> 
        }
    }

    return getView(noQuestions, question)


}

export default GameView