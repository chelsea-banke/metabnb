import './nft.css'
function NFT(props){
    return(
        <div className="p-2 border border-gray-600 w-fit mb-5 NFT">
            <img src={props.url} className="nft"/>
            <div className='flex flex-row justify-between p-1'>
                <div>Deseart Kind</div>
                <div className='font-semibold'>1MTB per night</div>
            </div>
            <div className='flex flex-row justify-between p-1'>
                <div>2345km away</div>
                <div>available for 2weeks stay</div>
            </div>
            <img src='icons/rating.svg' className='p-1'/>
        </div>
    )
}

export default NFT