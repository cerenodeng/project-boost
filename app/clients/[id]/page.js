export default function Client({ params }) {
	return (
		<div className='flex flex-col p-24 gap-y-5'>
			<h1>Client name #{params.id}</h1>
			<h2>Projects</h2>
			<div className='grid grid-cols-4 gap-5'>
				<div>Project #1</div>
				<div>Project #2</div>
				<div>Project #3</div>
				<div>Project #4</div>
				<div>Project #5</div>
			</div>
		</div>
	);
}
