import PropTypes from 'prop-types';
import CardBack from "./CardBack";
import CardFront from "./CardFront";

const Card = ( {data} )=>{
    return (
        <div className="card">
            <CardFront data={data}  />       
            <CardBack data={data} />       
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        number: PropTypes.string,
        month: PropTypes.string,
        year: PropTypes.string,
        cvc: PropTypes.string
    }).isRequired
};

export default Card;