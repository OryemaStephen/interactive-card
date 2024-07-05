import PropTypes from 'prop-types';

const formatCardNumber = (number) => {
    return number.replace(/(\d{4})(?=\d)/g, '$1 ');
};


const CardFront = ({data})=>{
    return (
        <div className="card-front">
            <div className="circle">
                <div></div>
                <div></div>
            </div>  
            <div className="card-details">
                <div>
                {data.number ? formatCardNumber(data.number) : formatCardNumber('0000000000000000')}
                </div>
                <div>
                    <span className="name">
                    {data.username?data.username:'John Doe'}
                    </span>
                    <div className="date">
                        <span>
                        {data.month ? data.month : 'MM'}/{data.year ? data.year : 'YY'}
                        </span>
                    </div>
                </div>
            </div>     
        </div>
    )
}

CardFront.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        number: PropTypes.string,
        month: PropTypes.string,
        year: PropTypes.string,
        cvc: PropTypes.string
    }).isRequired
};

export default CardFront;