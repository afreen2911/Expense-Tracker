import React, { useState,useEffect } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseItem from './components/ExpenseItem';
import TotalExpense from './components/TotalExpense';

const App = () => {
  const[expenses,setExpenses]=useState(()=>{
    const savedExpenses=localStorage.getItem("expenses");
    return savedExpenses?JSON.parse(savedExpenses):[];

  });

  useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(expenses));
  },[expenses]
  );

  const addExpense=(expense)=>{
    setExpenses([...expenses,expense])
  }
   
  const deleteExpense=(id)=>{
    setExpenses(expenses.filter((expense)=>expense.id !== id))
  }

  return (
    <div>
      Expense Tracker
      <ExpenseForm addExpense={addExpense}/>
      <ExpenseItem expenses={expenses} deleteExpense={deleteExpense}/>
      <TotalExpense expenses={expenses}/>
    </div>
  )
}

export default App
