import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'

import Header from './app/layout/header/Header'
import Footer from './app/layout/footer/Footer'
import MainPage from './screens/main-page/MainPage'
import AboutPage from './screens/about/AboutPage'
import ContactPage from './screens/contact/ContactPage'

function App() {
  return (
    <Router>
		<Header />
		{/* <MainPage /> */}
		<AboutPage />
		{/* <ContactPage /> */}
		<Footer />
    </Router>
  )
}

export default App
