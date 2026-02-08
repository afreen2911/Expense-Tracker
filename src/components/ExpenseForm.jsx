import React,{ useState } from 'react'

 
const ExpenseForm=({addExpense})=>{
    const[title,setTitle]=useState("");
    const[amount,setAmount]=useState("");
     
    const handleAdd=()=>{
        if (!title || !amount) return;
         addExpense({
            id:Date.now(),
            title:title,
            amount:Number(amount),
        })

        setTitle("");
        setAmount("");
     };
    return(
        <div>
        <input type="text"  placeholder='Expense Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <input type='number' placeholder='Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <button onClick={handleAdd}>Add </button>
        </div>
    )
}
 export default ExpenseForm
