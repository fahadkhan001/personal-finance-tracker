import React from 'react'

function TotalIncome({alltransaction}) {
    const totalincome =   alltransaction.filter((transaction)=>transaction.type === 'income').reduce((acc,transaction)=>acc+transaction.amount,0);
  return (
    <>
    <div className='flex text-center justify-center my-5'>
    <div className='border rounded-lg flex-col flex bg-yellow-300 w-[150px] p-3 font-bold'>

    <span>Income</span> <span> {totalincome} </span>
    </div>
    </div>
    </>
  )
}

export default TotalIncome