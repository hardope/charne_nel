import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import TrojanHorse from './pages/Trojan'
import { useLayoutEffect } from 'react';
import Althea from './pages/Althea';
import TwinRehab from './pages/TwinRehab';

const Wrapper = ({ children }) => {
	const location = useLocation();
  
	useLayoutEffect(() => {
	  // Scroll to the top of the page when the route changes
	  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
	}, [location.pathname]);
  
	return children;
  };

function App() {

	  return (
		<Router>
			<Wrapper>
				<Routes>
					<Route path='/' element={<LandingPage />} />
					<Route path='projects/trojan' element={<TrojanHorse />} />
					<Route path='projects/althea' element={<Althea />} />
					<Route path='projects/twin-rehab' element={<TwinRehab />} />
				</Routes>
			</Wrapper>
		</Router>
	)
}

export default App
