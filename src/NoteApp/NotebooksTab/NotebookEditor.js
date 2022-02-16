import React from 'react';

import {Input, Textarea, Button} from '../Utils';



export default function NotebookEditor ({
	notebooks, setNotebooks, setShowEditor
}) {

	const [title, setTitle] = React.useState("Title");
	const [description, setDescription] = React.useState("Description");

	function handleClick () {
		setNotebooks([
			...notebooks,
			{
				title: title,
				description: description
			}
		]);
		setShowEditor(false);
	}

	return (
		<div className="NotebookEditor">
			<div>
				<Input x={title} setX={setTitle} />
				<Textarea x={description} setX={setDescription} />
			</div>
			<div>
				<Button onClick={handleClick}>Add</Button>
				<Button onClick={() => setShowEditor(false)}>Cancel</Button>
			</div>
		</div>
	);
}
