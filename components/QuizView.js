import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class QuizView extends Component {

    state = {
        deck: {
            questions: [{
                question: '',
                answer: ''
            }]
        },
        currentQuestion: 0,
        correctAnswers: 0,
        quizCompleted: false,
        showAnswer: false
    }

    componentDidMount() {
        const { deck } = this.props.navigation.state.params
        this.setState({
            deck: deck,
            currentQuestion: 0,
            correctAnswers: 0
        })
    }

    submitAnswer = (correct) => {
        const {currentQuestion,correctAnswers} = this.state
        if (correct) this.setState({correctAnswers: correctAnswers + 1})
        if(currentQuestion+1 < this.state.deck.questions.length) {
            this.setState({
                currentQuestion: currentQuestion + 1,
                showAnswer: false,
            })
        }
        else {
            this.setState({
                quizCompleted: true
            })
        }
    }

    showAnswer = (show) => {
        show === true ? this.setState({showAnswer:true}) : this.setState({showAnswer:false})
    }

    resultCongrats = () => {
        const {deck,correctAnswers} = this.state
        const scorePercentage = correctAnswers/deck.questions.length*100
        if(scorePercentage <= 20) return 'Ridiculous'
        if(scorePercentage <= 50) return 'Miserable'
        if(scorePercentage <= 75) return 'Bleh'
        if(scorePercentage <= 90) return 'Fine'
        if(scorePercentage < 100) return 'Great'
        if(scorePercentage === 100) return 'Godlike'
    }

    render() {
        const {currentQuestion,deck,quizCompleted,correctAnswers} = this.state
        if(!quizCompleted) return (
                    <View style={styles.container}>
                        <Text style={styles.cardCounter}>{this.state.currentQuestion+1}/{this.state.deck.questions.length}</Text>
                        <View style={[styles.container,{alignItems: 'center'}]}>
                            <Text style={styles.question}>{deck.questions[currentQuestion].question}</Text>
                            {!this.state.showAnswer &&
                                <TouchableOpacity onPress={()=>this.showAnswer(true)}>
                                    <Text style={styles.answerBtn}>Answer</Text>
                                </TouchableOpacity>
                            }
                            {this.state.showAnswer &&
                                <Text>{deck.questions[currentQuestion].answer}</Text>
                            }
                            <TouchableOpacity style={[styles.button,styles.buttonCorrect,{marginTop: 50}]} onPress={()=>this.submitAnswer(true)}>
                                <Text style={{color: 'white'}}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.button,styles.buttonIncorrect]} onPress={()=>this.submitAnswer(false)}>
                                <Text style={{color: 'white'}}>Incorrect</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
        )
        else return (
            <View style={styles.container}>
                <Text style={styles.question}>You finished the test with a {this.resultCongrats()} score of {correctAnswers} out of {deck.questions.length}</Text>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    question: {
        fontSize: 30,
        textAlign: 'center'
    },
    answerBtn: {
        fontSize: 25,
        color: 'red',
        marginTop: 10
    },
    button: {
        marginTop: 10,
        width: 200,
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonCorrect: {
        backgroundColor: 'green',
    },
    buttonIncorrect: {
        backgroundColor: 'red',
    },
    cardCounter: {
        alignItems: 'flex-start',
        fontSize: 20,
    }

})

export default QuizView


