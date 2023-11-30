export default function Project({ params }) {
	return (
		<div className='flex flex-col p-24 gap-y-5'>
			<h1>Project name #{params.id}</h1>
			<h2>Status</h2>
			<div className='flex gap-x-5'>
				<div className='flex flex-col'>
					<h3>To Do</h3>
				</div>
				<div className='flex flex-col'>
					<h3>Ongoing</h3>
				</div>
				<div className='flex flex-col'>
					<h3>Done</h3>
				</div>
			</div>
			<h2>Documents</h2>
		</div>
	);
}
