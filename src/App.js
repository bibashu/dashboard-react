// import firebase from "firebase/compat/app";
// import { SignUpForm } from "./components/signUpForm/SignUpForm";
import { Header } from "./components/header/Header";
import { Home } from "./components/Home/Home";
import { Sidebar } from "./components/sidebar/Sidebar";
import { StudentSection } from "./components/student/StudentSection";
import { APIDask } from "./components/api/dashbord";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import "./global.css";
import { useState, useEffect } from "react";

// APIDask.fetchPhotos()
// recupérer les donnes du apo

function App() {
  const [students, setStudents] = useState([]);
  const [photos, setPhotos] = useState([])

  // photos
  async function fetchPhotos(){
    const photos = await APIDask.fetchPhotos()
    setPhotos(photos.slice(0, 10))
  
  }
  async function fetchStudent() {
    const students = await APIDask.fetchStudent();
    // console.log(students);
    
    setStudents(students)
    // if (students.length > 0) {
    //   setStudents(students[0]);
    // }
  }
useEffect(() => {
  fetchStudent()
}, []);
useEffect(() => {
  fetchPhotos()
}, []);

  return (
    <div className="containe">
      <Sidebar  />
      <div className="inner">
        <Header />
        <StudentSection listPhotos={photos} listStudent={students}/>
      </div>
    </div>
  );
}

export default App;
