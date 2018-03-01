import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native'
import * as API from '../helpers/asyncStorageAPI'

class NewQuestionView extends Component {

    state = {
        error: null
    }

    handleAddNewCard = () => {
        const { deck, addNewCard } = this.props.navigation.state.params
        const { question, answer } = this.state
        if(question && question !== "" && answer && answer !== "") {
            API.addCardToDeck(deck.title, question, answer)
            addNewCard(deck.title, question, answer)
            this.setState({error: null})
            this.props.navigation.navigate('DeckSingleView', {deckTitle: deck.title})
        }
        else this.setState({error: "Please fill both question and answer fields"})
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={'height'}>
                {this.state.error &&
                <Text style={{marginBottom: 30, color: 'red'}}>{this.state.error}</Text>
                }
                <Text style={styles.prompt}>Enter your question</Text>
                <TextInput style={styles.textInput} onChangeText={(text)=>(this.setState({question: text}))}/>
                <Text style={[styles.prompt,{marginTop: 40}]}>Enter the answer</Text>
                <TextInput style={styles.textInput} onChangeText={(text)=>(this.setState({answer: text}))}/>
                <TouchableOpacity style={styles.submitBtn} onPress={this.handleAddNewCard}>
                    <Text style={{color: 'white'}}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    prompt: {
        fontSize: 20,
        textAlign: 'center'
    },
    textInput: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 20,
        fontSize: 20,
    },
    submitBtn: {
        backgroundColor: 'black',
        marginTop: 50,
        borderColor: 'black',
        borderWidth: 1,
        width: 200,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default NewQuestionView