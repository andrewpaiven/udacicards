import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

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

    restartQuiz = () => {
        this.setState({
            currentQuestion: 0,
            correctAnswers: 0,
            quizCompleted: false,
            showAnswer: false
        })
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
        if(deck.questions.length === 0) return (
            <View style={[styles.container,{alignItems: 'center'}]}>
                <Image
                    style={{width: 200, height: 200}}
                    source={{uri: 'http://images6.fanpop.com/image/photos/36800000/Mr-T-mrt-36834265-320-254.png'}}
                />
                <Text style={{marginTop: 20, fontSize: 15, textAlign: 'center'}}>You fool, you ain't got no cards to play !</Text>
            </View>
        )
        if(!quizCompleted && deck.questions[currentQuestion]) return (
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
            <View style={[styles.container,{alignItems:'center'}]}>
                <Text style={styles.result}>You finished the test with a {this.resultCongrats()} score of {correctAnswers} out of {deck.questions.length}</Text>
                <TouchableOpacity style={[styles.button,styles.buttonStartQuiz]} onPress={() => this.restartQuiz()}>
                    <Text style={{color: 'white'}}>Restart Quiz</Text>
                </TouchableOpacity>
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
    result: {
        fontSize: 15,
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
    },
    buttonStartQuiz: {
        backgroundColor: 'black',
        marginTop: 50,
    }
})

export default QuizView


