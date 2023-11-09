// Import Packages
import { createContext } from 'react';

// Create variable to contain create context
export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = () => {
	return <WorkoutsContext.Provider></WorkoutsContext.Provider>;
};
