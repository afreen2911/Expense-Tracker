import React, { useState } from 'react'

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")

  const handleAdd = () => {
    if (!title || !amount) return

    addExpense({
      id: Date.now(),
      title: title,
      amount: Number(amount),
    })

    setTitle("")
    setAmount("")
  }

  return (
    <div className="flex flex-col gap-3 mb-6">
      
      {/* Expense Title */}
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="
          w-full
          px-3
          py-2
          rounded-md
          border
          border-gray-300
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-400
          bg-white
          text-black
          dark:bg-gray-700
          text-white
          font-semibold
          dark:border-gray-600
        "
      />

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="
          w-full
          px-3
          py-2
          rounded-md
          border
          border-gray-300
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-400
          bg-white
          text-black
          dark:bg-gray-700
          dark:text-white
          font-semibold
          dark:border-gray-600
        "
      />

      {/* Button */}
      <button
        onClick={handleAdd}
        className="
          w-full
          bg-indigo-600
          text-white
          py-2
          rounded-md
          font-semibold
          hover:bg-indigo-700
          transition
          dark:bg-blue-500
          dark:hover:bg-indigo-800
        "
      >
        Add Expense
      </button>
    </div>
  )
}

export default ExpenseForm
