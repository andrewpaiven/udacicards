import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Deck extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.name}</Text>
                <Text style={styles.numberOfCards}>{this.props.numberOfCards} cards</Text>
            </View>
        )
    }
}

export default Deck

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black'

    },
    title: {
        color: 'black',
        fontSize: 20
    },
    numberOfCards: {
        marginTop: 5,
        color: 'grey'
    }

})
