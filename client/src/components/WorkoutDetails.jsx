import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutDetails = ({ workout }) => {
	const { dispatch } = useWorkoutsContext();
	const handleDelete = async () => {
		const response = await fetch('/api/workouts/' + workout._id, {
			method: 'DELETE',
		});
		const json = await response.json();
		if (response.ok) {
			dispatch({ type: 'DELETE_WORKOUT', payload: json });
		}
	};
	return (
		<div className="workout-details">
			<h4>{workout.title}</h4>
			<p>
				<strong>Load: </strong>
				{workout.load} kg
			</p>
			<p>
				<strong>Reps: </strong>
				{workout.reps} times
			</p>
			<p>{workout.createdAt}</p>
			<span className="material-symbols-outlined" onClick={handleDelete}>
				Delete
			</span>
		</div>
	);
};

export default WorkoutDetails;
