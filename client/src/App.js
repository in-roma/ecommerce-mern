import './App.css';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomeScreen from './screens/HomeScreen/HomeScreen.jsx';

const App = () => {
	return (
		<>
			<Header />
			<main>
				<HomeScreen />
			</main>
			<Footer />
		</>
	);
};

export default App;
