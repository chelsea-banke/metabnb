import NFT from "../nft/nft"
import './places.css'

function Places(){
    return(
        <div className="Places">
            <div className="flex flex-row justify-evenly w-screen pl-10 pr-20 mt-10 max-[830px]:text-sm max-[750px]:block max-[750px]:p-1">
                <div className="flex flex-row flex-wrap justify-evenly w-11/12 max-[750px]:hidden">
                    <div>Resturant</div>
                    <div>Cottage</div>
                    <div>Castle</div>
                    <div>Fantast city</div>
                    <div>Beach</div>
                    <div>Carbins</div>
                    <div>Off-Grid</div>
                    <div>Farm</div>
                </div>
                <div className="flex flex-row justify-between border border-gray-400 p-2 rounded-md max-[750px]:w-full settings-btn">
                    <p>Location</p>
                    <img className="ml-5" src="icons/settings.svg"/>
                </div>
            </div>
            <div className='flex flex-row flex-wrap justify-evenly p-10 max-[407px]:p-0 max-[407px]:pt-10'>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => <NFT url={'nfts/nft'+i+'.png'}/>)}
            </div>
        </div>
    )
}

export default Places