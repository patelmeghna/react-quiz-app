import React, { useState } from "react";
import check from "../assets/img/check.svg";
import { useNavigate } from "react-router";
import InfoModal from "../components/InfoModal";
import Header from "../components/Header";

const Register = (props) => {
  const { onSubmit } = props;

  const [category, setCategory] = useState(null);
  const [name, setName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [userState, setUserState] = useState("register");

  const navigate = useNavigate();

  const radioValue = [
    {
      value: "js_basics",
      label: "Javascript Basic",
    },
    {
      value: "angular_basics",
      label: "Angular Basic",
    },
    {
      value: "react_advanced",
      label: "React.js Advance",
    },
    {
      value: "flutter",
      label: "Flutter",
    },
  ];

  return (
    <>
      <Header userInfo={name} userState={userState} />

      <div className="container">
        <div className="register-wrapper">
          {/* page title */}
          <h3 className="page-title">
            Welcome to <span className="pink-light">QUIZ</span>
            <span className="pink-bold">Mania</span>
          </h3>
          {/* page title */}

          {/* page note */}
          <div className="note">
            <p>Please read all the rules about this quiz before you start.</p>
            <a className="modal-btn" onClick={() => setOpenModal(true)}>
              Quiz rules
            </a>
          </div>
          {/* page note */}

          {/* form */}
          <div className="form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const value = {
                  category,
                  name,
                };

                onSubmit(value);
                navigate("/quiz");
                setUserState("loggedIn");
              }}
            >
              {/* full name */}
              <div className="input-wrapper">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="Full name"
                  id="name"
                  name="name"
                  onClick={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              {/* full name */}
              <div className="input-wrapper">
                <label htmlFor="category" className="form-label">
                  Please select topic to continue
                </label>

                <div className="radio-wrapper">
                  {radioValue?.map((item, index) => {
                    return (
                      <label className="radio-container" key={index}>
                        <input
                          name="category"
                          type="radio"
                          hidden
                          className="radio-hidden"
                          value={item?.value}
                          onClick={(e) => {
                            setCategory(e.target.value);
                          }}
                        />
                        <div className="radio-box">
                          <div className="radio-btn">
                            <img src={check} className="checked" />
                          </div>
                          <p className="radio-label">{item?.label}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
              <button
                type="submit"
                className="submit-btn"
                disabled={name !== "" || category !== null ? false : true}
              >
                Start Quiz
              </button>
            </form>
            {/* form */}
          </div>
        </div>

        <InfoModal open={openModal} setOpen={() => setOpenModal()} />
      </div>
    </>
  );
};

export default Register;
