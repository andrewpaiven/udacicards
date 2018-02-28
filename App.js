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
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class App extends Component {

  state = {
      decks: {
      }
  }

  componentDidMount() {
      API.initData()
      API.getDecks().then(decks=>this.setState({decks: decks}))
  }

  addNewDeck = (newDeck) => {
        let decks = this.state.decks
        if(!decks.hasOwnProperty(newDeck)) {
            decks[newDeck] = {
                  title: newDeck,
                  questions: []
              }
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
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: () => (<Ionicons name="ios-albums-outline" size={20} color="white" />)
        }
    },
    NewDeckView: {
        screen: NewDeckView,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: () => (<Ionicons name="ios-add-circle-outline" size={20} color="white"/>)
        }
    },
},{
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: 'white',
        labelStyle: {
            fontSize: 10,
        },
        style: {
            backgroundColor: 'black',
        },
    }
})

const MainNavigator = StackNavigator(
    {
        Home: {
            screen: Tabs,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                title: 'Decks',
            },
        },
        DeckSingleView: {
            screen: DeckSingleView,
            navigationOptions: {
                title: 'Deck'
            }
        },
        QuizView: {
            screen: QuizView,
            navigationOptions: {
                title: 'Quiz'
            }
        },
        NewQuestionView: {
            screen: NewQuestionView,
            navigationOptions: {
                title: 'Add Question'
            }
        }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'black',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    })

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
})

