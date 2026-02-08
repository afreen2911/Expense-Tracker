import React from 'react'

const TotalExpense = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <div
      className="
        mt-4
        p-4
        bg-indigo-100
        dark:bg-indigo-900
        rounded-lg
        text-center
      "
    >
      <h3
        className="
          text-lg
          sm:text-xl
          font-bold
          text-indigo-800
          dark:text-indigo-200
        "
      >
        Total: ₹{total}
      </h3>
    </div>
  )
}

export default TotalExpense
