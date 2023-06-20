import './image-home-wrapper.component.css';

const ImageHomeWrapper = () => {
    const imageUrl = 'https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png';
    
    return (
        <div className="image-home-container">
            <div style={{backgroundImage:`url(${imageUrl})`}} className="background-image-container"/>
            <div className="image-text-container">
                <p className='text-content'><span className='logo-title'>sg</span> online food app</p>
                <p className='sub-text-content'>Find the best restaurants, cafés and bars in India</p>
            </div>
        </div>
    )
}

export default ImageHomeWrapper;