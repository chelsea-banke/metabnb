import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/home/home'
import Places from './components/places/places'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className='flex flex-row flex-wrap justify-between w-screen p-5 px-9 fixed top-0 max-[750px]:p-1 max-[750px]:pt-3'>
        <div className='max-[550px]:w-1/3'><img src='icons/logo.png' className='max-[550px]:mt-4'/></div>
        <div className='flex flex-row flex-wrap justify-evenly w-1/2 mt-4 drag' id='menu' onClick={(e) => {
          if (e.target.classList.contains('link')){
            let elm = document.getElementById('menu');
            if (elm.classList.contains('drop')){
                elm.classList.remove('drop')
                elm.classList.add('drag')
            }
            else {
              elm.classList.remove('drag')
              elm.classList.add('drop')
            }
          }
        }}>
          <Link to='/'><div className='link'>Home</div></Link>
          <Link to='/places'><div className='link'>Place to stay</div></Link>
          <Link to='/'><div className='link'>NFT's</div></Link>
          <Link to='/'><div className='link com'>Communities</div></Link>
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
          }}><img src='icons/close.svg'/></button>
        </div>
        <div className='flex'>
          <button className='bg-pink-700 text-white p-3 rounded-lg font-semibold max-[550px]:p-2' id='wallet-btn' onClick={() => {
            document.getElementById('modal-overlay').style.display = 'block'
            document.body.style.overflowY = 'hidden'
            }}>Connnect Wallet</button>
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
      <section>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/places' element={<Places/>}></Route>
        </Routes>
      </section>
      <footer className='flex flex-row flex-wrap justify-between w-screen bg-gray-800 p-10 text-white'>
        <div className='mt-5'>
          <div>
            <img src='icons/logo-foot.svg'/>
          </div>
          <div className='flex flex-row justify-between w-1/2 mt-8'>
            <img src='icons/facebook.svg'/>
            <img src='icons/instagram.svg'/>
            <img src='icons/twitter.svg'/>
          </div>
          <p className='mt-8'>©2022 Metabnb</p>
        </div>
        <div className='mt-5'>
          <div className='font-semibold'>Community</div>
          <div>NFT</div>
          <div>Tokens</div>
          <div>Landlords</div>
          <div>Discord</div>
        </div>
        <div className='mt-5'>
          <div className='font-semibold'>Places</div>
          <div>Castle</div>
          <div>Farms</div>
          <div>Beach</div>
          <div>Learn more</div>
        </div>
        <div className='mt-5'>
          <div className='font-semibold'>About us</div>
          <div>Road map</div>
          <div>Creators</div>
          <div>Career</div>
          <div>Contact us</div>
        </div>
      </footer>
      <div id='modal-overlay' className='modal-overlay fixed w-screen h-screen top-0 hidden'>
          <div className='modal bg-white p-10 pb-10 rounded-lg'>
            <div className='modal-head flex flex-row  justify-between  border-b-2'>
              <div className='modal-title text-xl font-semibold'>Connect Wallet</div>
              <button className='modal-close' onClick={() => {
                document.getElementById('modal-overlay').style.display = 'none'
                document.body.style.overflowY = 'scroll'
                }}><img src='icons/cancel.svg'/></button>
            </div>
            <div className='modal-body mt-5'>
              <p>Choose your prefered wallet</p>
              <button className='flex flex-row justify-between w-full p-2 mt-5 border-2 border-gray-200 rounded-lg'>
                <div className='flex flexrow text-xl font-semibold'> 
                  <img src='icons/metamask2.svg'/>
                  <div className='mt-2 ml-5'>Metamask</div>
                </div>
                <img className='mt-3' src='icons/go.svg'/>
              </button>
              <br/>
              <button className='flex flex-row justify-between w-full p-2 border-2 border-gray-200 rounded-lg'>
                <div className='flex flexrow text-xl font-semibold'> 
                  <img src='icons/walletconnect.svg'/>
                  <div className='mt-2 ml-5'>WalletConnect</div>
                </div>
                <img className='mt-3' src='icons/go.svg'/>
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}
function toogle(){

}
export default App
