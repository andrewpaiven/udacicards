import React, { Component } from 'react'
import { TouchableOpacity, ScrollView , StyleSheet } from 'react-native'
import Deck from './Deck'

class DeckListView extends Component {

    render() {
        const { decks } = this.props.screenProps
        const keys = Object.keys(decks)
        return(
                <ScrollView style={styles.container}>
                    {keys.map((key)=>(
                        <TouchableOpacity key={key} onPress={() => this.props.navigation.navigate('DeckSingleView',{deckTitle: key})}>
                            <Deck key={key} name={decks[key].title} numberOfCards={decks[key].questions.length}/>
                        </TouchableOpacity>
                    ))}
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