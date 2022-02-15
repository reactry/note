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

	const topTabBarProps = {
		tabs, currentTabIndex, setCurrentTabIndex
	};

	function getCurrentTabContent () {
		let currentTabTitle = tabs[currentTabIndex]["title"];
		if (currentTabTitle === "Notes") {
			let noteItems = notes.map((note, i) => {
				return <Note key={i} note={note} />;
			});
			return <div>
				<h2>Notes</h2>
				<div>{noteItems}</div>
			</div>;
		} else if (currentTabTitle === "Notebooks") {
			let notebookItems = notebooks.map((notebook, i) => {
				return <Notebook key={i} notebook={notebook} />;
			});
			return <div>
				<h2>Notebooks</h2>
				<div>{notebookItems}</div>
			</div>;
		}
	}

	return (
		<div className="NoteApp bg-slate-100">

			<TopTabBar {...topTabBarProps} />

			<main className="min-h-screen max-w-4xl mx-auto px-4 py-4">
				{getCurrentTabContent()}
			</main>

			<Footer />

		</div>
	);
}
