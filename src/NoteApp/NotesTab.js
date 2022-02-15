import React from 'react';

import Note from './Note';
import NoteEditor from './NoteEditor';

import {Button} from './Utils';



export default function NotesTab ({
	notes, setNotes
}) {

	const [showEditor, setShowEditor] = React.useState(false);

	let noteItems = notes.map((note, i) => {
		return <Note key={i} note={note} />;
	});

	function getNoteEditor () {
		let props = {
			notes, setNotes, setShowEditor
		};
		return <NoteEditor {...props} />;
	}

	return (
		<div className="NotesTab">
			<div className="py-4">
				{showEditor && getNoteEditor()}
				{!showEditor && <Button onClick={() => setShowEditor(true)}>Add note</Button>}
			</div>
			<div className="py-4">
				<h2 className="py-2">{notes.length} notes found</h2>
				<div>{noteItems}</div>
			</div>
		</div>
	);
}
