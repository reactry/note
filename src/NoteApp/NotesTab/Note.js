


export default function Note ({
	note
}) {

	return (
		<div className="Note px-4 py-4 bg-slate-50 mb-6 mr-4 w-64 max-w-sm rounded shadow">
			<h2>{note.title}</h2>
			<p>{note.content}</p>
		</div>
	);
}
