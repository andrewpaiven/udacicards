import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

class NewDeckView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.question}>What is the title of your new deck ?</Text>
                <TextInput style={styles.textInput}/>
                <TouchableOpacity style={styles.submitBtn}>
                    <Text style={{color: 'white'}}>Submit</Text>
                </TouchableOpacity>
            </View>
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
