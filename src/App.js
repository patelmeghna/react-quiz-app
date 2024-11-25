import { useState } from "react";
import "./assets/css/style.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./pages/Register";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  const [userName, setUserName] = useState("");
  const [category, setCategory] = useState(null);
  const [result, setResult] = useState();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Register
                onSubmit={(data) => {
                  setUserName(data?.name);
                  setCategory(data?.category);
                }}
              />
            }
          />

          {category && (
            <Route
              path="/quiz"
              element={
                <Quiz
                  selectedCategory={category}
                  scoreEarned={(data) => setResult(data)}
                />
              }
            />
          )}

          {/* {result && (
            <Route
              path="/result"
              element={<Result result={result} userInfo={userName} />}
            />
          )} */}
          <Route
            path="/result"
            element={<Result result={result} userInfo={userName} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
