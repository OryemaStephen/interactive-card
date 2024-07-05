import PropTypes from 'prop-types'
const CardBack = ({data})=>{
    return (
        <div className="card-back">
            <span></span>        
            <span></span>        
            <span></span>        
            <span>{data.cvc?data.cvc:'000'}</span>        
        </div>
    )
}

CardBack.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        number: PropTypes.string,
        month: PropTypes.string,
        year: PropTypes.string,
        cvc: PropTypes.string
    }).isRequired
};

export default CardBack;