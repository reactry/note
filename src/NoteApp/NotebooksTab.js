import Notebook from './Notebook';



export default function NotebooksTab ({
	notebooks
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
