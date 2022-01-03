import React from 'react';
import './App.css';
import logo from './pies.png';
import FormatDate from './components/Date';
import Poll from './components/Poll';

function App() {
	const date = new Date();

	return (
		<div className='App'>
			<header className='App-header'>
				<FormatDate date={date} />
				<img src={logo} className='App-logo' alt='logo' />
				<section className='poll-section'>
					<Poll />
				</section>
			</header>
		</div>
	);
}

export default App;
