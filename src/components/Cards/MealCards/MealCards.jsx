import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MealCards = ({ meal }) => {
    return (
        <div>
            <Link to={`/meal-details/${meal?._id}`}>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={meal?.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{meal.title}</h2>
                        <p>Rating: {meal?.rating}</p>
                        <p>Price: {meal?.price}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

MealCards.propTypes = {
    meal: PropTypes.object
}

export default MealCards