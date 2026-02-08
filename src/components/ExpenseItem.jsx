import React from 'react'

const ExpenseItem = ({ expenses, deleteExpense }) => {
  return (
    <div className="mb-6">
      <ul className="space-y-3">
        {expenses.map((item) => (
          <li
            key={item.id}
            className="
              flex
              justify-between
              items-center
              bg-gray-100
              dark:bg-gray-700
              px-4
              py-3
              rounded-lg
            "
          >
            {/* Title & Amount */}
            <span className="text-sm sm:text-base text-gray-800 dark:text-white">
              {item.title} - ₹{item.amount}
            </span>

            {/* Delete Button */}
            <button
              onClick={() => deleteExpense(item.id)}
              className="
                text-xs
                sm:text-sm
                bg-red-500
                text-white
                px-3
                py-1
                rounded-md
                hover:bg-red-600
                transition
              "
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseItem

