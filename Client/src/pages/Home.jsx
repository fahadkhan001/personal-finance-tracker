import React, { useState,useEffect } from 'react'
import {Form, Input, Modal, Select, Table, message} from 'antd'
import { useSelector } from 'react-redux'
import {UnorderedListOutlined,AreaChartOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons'
import axios from 'axios'
import moment from 'moment'
import Analytics from '../components/Analytics'
 
export default function Home() {
  const [openModal, setOpenModal] =useState(false)
const [loading,setLoading] = useState(false)
const {currentUser} = useSelector((state)=>state.user)
const [allTransaction,setAllTransaction] = useState([])
const [frequency,setFrequency] = useState('7')
const [type,setType] = useState('all')
const [viewData,setViewData] = useState("table")
const [editable, setEditTabel] = useState(null)
const handleDelete = async (record) => {
  try {
    setLoading(true);
    await axios.post("/api/trans/deleteTransaction", {
      transacationId: record._id,
    });
    setLoading(false);
    message.success("Transaction Deleted!");
  } catch (error) {
    setLoading(false);
    console.log(error);
    message.error("unable to delete");
  }
};

//table data
const columns =[
  {
    title:'Date',
    dataIndex:'date',
    render:(text)=><span>{moment(text).format("YYYY-MM-DD")}</span>
  },  
   
  {
    title:'Amount',
    dataIndex:'amount',
  },  
  {
    title:'Type',
    dataIndex:'type',
  },  
  {
    title:'Category',
    dataIndex:'category',
  },  
  {
    title:'Reference',
    dataIndex:'refrence',
  }, 
  {
    title:'Actions',
    render : (text,record)=>(
      <div>
      <EditOutlined className='w-[30px]' onClick={()=>{
        setEditTabel(record)
        setOpenModal(true);

      }} />
      <DeleteOutlined onClick={()=>{handleDelete(record)}} />
      </div>
    )

  } 
]


//get all transaction
const getAllTransaction=async()=>{
  try {
    console.log(currentUser._id)
    setLoading(true);
    const res =  await axios.post("./api/trans/getTransaction",{
      userid:currentUser._id,
      frequency,
      type
    })
    setLoading(false);
    setAllTransaction(res.data)
    console.log(res.data)
  } catch (error) {
    console.log(error)
    message.error("issue in getall")
  }
}

useEffect(()=>{
  getAllTransaction()
},[frequency,type])


const handleSubmit=async(e)=>{
 try {
  console.log(currentUser)
  setLoading(true);
  if(editable){
    await axios.post("/api/trans/editTransaction",{
     payload:{ ...e,
      userid:currentUser._id,
     },
     transactionId :editable._id
    })
  
    setLoading(false);
    message.success("Tranaction Edited Succesfully")
  }
  else{
    await axios.post("/api/trans/addTransaction",{
      ...e,
      userid:currentUser._id,
    })
  
    setLoading(false);
    message.success("Tranaction Added Succesfully")
  }
  setOpenModal(false);
  setEditTabel(null )
  setLoading(true)
 } catch (error) {
  setLoading(false);
  console.log(error.message)
  message.error("Failed to add Transaction");
}

  
}


  return (
    
    <div className='flex flex-col '>
    <div className='justify-end  items-center flex '>
    <div className='justify-center items-center flex uppercase flex-col mt-5 border w-[200px] rounded-lg h-[100px] font-bold bg-yellow-300 '>
    {}
    <div>
    {/*income */}
    ₹5000
    </div>
    </div>
    </div>
      <div className='flex items-center justify-between  shadow-lg p-3 mt-[80px]'>
        <div className='border rounded-lg p-2 shadow-lg hover:shadow-yellow-500'>
          <h6>SORT </h6>
           <Select value={frequency} onChange={(values)=>setFrequency(values)} >
           <Select.Option value="7">Last 1 Week</Select.Option>
           <Select.Option value="30" >Last 1 Month</Select.Option>
           <Select.Option value="365" >Last 1 Year</Select.Option>
           </Select>
        </div>
      <div className='border rounded-lg shadow-lg hover:shadow-yellow-200 p-2 '>
      <h6>Type </h6>
           <Select className='w-[100px]' value={type} onChange={(values)=>setType(values)} >
           <Select.Option value="all">All</Select.Option>
           <Select.Option value="salary" >Salary</Select.Option>
           <Select.Option value="expense" >Expense</Select.Option>
           </Select>
        </div>
        <div className='mx-2 border w-[80px] h-[50px] flex rounded-lg shadow-lg hover:shadow-yellow-200' >
        <UnorderedListOutlined className='mx-2 hover:scale-125 hover:text-blue-100  ' onClick={()=>setViewData('table')} />  
        <AreaChartOutlined className='mx-2 hover:scale-150 hover:text-blue-100 ' onClick={()=>setViewData('analytics')}  />
        </div>
        <div>
          <button className='bg-yellow-500 border rounded-lg p-3 hover:text-white font-bold' onClick={()=>setOpenModal(true)}>Add Transaction</button>
        </div>
      </div>

      <div className=''>
      {viewData === 'table' ? 
      <Table columns={columns} dataSource={allTransaction} />
       :
      <Analytics alltransaction={allTransaction} />
      }
      </div>
      <Modal  title={editable ? 'Edit Transaction' : "Add Transaction"} open={openModal} onCancel={()=>setOpenModal(false)} footer={false} >
      <Form layout='vertical' onFinish={handleSubmit} initialValues={editable}>
        
      <Form.Item label="Amount" name="amount" >
        <Input type='text' />
        </Form.Item>

        <Form.Item label="Type" name="type">
        <Select>
        <Select.Option value="income">Income</Select.Option>
        <Select.Option value="expense" >Expense</Select.Option>
        </Select>
        </Form.Item>

        <Form.Item label="Category" name="category">
        <Select>
        <Select.Option value="salary">Salary</Select.Option>
        <Select.Option value="food" >Food</Select.Option>
        <Select.Option value="entertainment" >Entertainment</Select.Option>
        <Select.Option value="bills" >Bills</Select.Option>
        <Select.Option value="medical" >Medical</Select.Option>
        <Select.Option value="tax" >Tax</Select.Option>
        </Select>
        </Form.Item>
        
        <Form.Item label="Date" name="date">
        <Input type='date'/>
        </Form.Item>
        <Form.Item label="Refrence" name="refrence">
        <Input type='text'/>
        </Form.Item>
        <Form.Item label="Description " name="description">
        <Input type='text'/>
        </Form.Item>
        <div className='flex justify-end'>
        <button type='submit' className='border rounded-lg hover:bg-yellow-400 p-3 font-bold w-[100px]'>Save</button>
        </div>

      </Form>
      </Modal>
    
    
    
    </div>

  )
}
