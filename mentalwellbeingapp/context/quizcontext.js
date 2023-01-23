import React from 'react'
import { useContext, useState, useEffect, useRef, createContext } from "react";

const AuthContext = createContext();

const QuizContextProvider = () => {

  const value ={
    
  }
  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default QuizContextProvider;