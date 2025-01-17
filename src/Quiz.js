import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')

class Quiz extends Component
{

    constructor(props)
    {
        super(props)
        this.state = { quiz_position: 1 }
    }

    showNextQuestion()
    {
        this.setState(state => ({
            quiz_position: state.quiz_position + 1
        }))
    }

    handleResetClick()
    {
        this.setState(state => ({
            quiz_position: 1
        }))
    }

    render()
    {
        const isQuizEnd = (this.state.quiz_position - 1) === quizData.quiz_questions.length
        let content;
        if (isQuizEnd) {
            content = <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
        } else {
            content = <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
                                    showNextQuestionHandler={this.showNextQuestion.bind(this)}
                      />
        }

        return <div>
                   {content}
               </div>
    }
}

export default Quiz
