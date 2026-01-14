import React from "react";
import StudentCard from "./componets/studentCard.jsx";

const App = () => {
  const students = [
    {
      key: 123,
      name: "Abeer Rizwan",
      rollNo: "101",
      batch: "16",
      favoriteLanguage: "JavaScript",
    },
    {
      key: 2233,
      name: "Ali Khan",
      rollNo: "102",
      batch: "12",
      favoriteLanguage: "React",
    },
    {
      key: 3344,
      name: "Sara Ahmed",
      rollNo: "103",
      batch: "9",
      favoriteLanguage: "Node.js",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 grid grid-cols-1 md:grid-cols-3 gap-4">


      {students.map((student) => (
        <StudentCard

          key={student.key}
          name={student.name}
          rollNo={student.rollNo}
          batch={student.batch}
          favoriteLanguage={student.favoriteLanguage}
        />
      ))}
    </div>
  );
};

export default App;
