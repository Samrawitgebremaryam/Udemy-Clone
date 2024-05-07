import React, { useEffect, useState, createContext } from 'react';
import './App.css'
import HomePage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const Data = createContext();
export const FetchState = createContext();
function App() {
  const [coursesData, setCoursesData] = useState({});
		const [fetched, setAsFetched] = useState(false);

	useEffect(() => {
		const getData = () => {
			fetch('https://api.npoint.io/97d7e0d71e507947a59f')
				.then((response) => response.json())
				.then((jsonFile) => {
					setCoursesData(jsonFile['data']);
					setAsFetched(true);
				});
		};
		getData();
	}, []);

  return (
    
      <div className='App'>
        <Data.Provider value={coursesData}>
						<FetchState.Provider value={fetched}>
							 <Header/>
          <Routes>
         <Route path="/" element={<HomePage />} />
				 <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
				<Footer/>
				</FetchState.Provider>
        </Data.Provider>
				 
      </div>
      
  )
}

export default App
