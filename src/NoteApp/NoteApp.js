import React from 'react';

import TopTabBar from './TopTabBar';
import Note from './Note';
import Notebook from './Notebook';
import Footer from './Footer';

const tabs = [
	{"title": "Notes"},
	{"title": "Notebooks"}
];



export default function NoteApp () {
	const [notes, setNotes] = React.useState([]);
	const [notebooks, setNotebooks] = React.useState([]);

	const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

	let noteItems = notes.map((note, i) => {
		return <Note key={i} note={note} />;
	});

	let notebookItems = notebooks.map((notebook, i) => {
		return <Notebook key={i} notebook={notebook} />;
	});

	const topTabBarProps = {
		tabs, currentTabIndex, setCurrentTabIndex
	};

	return (
		<div className="NoteApp bg-slate-100">

			<TopTabBar {...topTabBarProps} />

			<main className="min-h-screen max-w-4xl mx-auto px-4 py-4">

				<div>
					<h2>Notebooks</h2>
					<div>
						{notebookItems}
					</div>
				</div>

				<div>
					<h2>Note</h2>
					<div>
						{noteItems}
					</div>
				</div>

			</main>

			<Footer />

		</div>
	);
}
