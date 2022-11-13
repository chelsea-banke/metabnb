import './home.css'
import NFT from '../nft/nft'

function Home (){
    return(
        <div className="Home">
            <div className="flex flex-row justify-between max-[1000px]:block">
                <div className='p-10 mt-10'>
                    <h3 className='text-5xl font-semibold'>Rent a <span className="text-pink-800">Place</span> away from <span className="text-pink-800">Home</span> in the <span className="text-pink-800">Metaverse</span></h3>
                    <p className='mt-5 text-2xl'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <div className='mt-10'>
                        <input type='text' className='w-3/4 rounded-l-lg pl-3'/>
                        <button className='bg-pink-700 text-white w-1/4 rounded-r-lg'>Search</button>
                    </div>
                </div>
                <div className="flex flex-row sample p-10">
                    <div className='mt-16'>
                        <img src="assets/image1.png"/>
                        <img src="assets/image2.png"/>
                    </div>
                    <div>
                        <img src="assets/image3.png"/>
                        <img src="assets/image4.png"/>
                    </div>
                </div>
            </div><br/>
            <div className='w-screen flex flex-row flex-wrap justify-evenly bg-pink-700 associates pt-5 pb-5'>
                <img src='icons/mbtoken.svg'/>
                <img src='icons/metamask.svg'/>
                <img src='icons/opensea.svg'/> 
            </div>
            <div className='mt-10'>
                <h2 className='text-center text-3xl font-semibold'>Inspiration for your new adventures</h2>
                <div className='flex flex-row flex-wrap justify-evenly p-10 max-[407px]:p-0 max-[407px]:pt-10'>
                    {[0, 0, 0, 0, 0, 0, 0, 0].map(i => <NFT/>)}
                </div>
            </div>
            <div className='flex flex-row bg-pink-700 text-white p-20 pt-10 max-[900px]:block max-[413px]:p-10' >
                <div className='mt-20'>
                    <h2 className='font-semibold text-4xl'>Metabnb NFT's</h2>
                    <p className='text-xl mt-10'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button className='bg-white text-pink-700 p-4 pb-10 mt-10 rounded-lg'>Learn more</button>
                </div>
                <img src='assets/bnb.png' className='w-1/2 max-[900px]:w-screen' />
            </div>
        </div>
    )
} 
export default Home