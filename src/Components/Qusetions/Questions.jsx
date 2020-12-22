import { ExpandLess, ExpandMore } from "@material-ui/icons";
import React, { useState } from "react";
import "./Questions.css";

function Questions() {
  const [questions, setQuestions] = useState([
    { text: "the first question", questionInfo: true },
    { text: "the second question", questionInfo: false },
    { text: "the third question", questionInfo: false },
    { text: "the fourth question", questionInfo: false },
    { text: "the fifth question", questionInfo: false },
    { text: "the sexth question", questionInfo: false },
  ]);
  const handleQuestionClick = (text, index) => {
    setQuestions(
      questions.map((q, i) => {
        if (i === index) {
          return { text, questionInfo: true };
        } else {
          return { text: q.text, questionInfo: false };
        }
      })
    );
  };
  return (
    <div className="questions container" id="questions">
      <div className="title">
        <h1>Frequently Asked Questions</h1>
        <p>
          Vivamus venenatis eu mi ac mattis. Maecenas ut elementum sapien. Nunc
          euismod risus ac lobortis congue. Sed erat quam.
        </p>
      </div>
      <div className="part">
        <div className="q-left">
          <h3>Class aptent taciti sociosqu ad litora torquent per conubia</h3>
          <p>
            Curabitur placerat diam in risus lobortis, laoreet porttitor est
            elementum. Nulla ultricies risus quis risus scelerisque, a aliquam
            tellus maximus. Cras pretium nulla ac convallis iaculis. Aenean
            bibendum erat vitae odio sodales, in facilisis tellus volutpat.
            <br />
            Sed lobortis pellentesque magna ac congue. Suspendisse quis molestie
            magna, id eleifend ex. Ut mollis ultricies diam nec dictum. Morbi
            commodo hendrerit mi vel vulputate. Proin non tincidunt dui. Lorem
            ipsum dolor sit amet.
          </p>
          <span>
            Email: <span>email@company.com</span>
          </span>
          <button>CONTACT US</button>
        </div>
        <div className="q-right">
          {questions.map((item, i) => (
            <div
              className="q-first"
              key={i}
              onClick={() => handleQuestionClick(item.text, i)}
            >
              <div className={"first"}>
                <h3> {item.text}</h3>
                {
                  !item.questionInfo ? <ExpandMore /> : <ExpandLess />
                }
                
              </div>
              {item.questionInfo && (
                <div className='second'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloremque ipsum sapiente incidunt. Odio, excepturi! Corporis
                  reiciendis dolorem fuga porro tempore.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
