import { useNavigate } from 'react-router';
import './restaurant-card.component.css';
import { useContext } from 'react';
import { RestaurantHolderContext } from '../../contexts/restaurant-holder.context';

const RestaurantCard = ({restaurant}) => {
    const {name,imageUrl,rating,time,quantity,offers} = restaurant;
    const navigate = useNavigate();
    const { setSelectedRestaurant } = useContext(RestaurantHolderContext);

    const navigateToRoute = () => {
        setSelectedRestaurant(restaurant);
        navigate(`/${restaurant.route}`);
    }

    return (
        <div className='restaurant-card-container' onClick={navigateToRoute}>
           <div className='restaurant-card-image-container'>
                {/* <div style={{backgroundImage:`url(${imageUrl})`}} className='image-wrapper' /> */}
                <img src={imageUrl} className='image-wrapper'/>
           </div>
           <p className='restaurant-card-title'>{name}</p>
           <div className='restaurant-card-desc'>
                { rating ?  <span className='res-rating'>{rating}</span> : <span className='res-rating'>-</span>}
                <span>{time}</span>
                <span>{quantity}</span>
           </div>
           <div className='restaurant-card-offers'>{offers}</div>
        </div>
    )
}

export default RestaurantCard;