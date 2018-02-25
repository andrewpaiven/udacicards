import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import DeckListView from './components/DeckListView'
import DeckSingleView from './components/DeckSingleView'
import QuizView from './components/QuizView'
import NewDeckView from './components/NewDeckView'
import NewQuestionView from './components/NewQuestionView'
import { TabNavigator, StackNavigator } from 'react-navigation'
import * as API from './helpers/asyncStorageAPI'

export default class App extends React.Component {

  componentDidMount() {
      API.setFakeData()
  }

  render() {
    return (
      <View style={styles.container}>
        <Stack/>
      </View>
    )
  }
}

const Tabs = TabNavigator({
    AllDecks: {
        screen: DeckListView,
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
    },
})

const Stack = StackNavigator(
    {
        Home: {
            screen: DeckListView,
            navigationOptions: {
                title: 'Home',
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }
        },
        DeckSingleView: {
            screen: DeckSingleView
        }
    },
    {
        initialRouteName: 'Home',
    })

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
})

