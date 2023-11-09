// Import Packages
import { createContext } from 'react';

// Create variable to contain create context
export const WorkoutsContext = createContext();

export const WorkoutsContextProvider = ({ children }) => {
	return <WorkoutsContext.Provider>{children}</WorkoutsContext.Provider>;
};
