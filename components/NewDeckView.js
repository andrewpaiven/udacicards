import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import * as API from '../helpers/asyncStorageAPI'

class NewDeckView extends Component {

    state = {
        textInput: ''
    }

    addNewDeckTitle = () => {
        if(this.state.textInput !== ""){
            API.saveDeckTitle(this.state.textInput)
            this.props.screenProps.addNewDeck(this.state.textInput)
            this.props.navigation.navigate('Home')
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
                <Text style={styles.question}>What is the title of the new deck ?</Text>
                <TextInput style={styles.textInput} onChangeText={(text)=>(this.setState({textInput: text}))}/>
                <TouchableOpacity onPress={this.addNewDeckTitle} style={styles.submitBtn}>
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
    question: {
      fontSize: 30,
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

export default NewDeckView
