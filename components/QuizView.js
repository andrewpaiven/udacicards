import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class QuizView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.cardCounter}>1/2</Text>
                <View style={[styles.container,{alignItems: 'center'}]}>
                    <Text style={styles.question}>Is André the king of the world and the universe ?</Text>
                    <TouchableOpacity>
                        <Text style={styles.answerBtn}>Answer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,styles.buttonCorrect,{marginTop: 50}]}>
                        <Text style={{color: 'white'}}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,styles.buttonIncorrect]}>
                        <Text style={{color: 'white'}}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    question: {
        fontSize: 30,
        textAlign: 'center'
    },
    answerBtn: {
        fontSize: 25,
        color: 'red',
        marginTop: 10
    },
    button: {
        marginTop: 10,
        width: 200,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonCorrect: {
        backgroundColor: 'green',
    },
    buttonIncorrect: {
        backgroundColor: 'red',
    },
    cardCounter: {
        alignItems: 'flex-start',
        fontSize: 20,
    }

})

export default QuizView


