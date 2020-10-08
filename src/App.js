import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Aboutus from './Components/About Us/About';
import Contact from './Components/Contact/Contact';


function App() {
	return (
		<div className="container">
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
