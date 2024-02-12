import { Progress } from 'antd';
import { all } from 'axios';
import React from 'react'

const Analytics=({alltransaction}) =>{

    const categories = ['salary','food','entertainment','bills','medical','tax']

    const totaltransaction = alltransaction.length

    const totalIncomeTransactions = alltransaction.filter(transaction => transaction.type==='income')
    const totalExpenseTransactions = alltransaction.filter(transaction => transaction.type==='expense')
    const totalIncomepercentage = (totalIncomeTransactions.length / totaltransaction) * 100;
    const totalExpensepercentage = (totalExpenseTransactions.length / totaltransaction) * 100;


    const totalturnover =  alltransaction.reduce(
        (acc,transaction)=> acc+ transaction.amount,0
    
    )
    const totalIncomeTurnover = alltransaction.filter((transaction)=>transaction.type === 'income').reduce((acc,transaction)=>acc+transaction.amount,0);
    const totalExpenseTurnover = alltransaction.filter((transaction)=>transaction.type === 'expense').reduce((acc,transaction)=>acc+transaction.amount,0);

    const Incometurnover = (totalIncomeTurnover / totalturnover) *100;
    const Expenseturnover = (totalExpenseTurnover / totalturnover) *100;
    

  return (
    <>
   <div className='flex  justify-center gap-32 '>
    <div className='p-3 border m-3 h-[300px] border-solid  mt-4 rounded-lg shadow-lg max-w-lg hover:shadow-yellow-500'>
    <div className=' h-[30px] p-2 text-center font-bold max-w-lg border border-black bg-yellow-500'> 
    <h1>Total Tranaction : {totaltransaction}</h1>
    </div>

    <div className='w-[450px] h-[100px] flex flex-col justify-center items-center  '>
        <h5  className='font-bold ' >Income: {totalIncomeTransactions.length}</h5>
        <h5 className='font-bold ' >Expense: {totalExpenseTransactions.length}</h5>
    </div>
    <div className=' flex justify-center'>
    <Progress type='circle'
    strokeColor={"green"}
    className='mx-2'
    percent={totalIncomepercentage.toFixed(0)} 
    />
    <Progress type='circle'
    strokeColor={"red"}
    className='mx-2'
    percent={totalExpensepercentage.toFixed(0)} 
    />
    </div>
    </div>
    <div className='p-3 border m-3 h-[300px] border-solid  mt-4 rounded-lg shadow-lg max-w-lg hover:shadow-yellow-500'>
    <div className=' h-[30px] p-2 text-center font-bold max-w-lg border border-black bg-yellow-500'> 
    <h1>Total TurnOver : {totalturnover}</h1>
    </div>

    <div className='w-[450px] h-[100px] flex flex-col justify-center items-center  '>
        <h5  className='font-bold ' >Income: {totalIncomeTurnover}</h5>
        <h5 className='font-bold ' >Expense: {totalExpenseTurnover}</h5>
    </div>
    <div className=' flex justify-center'>
    <Progress type='circle'
    strokeColor={"green"}
    className='mx-2'
    percent={Incometurnover.toFixed(0)} 
    />
    <Progress type='circle'
    strokeColor={"red"}
    className='mx-2'
    percent={Expenseturnover.toFixed(0)} 
    />
    </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Analytics