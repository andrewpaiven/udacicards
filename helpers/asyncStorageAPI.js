import { AsyncStorage } from 'react-native'
const KEY = "andracicards"

const fakeData = {
    Geography: {
        title: 'Geography',
        questions: [
            {
                question: 'How many Oceans are there in the world ?',
                answer: 'There are a total 5 oceans in the world: atlantic, pacific, indian, artic and southern'
            },
            {
                question: 'How many continents are there in the world ?',
                answer: 'Thera are 7 continents in the world: Europe, Asia, Africa, Antartica, North America, South America and Australia '
            },
            {
                question: 'How many countries are there in the world ?',
                answer: 'According to the UN, there are 195 sovereign states in the world'
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
    return AsyncStorage.mergeItem(KEY,JSON.stringify(fakeData))
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