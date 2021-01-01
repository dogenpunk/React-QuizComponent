import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component
{

    handleClick(buttonText)
    {
        if (buttonText === this.props.quiz_question.answer)
        {
            this.props.showNextQuestionHandler();
        }
    }

    render()
    {
        const question_buttons = this.props.quiz_question.answer_options.map((answer_option, index) =>
            <QuizQuestionButton key={index}
                                button_text={answer_option}
                                clickHandler={this.handleClick.bind(this)}
            />
        )

        return (
            <main>
                <section>
                    <p>
                        {this.props.quiz_question.instruction_text}
                    </p>
                    </section>
                <section className="buttons">
                    <ul>
                        {question_buttons}
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion
