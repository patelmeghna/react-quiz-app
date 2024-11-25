import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router";

const Result = (props) => {
  const navigate = useNavigate();

  const { result, userInfo } = props;
  return (
    <>
      <Header userInfo={"Meghna Patel"} userState={"complete"} />

      <div className="page-container container">
        <div className="result-wrapper">
          {result?.score > 55 ? (
            <>
              <div className="score-board-icon">
                <svg
                  width="97"
                  height="96"
                  viewBox="0 0 97 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width="96"
                    height="96"
                    rx="48"
                    fill="#06AF52"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M28.5 51L41 63.5L68.5 36"
                    stroke="#06AF52"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="greeting-text">Congratulation</p>
                <p className="greeting-note">
                  You successfully completed the Quiz and holds
                </p>
              </div>

              <div className="score-content">
                <p className="score-text">Your Score</p>
                <h3 className="score">83%</h3>
                <p className="greetings">Great job!</p>
              </div>
            </>
          ) : (
            <>
              <div className="score-board-icon">
                <svg
                  width="97"
                  height="96"
                  viewBox="0 0 97 96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48.6064 11.1115C28.1719 11.1115 11.6064 27.6911 11.6064 48.143C11.6064 68.5948 28.1719 85.1745 48.6064 85.1745C69.0408 85.1745 85.6064 68.5948 85.6064 48.143C85.6064 27.6911 69.0408 11.1115 48.6064 11.1115ZM5.60645 48.143C5.60645 24.3745 24.8582 5.10638 48.6064 5.10638C72.3548 5.10638 91.6064 24.3745 91.6064 48.143C91.6064 71.9116 72.3548 91.1796 48.6064 91.1796C24.8582 91.1796 5.60645 71.9116 5.60645 48.143Z"
                    fill="#B92B5D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28.6069 36.1327C28.6069 33.9217 30.3978 32.1293 32.6069 32.1293H32.6428C34.852 32.1293 36.6428 33.9217 36.6428 36.1327C36.6428 38.3438 34.852 40.1361 32.6428 40.1361H32.6069C30.3978 40.1361 28.6069 38.3438 28.6069 36.1327ZM60.5709 36.1327C60.5709 33.9217 62.3617 32.1293 64.5709 32.1293H64.6069C66.8161 32.1293 68.6069 33.9217 68.6069 36.1327C68.6069 38.3438 66.8161 40.1361 64.6069 40.1361H64.5709C62.3617 40.1361 60.5709 38.3438 60.5709 36.1327Z"
                    fill="#B92B5D"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M63.3914 55.0347C64.0066 56.5741 63.2582 58.3215 61.7198 58.9377L41.7198 66.9445C40.1816 67.5602 38.4357 66.8112 37.8203 65.2714C37.205 63.7321 37.9533 61.9847 39.4916 61.3685L59.4918 53.3617C61.0298 52.746 62.7758 53.495 63.3914 55.0347Z"
                    fill="#B92B5D"
                  />
                </svg>

                <p className="greeting-note">
                  You successfully completed the Quiz but you need to
                </p>
                <p className="greeting-text">Keep practicing!</p>
              </div>

              <div className="score-content low-score">
                <p className="score-text">Your Score</p>
                <h3 className="score">{result?.score}%</h3>
              </div>
            </>
          )}

          <div className="result-count">
            <p className="total-count">
              Out of {result?.correct + result?.wrong + result?.skipped}
              question
            </p>
            <div className="question-count">
              <p className="correct bold">
                <span>{result?.correct}</span> Correct
              </p>
              <p className="wrong bold">
                <span>{result?.wrong}</span> Incorrect
              </p>
              <p className="skipped bold">
                <span>{result?.skipped}</span> Not answered
              </p>
            </div>
          </div>

          <button
            className="retake-btn"
            onClick={() => {
              navigate("/quiz");
            }}
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </>
  );
};

export default Result;