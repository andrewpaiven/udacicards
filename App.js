import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import DeckListView from './components/DeckListView'
import DeckSingleView from './components/DeckSingleView'
import QuizView from './components/QuizView'
import NewDeckView from './components/NewDeckView'
import NewQuestionView from './components/NewQuestionView'
import { TabNavigator } from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs/>
      </View>
    )
  }
}

const Tabs = TabNavigator({
    AllDecks: {
        screen: DeckListView
    },
    DeckSingleView: {
        screen: DeckSingleView
    },
    QuizView: {
        screen: QuizView
    },
    NewDeckView: {
        screen: NewDeckView
    },
    NewQuestionView: {
        screen: NewQuestionView
    }
})

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
})

