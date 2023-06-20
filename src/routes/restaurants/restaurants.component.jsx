import RESTAURANTS from '../../assets/restaurants.json';
import RestaurantCard from '../../components/restaurant-card/restaurant-card.component';
import './restaurants.component.css';

const Restaurants = () => {
    const restaurants = RESTAURANTS.restuarants;
    return (
        <div className='restaurants-container'>
            {
                Object.keys(restaurants).map((restaurant,index)=>{
                    return <RestaurantCard key={index} restaurant = {restaurants[restaurant]}/>
                })
            }
        </div>
    )
}

export default Restaurants;