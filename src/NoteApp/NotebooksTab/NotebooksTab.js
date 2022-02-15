import React from 'react';

import Notebook from './Notebook';
import NotebookEditor from './NotebookEditor';

import {Button} from '../Utils';



export default function NotebooksTab ({
	notebooks, setNotebooks
}) {

	const [showEditor, setShowEditor] = React.useState(false);

	let notebookItems = notebooks.map((notebook, i) => {
		return <Notebook key={i} notebook={notebook} />;
	});

	function getNotebookEditor () {
		let props = {
			notebooks, setNotebooks, setShowEditor
		};
		return <NotebookEditor {...props} />;
	}

	return (
		<div className="NotebooksTab">
			<div className="py-4">
				{showEditor && getNotebookEditor()}
				{!showEditor && <Button onClick={() => setShowEditor(true)}>Add notebook</Button>}
			</div>
			<div className="py-4">
				<h2 className="py-2">{notebooks.length} notebooks found</h2>
				<div className="flex">{notebookItems}</div>
			</div>
		</div>
	);
}
