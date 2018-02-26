import { AsyncStorage } from 'react-native'


const KEY = "UDACICARDS"

const fakeData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    },
}

export const setFakeData = () => {
    return AsyncStorage.setItem(KEY,JSON.stringify(fakeData))
}

export const getDecks = () => {
    return AsyncStorage.getItem(KEY)
        .then(items =>JSON.parse(items))
}

export const getDeck = (id) => {
    return AsyncStorage.getItem(KEY)
        .then(items => (JSON.parse(items)))
        .then((itemsJSON) => itemsJSON[id])
}

export const saveDeckTitle = (title) => {
    getDecks().then(decks=>{
        decks[title] = {
            title: title,
            questions: []
        }
        return AsyncStorage.setItem(KEY,JSON.stringify(decks))
    })
}

export const addCardToDeck = () => {

}