import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class DeckSingleView extends Component {

    render() {
        const {deckTitle} = this.props.navigation.state.params
        const {decks, addNewCard} = this.props.screenProps
        const deck = decks[deckTitle]
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{deck.title}</Text>
                <Text style={styles.numberOfCards}>{deck.questions.length} cards</Text>
                <TouchableOpacity style={[styles.button,{marginTop: 50}]} onPress={() => this.props.navigation.navigate('NewQuestionView',{deck: deck, addNewCard: addNewCard})}>
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button,styles.buttonStartQuiz]} onPress={() => this.props.navigation.navigate('QuizView',{deck: deck})}>
                    <Text style={{color: 'white'}}>Start Quiz</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backToDecks} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={{color: 'black'}}>back to decks</Text>
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
    },
    backToDecks: {
        marginTop: 200,
    }
})

export default DeckSingleView
