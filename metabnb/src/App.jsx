import { useState } from 'react'
import Home from './components/home/home'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className='flex flex-row flex-wrap justify-between w-screen p-5 px-9'>
        <div><img src='icons/logo.png'/></div>
        <div className='flex flex-row flex-wrap justify-evenly w-1/2 mt-2'>
          <div>Home</div>
          <div>Place to stay</div>
          <div>NFT's</div>
          <div>Communities</div>
        </div>
        <button className='bg-pink-700 text-white p-3 rounded-lg'>Connnect Wallet</button>
      </header>
      <Home/>
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

export default App
