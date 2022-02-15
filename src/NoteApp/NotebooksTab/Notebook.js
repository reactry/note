


export default function Notebook ({
	notebook
}) {

	return (
		<div className="Notebook px-4 py-4 bg-slate-50 mb-6 mr-4 w-64 max-w-sm rounded shadow">
			<h2>{notebook.title}</h2>
			<p>{notebook.description}</p>
		</div>
	);
}
