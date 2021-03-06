import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Deck extends Component {
    render() {
        return (
            <View onPress={() => this.props.navigation.navigate('DeckSingleView')} style={styles.container}>
                <Text style={styles.title}>{this.props.name}</Text>
                <Text style={styles.numberOfCards}>{this.props.numberOfCards} cards</Text>
            </View>
        )
    }
}

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

export default Deck
