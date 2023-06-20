import { useLocation } from 'react-router';
import './restaurant-description.component.css';

const RestaurantDescription = () => {
    const location = useLocation();

    console.log('location :: ', location);

    return (
        <div>Description</div>
    )
}

export default RestaurantDescription