import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class DeckSingleView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>React Udacity</Text>
                <Text style={styles.numberOfCards}>5 cards</Text>
                <TouchableOpacity style={[styles.button,{marginTop: 50}]}>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.buttonStartQuiz]}>
                    <Text style={{color: 'white'}}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: 'black',
        marginTop: 100,
    },
    numberOfCards: {
        marginTop: 5,
        color: 'grey'
    },
    button: {
        marginTop: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: 200,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonStartQuiz: {
        backgroundColor: 'black',
    }
})

export default DeckSingleView
