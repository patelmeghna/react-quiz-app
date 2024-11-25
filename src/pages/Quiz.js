import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import check from "../assets/img/check.svg";
import questionData from "../utils/questions.json";
import { useNavigate } from "react-router";

const Quiz = (props) => {
  const { userState, selectedCategory, scoreEarned = () => {} } = props;
  const navigate = useNavigate();

  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [counter, setCounter] = useState(10);
  const [selectedValue, setSelectedValue] = useState(null);
  const [progress, setProgress] = useState(1);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [skipped, setSkipped] = useState(0);

  const categoryQuestions = questionData.categories.find(
    (category) => category?.id === selectedCategory
  )?.questions;

  useEffect(() => {
    if (counter > 0 && !quizCompleted) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (!quizCompleted) {
      handleNext();
    }
  }, [
    counter,
    progress,
    categoryQuestions?.length,
    questionIndex,
    quizCompleted,
  ]);

  const currentQuestion = categoryQuestions[questionIndex];

  // next question
  const handleNext = () => {
    if (selectedValue) {
      const selectedOption = selectedValue.charAt(0);
      if (selectedOption === currentQuestion.correctAnswer) {
        setCorrectAnswer(correctAnswer + 1);
      } else {
        setWrongAnswer(wrongAnswer + 1);
      }
    } else {
      setSkipped(skipped + 1);
    }
    if (progress < categoryQuestions.length) {
      setSelectedValue(null);
      setCounter(10);
      setAnswerChecked(false);
      setProgress(progress + 1);
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuizCompleted(true);
      navigate("/result");
      calculateScore();
    }
  };

  // skip question
  const handleSkipQuestion = () => {
    setSkipped(skipped + 1);
    if (progress < categoryQuestions.length) {
      setSelectedValue(null);
      setCounter(10);
      setAnswerChecked(false);
      setProgress(progress + 1);
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuizCompleted(true);
      navigate("/result");
      calculateScore();
    }
  };

  // select option
  const handleOptionSelect = (value) => {
    setSelectedValue(value);
    setAnswerChecked(true);
  };

  // calculate score
  const calculateScore = () => {
    const score = ((correctAnswer / categoryQuestions.length) * 100).toFixed(2);
    const result = {
      correct: correctAnswer,
      wrong: wrongAnswer,
      skipped,
      score,
    };
    scoreEarned(result);
  };

  //   useEffect(() => {
  //     if (quizCompleted) {
  //       calculateScore();
  //     }
  //   }, [quizCompleted]);

  return (
    <>
      <Header userInfo={""} userState={"loggedIn"} />

      <div className="page-container container">
        <div>
          <div className="quiz-wrapper">
            <div className="quiz-count-wrapper">
              <div className="quiz-count">
                <p>
                  <span>{progress}</span> /{categoryQuestions?.length}
                </p>
              </div>
              <div className="counter">
                0:{counter < 10 ? `0${counter}` : counter}
              </div>
            </div>
            <div className="quiz-progress">
              <div
                className="progressbar"
                style={{
                  width: `${(progress / categoryQuestions?.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="quiz-detail">
            <div className="question-number">{progress}.</div>
            <div className="question-ans">
              <p className="question">{currentQuestion?.question}</p>

              <div className="ans-wrapper">
                {currentQuestion?.options?.map((options, index) => (
                  <label
                    className={`radio-container ${
                      answerChecked
                        ? options.charAt(0) === currentQuestion.correctAnswer
                          ? "correct"
                          : options === selectedValue
                          ? "wrong"
                          : ""
                        : ""
                    }`}
                    key={index}
                  >
                    <input
                      name="category"
                      type="radio"
                      hidden
                      className="radio-hidden"
                      value={options}
                      onClick={() => {
                        handleOptionSelect(options);
                      }}
                      checked={selectedValue === options}
                      disabled={answerChecked}
                    />
                    <div className="radio-box">
                      <div className="radio-btn">
                        <img src={check} className="checked" />
                      </div>
                      <p className="radio-label">{options}</p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="quiz-footer">
                <button
                  onClick={handleNext}
                  className="submit-btn"
                  disabled={selectedValue !== null ? false : true}
                >
                  Next
                </button>

                <button className="link-btn" onClick={handleSkipQuestion}>
                  Skip this question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
