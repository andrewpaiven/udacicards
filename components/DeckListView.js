import React, { Component } from 'react'
import { TouchableOpacity, ScrollView , StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Deck from './Deck'

import * as API from '../helpers/asyncStorageAPI'

class DeckListView extends Component {

    state = {
        decks: {}
    }

    componentDidMount() {
        API.getDecks().then(decks=>this.setState({decks: decks}))
    }

    render() {
        const decks = this.state.decks
        const keys = Object.keys(decks)
        return(
                <ScrollView style={styles.container}>
                    {keys.map((key)=>(
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckSingleView')}>
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