import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutForm = () => {
	const { dispatch } = useWorkoutsContext();
	// States

	const [title, setTitle] = useState('');
	const [load, setLoad] = useState('');
	const [reps, setReps] = useState('');
	const [error, setError] = useState(null);

	//Handler functions

	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent default refresh after form submit
		const workout = { title, load, reps }; // Variable that contains the details to be posted
		const response = await fetch('/api/workouts', {
			// Fetching route
			method: 'POST',
			body: JSON.stringify(workout),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const json = await response.json();
		// Check if there is an error
		if (!response.ok) {
			setError(json.error);
		}
		if (response.ok) {
			// Reset details after submit
			setError(null);
			setTitle('');
			setLoad('');
			setReps('');
			console.log('New workout added');
			dispatch({ type: 'CREATE_WORKOUT', payload: json });
		}
	};
	return (
		<form className="create" onSubmit={handleSubmit}>
			<h3>Add a Workout</h3>
			<label> Exercise Title:</label>
			<input
				type="text"
				onChange={(e) => setTitle(e.target.value)}
				value={title}
			/>
			<label> Load (in Kg):</label>
			<input
				type="number"
				onChange={(e) => setLoad(e.target.value)}
				value={load}
			/>
			<label> Reps:</label>
			<input
				type="number"
				onChange={(e) => setReps(e.target.value)}
				value={reps}
			/>
			<button>Add Workout</button>
			{error && <div className="error">{error}</div>}
		</form>
	);
};

export default WorkoutForm;
