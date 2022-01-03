import React from 'react';
import { LeafPoll, Result } from 'react-leaf-polls';
import 'react-leaf-polls/dist/index.css';

// Persistent data array (typically fetched from the server)
const resData = [
	{ text: 'Niña', votes: 5 },
	{ text: 'Niño', votes: 4 },
];

// Object keys may vary on the poll type (see the 'Theme options' table below)
const customTheme = {
	textColor: '#0f1e4e',
	mainColor: '#00B87B',
	backgroundColor: 'rgb(255,255,255)',
	alignment: 'center',
};

function vote(item: Result, results: Result[]) {
	// Here you probably want to manage
	// and return the modified data to the server.
}

const Poll = () => {
	return (
		<LeafPoll
			type='binary'
			question='¿Será niña o niño?'
			results={resData}
			theme={customTheme}
			onVote={vote}
		/>
	);
};

export default Poll;
