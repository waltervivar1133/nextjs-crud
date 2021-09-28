import { createContext, useContext } from "react";

export const TaskContext = createContext();

export const useTask = () => {
   const context = useContext(TaskContext)
   return context;
  }

export const TaskProvider = ({children}) => {



  return (

  
  <TaskContext.Provider > {children}</TaskContext.Provider> 

  ) 
};