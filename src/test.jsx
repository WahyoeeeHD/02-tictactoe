import React from "react";

import Review from "./Review";

// don't change the Component name "App"
function App() {
  const [feedbackValue, setFeedbackValue] = React.useState();
  const [studentValue, setStudentValue] = React.useState();

  function onFeedbackChangeHandler(e) {
    setFeedbackValue(e.target.value);
  }

  function onStudentChangeValue(e) {
    setStudentValue(e.target.value);
  }

  return (
    <>
      {/* this is the component that you should work on! */}
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea onChange={onFeedbackChangeHandler} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={onStudentChangeValue} />
        </p>
      </section>

      {/* Draft section */}
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedbackValue} student={studentValue} />

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
