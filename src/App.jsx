import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import TrojanHorse from './pages/Trojan'

function App() {

	  return (
		<Router>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='projects/trojan' element={<TrojanHorse />} />
			</Routes>
		</Router>
	)
}

export default App
