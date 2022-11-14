import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/home/home'
import Places from './components/places/places'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className='flex flex-row flex-wrap justify-between w-screen p-5 px-9 max-[750px]:p-1 max-[750px]:pt-5'>
        <div className='max-[550px]:w-1/3'><img src='icons/logo.png' className='max-[550px]:mt-4'/></div>
        <div className='flex flex-row flex-wrap justify-evenly w-1/2 mt-2 drag' id='menu'>
          <div><Link to='/'>Home</Link></div>
          <div><Link to='/places'>Place to stay</Link></div>
          <div>NFT's</div>
          <div>Communities</div>
          <button id='close' onClick={()=>{
            let elm = document.getElementById('menu');
            if (elm.classList.contains('drop')){
                elm.classList.remove('drop')
                elm.classList.add('drag')
            }
            else {
              elm.classList.remove('drag')
              elm.classList.add('drop')
            }  
          }}><img src='icons/close.png'/></button>
        </div>
        <div className='flex'>
          <button className='bg-pink-700 text-white p-3 rounded-lg font-semibold max-[550px]:p-2' id='wallet-btn'>Connnect Wallet</button>
          <button id='menu-btn' onClick={() => {
              let elm = document.getElementById('menu');
              if (elm.classList.contains('drop')){
                  elm.classList.remove('drop')
                  elm.classList.add('drag')
              }
              else {
                elm.classList.remove('drag')
                elm.classList.add('drop')
              }
          }}><img src='icons/menu.png'/></button>
        </div>
      </header>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/places' element={<Places/>}></Route>
      </Routes>
      <footer className='flex flex-row flex-wrap justify-between w-screen bg-gray-800 p-10 text-white'>
        <div>
          <div>
            <img src='icons/logo-foot.svg'/>
          </div>
          <div className='flex flex-row justify-between w-1/2 mt-8'>
            <img src='icons/facebook.svg'/>
            <img src='icons/instagram.svg'/>
            <img src='icons/twitter.svg'/>
          </div>
          <p className='mt-8'>2022 Metabnb</p>
        </div>
        <div>
          <div className='font-semibold'>Community</div>
          <div>NFT</div>
          <div>Tokens</div>
          <div>Landlords</div>
          <div>Discord</div>
        </div>
        <div>
          <div className='font-semibold'>Places</div>
          <div>Castle</div>
          <div>Farms</div>
          <div>Beach</div>
          <div>Learn more</div>
        </div>
        <div>
          <div className='font-semibold'>About us</div>
          <div>Road map</div>
          <div>Creators</div>
          <div>Career</div>
          <div>Contact us</div>
        </div>
      </footer>
    </div>
  )
}
function toogle(){

}
export default App
