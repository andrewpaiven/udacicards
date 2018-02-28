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

export const initData = () => {
    return AsyncStorage.setItem(KEY,JSON.stringify(fakeData))
}

export const getDecks = () => {
    return AsyncStorage.getItem(KEY)
        .then(items =>JSON.parse(items))
}

export const saveDeckTitle = (title) => {
    getDecks().then(decks=>{
        if(!decks.hasOwnProperty(title)) {
            decks[title] = {
                title: title,
                questions: []
            }
        }
        return AsyncStorage.setItem(KEY,JSON.stringify(decks))
    })
}

export const addCardToDeck = (title,question,answer) => {
    getDecks().then(decks=>{
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
        return AsyncStorage.setItem(KEY,JSON.stringify(decks))
    })
}