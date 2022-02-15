import {ExternalLink} from './Utils';



export default function Footer () {

	return (
		<div className="Footer bg-slate-800 text-center text-white">
			<div className="max-w-4xl mx-auto px-4 py-24">
				<h3>Created by <ExternalLink href="https://github.com/iaseth">Ankur Seth</ExternalLink>. Hosted on <ExternalLink href="https://github.com/reactry/note">GitHub</ExternalLink>.</h3>
			</div>
		</div>
	);
}
