import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( ()=>{
    setTotalAmount(cart.reduce( (acc, curr)=> acc+ curr.price,0));
  },[cart])
  return (
    <div>
    {
      cart.length > 0  ? 
    (<div className='lg:flex max-sm:flex item-center max-sm:flex-col-reverse min-md:flex-col-reverse min-md:flex lg:justify-evenly sm:justify-center  mt-4 mb-8'>


      <div className='flex flex-col gap-4 '>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className='lg:flex lg:flex-col  justify-between max-sm:mb-6 md:flex max-sm:px-2 md:px-4 max-sm:text-center' >

        <div className='flex flex-col gap-1'>
          <div className='text-green-600 font-semibold'>Your Cart</div>
          <div className='text-3xl text-green-600 font-semibold'>Summary</div>
          <p className='mt-3'>
            <span className='text-sm font-semibold'>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className='lg:flex flex-col max-sm:'>
          <p className=''>Total Amount: <span className='font-semibold'>${totalAmount}</span> </p>
          <button className='bg-green-600 p-2 w-[300px] text-white font-semibold rounded-md max-sm:p-1'>
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className='flex flex-col gap-3 justify-center items-center h-[500px]'>
      <h1 className='text-4xl text-gray-500 font-semibold'>Cart Empty</h1>
      <Link className='border px-3 py-1 bg-green-600 text-white' to={"/"}>
        <button>
          Shop Now
        </button>
      </Link>
    </div>)
    }

    </div>
  )
}

export default Cart