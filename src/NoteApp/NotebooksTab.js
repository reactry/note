import Notebook from './Notebook';
import NotebookEditor from './NotebookEditor';



export default function NotebooksTab ({
	notebooks, setNotebooks
}) {

	let notebookItems = notebooks.map((notebook, i) => {
		return <Notebook key={i} notebook={notebook} />;
	});

	return (
		<div className="NotebooksTab">
			<h2>Notebooks</h2>
			<div>{notebookItems}</div>
		</div>
	);
}
