// Import Packages
import { createContext, useReducer } from 'react';

// Create variable to contain create context
export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_WORKOUTS':
			return { workouts: action.payloads };
		case 'CREATE_WORKOUTS':
			return { workouts: [action.payloads, ...state] };
	}
};

export const WorkoutsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(workoutsReducer, {
		workouts: null,
	});
	dispatch({ type: 'SET_WORKOUTS' }, payload[({}, {})]);
	return <WorkoutsContext.Provider>{children}</WorkoutsContext.Provider>;
};
