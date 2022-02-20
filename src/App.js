import axios from 'axios';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz'
import Result from './Pages/Result/Result'


function App() {

  const [name, setName] = useState('');


  const fetchQuestions = async (category, difficulty) => {
    const data = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
    console.log(data);
  }



  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundImage: 'url(./ques1.png)' }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
