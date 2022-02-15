import Note from './Note';



export default function NotesTab ({
	notes
}) {

	let noteItems = notes.map((note, i) => {
		return <Note key={i} note={note} />;
	});

	return (
		<div className="NotesTab">
			<h2>Notes</h2>
			<div>{noteItems}</div>
		</div>
	);
}
