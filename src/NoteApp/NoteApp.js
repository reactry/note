import React from 'react';

import TopTabBar from './TopTabBar';
import NotesTab from './NotesTab';
import NotebooksTab from './NotebooksTab';
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
			let notesTabProps = {
				notes, setNotes
			};
			return <NotesTab {...notesTabProps} />;
		} else if (currentTabTitle === "Notebooks") {
			let notebooksTabProps = {
				notebooks, setNotebooks
			};
			return <NotebooksTab {...notebooksTabProps} />;
		}
	}

	return (
		<div className="NoteApp bg-slate-300">

			<TopTabBar {...topTabBarProps} />

			<main className="min-h-screen max-w-4xl mx-auto px-4 py-4">
				{getCurrentTabContent()}
			</main>

			<Footer />

		</div>
	);
}
