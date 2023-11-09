// Import Packages
import { createContext, useReducer } from 'react';

// Create variable to contain create context
export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(workoutsReducer, {
		workouts: null,
	});
	return <WorkoutsContext.Provider>{children}</WorkoutsContext.Provider>;
};
