import React from "react";

const InfoModal = (props) => {
  const { open, setOpen } = props;

  return (
    <div className={`modal ${open && "open"}`}>
      <div className="modal-content">
        {/* header */}
        <div className="modal-header">
          <h4>Quiz rules</h4>
          <button className="close-btn" onClick={() => setOpen(false)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.81667 10.8167C0.16667 11.4667 0.16667 12.5167 0.81667 13.1667C1.15 13.5 1.56667 13.65 2 13.65C2.43334 13.65 2.85 13.4833 3.18334 13.1667L7 9.34999L10.8167 13.1667C11.15 13.5 11.5667 13.65 12 13.65C12.4333 13.65 12.85 13.4833 13.1833 13.1667C13.8333 12.5167 13.8333 11.4667 13.1833 10.8167L9.36667 6.99999L13.1833 3.18333C13.8333 2.53333 13.8333 1.48333 13.1833 0.833325C12.5333 0.183325 11.4833 0.183325 10.8333 0.833325L7.01667 4.64999L3.2 0.833325C2.55 0.183325 1.5 0.183325 0.850004 0.833325C0.200004 1.48333 0.200004 2.53333 0.850004 3.18333L4.66667 6.99999L0.850004 10.8167H0.81667Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        {/* header */}

        {/* body */}
        <div className="modal-body">
          <div className="content-wrap">
            <div className="content-head">
              <p>10-Second Timer</p>
            </div>
            <div className="content">
              <ul>
                <li>Each question comes with a 10-second timer.</li>
                <li>
                  If you don’t answer within the time limit, the app will
                  automatically move to the next question.
                </li>
              </ul>
            </div>
          </div>
          <div className="content-wrap">
            <div className="content-head">
              <p>Manual Navigation</p>
            </div>
            <div className="content">
              <ul>
                <li>
                  You can navigate to the next question manually before the
                  timer expires.
                </li>
                <li>
                  Use the "Next" button to move ahead if you’re ready before the
                  timer runs out.
                </li>
              </ul>
            </div>
          </div>
          <div className="content-wrap">
            <div className="content-head">
              <p>Final Score and Performance Message</p>
            </div>
            <div className="content">
              <ul>
                <li>
                  After all questions are answered, your final score will be
                  displayed.
                </li>
                <li>
                  Based on your performance, you will receive a personalized
                  message:
                  <ul>
                    <li>
                      Great job!: If you score <span>above 80%.</span>
                    </li>
                    <li>
                      Well done!: If you score <span>between 60% and 80%.</span>
                    </li>
                    <li>
                      Keep practicing!: If you score <span>below 60%.</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* body */}
      </div>
    </div>
  );
};

export default InfoModal;
