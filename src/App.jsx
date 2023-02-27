import './App.css';


// Router Dom 
import { Link,Route ,Routes } from 'react-router-dom';
import { Uslugi } from './pages/Uslugi/Uslugi';
import { Case } from './pages/Case/Case';
import { Blog } from './pages/Blog/Blog';
import { Comanda } from './pages/Comanda/Comanda';
import { Conatcts } from './pages/Conatct/Contacts';
import { Con1 } from './pages/Cont1/Con1';
import { Main } from './pages/Main/Main';
import { About } from './pages/About/About';
// Images
import logoSoftClub from './Images/logo.svg';
import seacrhIcon from './Images/search.png';
import menuIcon from './Images/Menu.png';
function App() {
  return (
    <div className="App">


  <header className='z-[100] '>
  <nav>
  <div className='flex items-center justify-center py-[10px] border-b-[#eaeaea] border-b-[1px] bg-white'>
  <div className='flex items-center justify-between max-w-[1870px]  m-auto h-[7%]  w-[100%] 2xl:px-[20px] md:relative md:w-[100%] '>
  <div><img src={logoSoftClub} alt="No Internet" /></div>
  <div className='flex items-center justify-between w-[800px] xl:hidden'>
  <Link to="/Main">Главний</Link>
  <Link to="/">УСЛУГИ</Link>
  <Link to="/Case">КЕЙСЫ</Link>
  <Link to="/Comanda">КОМАНДА</Link>
  <Link to="/Blog">БЛОГ</Link>
  <Link to="/About">О НАС</Link>
  <Link to="/Conatcts">КОНТАКТЫ</Link>
  </div>
  <div className='flex items-center justify-between w-[60px]'>
  <img src={seacrhIcon} alt="" />
  <Link to="/Con1"><img src={menuIcon} alt="" /></Link>
  </div>
  </div>
  </div>
  </nav>
  </header>


<Routes>
<Route path='/'  element={<Uslugi />}/>
<Route path='/Case'  element={<Case />}/>
<Route path='/Blog'  element={<Blog />}/>
<Route path='/Comanda'  element={<Comanda />}/>
<Route path='/Conatcts'  element={<Conatcts />}/>
<Route path='/Con1'  element={<Con1 />}/>
<Route path='/Main'  element={<Main />}/>
<Route path='/About'  element={<About />}/>
</Routes>

<footer className='pt-[0px] mt-[0px] bg-black '>
<div className="footer">
<div className='flex  2xl:flex-wrap items-center max-w-[1900px] m-auto  text-white h-[300px] 2xl:h-auto border-[1px] border-b-[#4b4b4b] dark:border-[#7b7b7b]'>
<div className='w-[40%] pl-[100px] 2xl:w-[100%] m-auto 2xl:flex 2xl:items-center 2xl:justify-center 2xl:pt-[50px]'>
  <div className='2xl:text-center'>
  <img src={logoSoftClub} alt="" className='mb-[40px] sm3:relative right-[70px]' />
  <p className='sm3:hidden'>Ваш цифровой партнер.</p>
  </div>
</div>
<div className='w-[12%] h-[100%] 2xl:w-[100%] 2xl:h-[400px] mt-[50px] relative bottom-[25px]'>
  <div className='border-[1px] border-[#4b4b4b] h-[33.33%] flex items-center justify-center hover:bg-white hover:text-black'><a href="">INSTAGRAM</a></div>
  <div className='border-[1px] border-[#4b4b4b] h-[33.33%] flex items-center justify-center hover:bg-white hover:text-black'><a href="">YOUTUBE</a></div>
  <div className='border-[1px] border-[#4b4b4b] h-[33.33%] flex items-center justify-center hover:bg-white hover:text-black'><a href="">GITHUB</a></div>
</div>
<div className='w-[60%] flex items-center justify-center pr-[50px] 2xl:w-[100%] 2xl:h-[200px] 2xl:hidden'>
<h1>Lets Talk dd</h1>
</div>
  </div>
  <div className='flex items-center max-w-[1900px] m-auto  justify-between bg-black border-[1px] border-[rgba(0,0,0,0.1)] py-[20px] px-[50px] w-[100%]'>
<div className='lg:hidden' >
  <h3 className='text-white font-[500] text-[20px]'>© 2023 | Alrights reserved by <br /> SoftClub</h3>
</div>
<div className="w-[50%] lg:w-[100%]">
<div className='flex items-center justify-between w-[100%] lg:w-[100%]  lg:flex-wrap'>
  <h3 className='text-white font-[100] text-[17px] sm1:m-[5px]'>О НАС</h3>

  <h3 className='text-white font-[100] text-[17px] sm1:m-[5px]'>КАРЬЕРА</h3>
  <h3 className='text-white font-[100] text-[17px] sm1:m-[5px]'>КОНТАКТЫ</h3>
  <h3 className='text-white font-[100] text-[17px] sm1:m-[5px]'>ВОПРОСЫ-ОТВЕТЫ</h3>
</div>
</div>
  </div>
</div>
</footer>


    </div>
  );
}

export default App;
