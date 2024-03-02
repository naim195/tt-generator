import React, { useState } from "react";
import "./App.css";
import SearchCourse from "./components/SearchCourse";
import Selected from "./components/Selected";
import Timetable from "./components/Timetable";

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [generateTable, setGenerateTable] = useState(-1);

  const addToSelected = (course) => {
    setSelectedCourses([...selectedCourses, course]);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Timetable Generator</h1>
      </header>
      <main>
        <div className="course-sad">
          <SearchCourse addToSelected={addToSelected} />
          <Selected
            selectedCourses={selectedCourses}
            setSelectedCourses={setSelectedCourses}
            generateTable={generateTable}
            setGenerateTable={setGenerateTable}
          />
        </div>
        {generateTable === 1 && <Timetable selectedCourses={selectedCourses} />}
      </main>
      <footer>
        <p>
          You can view the source code{" "}
          <a
            href="https://github.com/naim195/timetable-generator"
            target="_blank"
          >
            here
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
