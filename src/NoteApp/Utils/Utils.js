

export function Button ({onClick, children}) {
	return (
		<div className="">
			<button onClick={onClick} className="font-bold text-base bg-blue-500 border-2 border-blue-800 text-white px-4 py-2 duration-300 hover:bg-blue-700">{children}</button>
		</div>
	);
}

export function Input ({
	x, setX
}) {

	return (
		<div className="py-2">
			<input className="px-2 py-2" value={x} onChange={(e) => setX(e.target.value)} />
		</div>
	);
}

export function Textarea ({
	x, setX
}) {

	return (
		<div className="py-2">
			<textarea className="px-2 py-2" value={x} onChange={(e) => setX(e.target.value)} name="" id=""></textarea>
		</div>
	);
}



export function ExternalLink ({href, children}) {
	return (
		<a href={href} target="_blank" rel="noreferrer" className="font-bold border-b-2 border-blue-500 duration-300 pb-1 text-blue-500 hover:text-blue-300">{children}</a>
	);
}

