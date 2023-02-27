import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Conatcts(){
    return <div>
 <div className=" dark:bg-black dark:text-white">
    <div className="pt-[40px] pb-[30px]  flex  items-center justify-between max-w-[1500px] m-auto 2xl:px-[20px] lg:flex-wrap lg:text-center lg:w-[100%]">
        <div className="lg:m-auto">
                <p className="text-[100px] font-[700] sm1:text-[30px]">Свяжитесь</p>
                <p className="text-[100px] font-[700] sm1:text-[30px]">с нами</p>
            </div>
            <div className="lg:m-auto">
     <p className="w-[650px] text-[30px] sm:w-auto sm1:w-auto sm1:text-[13px]">
     Мы будем рады услышать от вас и начать что-то особенное вместе.</p>
            </div>
        </div>
    </div>


<div className='flex flex-wrap items-center justify-between max-w-[1300px] m-auto mt-[50px]'>
    <div className='lg:m-auto'>
<h1 className='text-[40px] font-[500]'>Свяжитесь с нами</h1>
<p className='text-[25px] my-[10px]'>+992 558 700 900</p>
<p className='text-[25px] my-[10px]'>info@softclub.tj</p>
<p className='text-[25px] my-[10px]'>Улица Асадулло Гуломов 54/3</p>
    </div>
    <div className='lg:m-auto'>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <TextField id="standard-basic" label="Standard" variant="standard"    sx={{ m: 1, width: '105ch' }}  className='w-[500px]'/>
      <TextField id="standard-basic" label="Standard" variant="standard"    sx={{ m: 1, width: '105ch' }}  className='w-[500px]'/> <br />
      <TextField id="standard-basic" label="Standard" variant="standard"    sx={{ m: 1, width: '105ch' }}  className='w-[500px]'/> 
      <TextField id="standard-basic" label="Standard" variant="standard"    sx={{ m: 1, width: '105ch' }}  className='w-[500px]'/> <br />
      <TextField id="standard-basic" label="Standard" variant="standard"    sx={{ m: 1, width: '105ch' }}  className='w-[500px]'/> 
    
    </Box>
    </div>
    

</div>
    <div className='mb-[5px] w-[200px] h-[200px] border-[1px] xl:hidden rounded-[50%] border-[black] m-auto   mt-[50px] flex items-center justify-center'><h1>Давай Поговорим</h1></div>

    </div>
}
export {Conatcts}