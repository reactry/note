


export default function TopTabBar ({
	tabs, currentTabIndex, setCurrentTabIndex
}) {

	let tabItems = tabs.map((v, i) => {
		let tabClass = "grow px-2 py-5 duration-300";
		tabClass += (i === currentTabIndex) ? " bg-slate-300" : " hover:bg-slate-200 cursor-pointer";
		return (
			<div key={i} className={tabClass} onClick={() => setCurrentTabIndex(i)}>{v.title}</div>
		);
	});

	return (
		<div className="TopTabBar bg-slate-100">
			<div className="flex text-center max-w-4xl mx-auto text-sm font-bold">
				{tabItems}
			</div>
		</div>
	);
}
