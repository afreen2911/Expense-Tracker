import React from 'react'

const TotalExpense = ({expenses}) => {
    const total=expenses.reduce((sum,expense)=>sum+expense.amount,0)
  return (
    <div>
      <h3>Total:₹{total}</h3>
    </div>
  )
}

export default TotalExpense
