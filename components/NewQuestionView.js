import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native'

class NewQuestionView extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior={'padding'}>
                <Text style={styles.prompt}>Enter your question</Text>
                <TextInput style={styles.textInput}/>
                <Text style={[styles.prompt,{marginTop: 40}]}>Enter the answer</Text>
                <TextInput style={styles.textInput}/>
                <TouchableOpacity style={styles.submitBtn}>
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