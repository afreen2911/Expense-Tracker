import React from 'react'

const ExpenseItem = ({expenses,deleteExpense}) => {
  return (
    <div>
        <ul>
            {expenses.map((item)=>(
                <li key={item.id}>
                    {item.title}-₹{item.amount}
                    <button onClick={(e)=>deleteExpense(item.id)}>Delete</button>
                </li>
))}
        </ul>
        
      
    </div>
  )
}

export default ExpenseItem
