import React from 'react';

import {Input, Textarea, Button} from '../Utils';



export default function NoteEditor ({
	notes, setNotes, setShowEditor
}) {

	const [title, setTitle] = React.useState("Title");
	const [content, setContent] = React.useState("Content");

	function handleClick () {
		setNotes([
			...notes,
			{
				title: title,
				content: content
			}
		]);
		setShowEditor(false);
	}

	return (
		<div className="NoteEditor">
			<div>
				<Input x={title} setX={setTitle} />
				<Textarea x={content} setX={setContent} />
			</div>
			<div>
				<Button onClick={handleClick}>Add</Button>
				<Button onClick={() => setShowEditor(false)}>Cancel</Button>
			</div>
		</div>
	);
}
