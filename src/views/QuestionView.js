import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { GameStyle } from '../styles'


const QuestionView = ({prompt, choices, isCorrectCallBack}) => {
    const styles = StyleSheet.create(GameStyle)
    const ABC = ["a","b","c","d"]

    return(
        <View style={styles.viewStyle}>
            
            <View>
                <Text style={styles.promptTextStyle}>{prompt}</Text>
            </View>


            <View>
                <FlatList
                    keyExtractor = {c => c}
                    data = {choices}
                    renderItem = {
                        ({index, item}) =>
                                <TouchableOpacity 
                                    onPress={() => {isCorrectCallBack(item)}}
                                    style={styles.buttonStyle}>
                                        <Text style={styles.buttonTextStyle}>{ABC[index]})</Text>
                                        <Text style={styles.buttonTextStyle}>{item}</Text>
                                        <View/>
                                </TouchableOpacity>
                        
                    }
                    />
            </View>
        </View>
    )
}

export default QuestionView


