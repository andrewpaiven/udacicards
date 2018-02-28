import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native'
import DeckListView from './components/DeckListView'
import DeckSingleView from './components/DeckSingleView'
import QuizView from './components/QuizView'
import NewDeckView from './components/NewDeckView'
import NewQuestionView from './components/NewQuestionView'
import { TabNavigator, StackNavigator } from 'react-navigation'
import * as API from './helpers/asyncStorageAPI'
import { Constants } from 'expo'

export default class App extends Component {

  state = {
      decks: {
      }
  }

  componentDidMount() {
      API.getDecks().then(decks=>this.setState({decks: decks}))
  }

  addNewDeck = (newDeck) => {
        let decks = this.state.decks
        decks[newDeck]= {
            title: newDeck,
            questions: []
        }
        this.setState({decks: decks})
  }

  addNewCard = (title,question,answer) => {
      API.getDecks().then(decks=>{
          decks[title] = {
              ...decks[title],
              questions: [
                  ...decks[title].questions,
                  {
                      question: question,
                      answer: answer
                  }
              ]
          }
          this.setState({decks: decks})
      })
  }

  render() {
      const screenProps = {
          decks: this.state.decks,
          addNewDeck: this.addNewDeck,
          addNewCard: this.addNewCard
      }
    return (
      <View style={styles.container}>
        <MainNavigator screenProps={screenProps}/>
      </View>
    )
  }

}

const Tabs = TabNavigator({
    AllDecks: {
        screen: DeckListView,
    },
    NewDeckView: {
        screen: NewDeckView,
    },
})

const MainNavigator = StackNavigator(
    {
        Home: {
            screen: Tabs,
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
        },
        QuizView: {
            screen: QuizView
        },
        NewQuestionView: {
            screen: NewQuestionView
        }
    },
    {
        initialRouteName: 'Home',
    })

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
})

