import React from 'react'

const HeadLineCard = () => {
  return (


    <div className=' max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 ' >
      


      
      {/* Card */}
      <div  className=' rounded-xl relative' >
        {/* OverLay */}
        <div className='absolute w-full h-full  bg-black/60 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4' >Sun's Out BOGO's Out</p>
          <p className='px-2'>Through 8/28</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className=' max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60' alt='/'/>
      </div>

      
      
      
      <div  className=' rounded-xl relative' >
        {/* OverLay */}
        <div className='absolute w-full h-full  bg-black/60 rounded-xl text-white'>
          <p className='px-2 font-bold text-2xl pt-4'>Sun's Out BOGO's Out</p>
          <p className='px-2'>Through 8/28</p>
          <button className='border-white mx-2 text-black bg-white absolute bottom-4  '>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>




      <div  className=' rounded-xl relative' >
        {/* OverLay */}
        <div className='absolute w-full h-full  bg-black/60 rounded-xl text-white'>
          <p className='px-2 font-bold text-2xl pt-4'>Sun's Out BOGO's Out</p>
          <p className='px-2'>Through 8/28</p>
          <button className='border-white mx-2 text-black bg-white absolute bottom-4  '>Order Now</button>
        </div>
       <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
          alt='/'
        />
      </div>





      





    </div>
  )
}

export default HeadLineCard
