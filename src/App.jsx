import React, { useState, useEffect } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseItem from './components/ExpenseItem'
import TotalExpense from './components/TotalExpense'

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses")
    return savedExpenses ? JSON.parse(savedExpenses) : []
  })

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  const addExpense = (expense) => {
    setExpenses([...expenses, expense])
  }

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="
        min-h-screen 
        bg-gray-100 
        dark:bg-gray-600 
        flex 
        justify-center 
        px-3 
        py-6
      ">
        <div className="
          w-full 
          sm:max-w-md 
          md:max-w-lg 
          lg:max-w-xl 
          bg-white 
          dark:bg-gray-400 
          shadow-lg 
          rounded-xl 
          p-4 
          sm:p-6
        ">

          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="
              text-xl 
              sm:text-2xl 
              font-bold 
              text-indigo-800 
              dark:text-indigo-800
            ">
              Expense Tracker
            </h1>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
                px-3 
                py-1 
                rounded-md 
                text-sm 
                bg-gray-200 
                dark:bg-gray-700 
                dark:text-white
              "
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>
          </div>

          <ExpenseForm addExpense={addExpense} />
          <ExpenseItem expenses={expenses} deleteExpense={deleteExpense} />
          <TotalExpense expenses={expenses} />
        </div>
      </div>
    </div>
  )
}

export default App

