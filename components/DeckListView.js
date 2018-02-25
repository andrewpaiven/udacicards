import React, { Component } from 'react'
import { View, ScrollView , Text, StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Deck from './Deck'

class DeckListView extends Component {

    render(){
        return(
                <ScrollView style={styles.container}>
                    <Deck name="React things" numberOfCards="5"></Deck>
                    <Deck name="Life in General" numberOfCards="5"></Deck>
                    <Deck name="Sports" numberOfCards="5"></Deck>
                </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    }

})

export default DeckListView