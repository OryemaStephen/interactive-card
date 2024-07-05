import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        username: '',
        number: '',
        month: '',
        year: '',
        cvc: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //If card number is not 12 digits
        if (formData.number.length !== 16) {
            alert('Card number must be exactly 16 digits');
            return;
        }
        onSubmit(formData);
        setFormData({
            username: '',
            number: '',
            month: '',
            year: '',
            cvc: ''
        })
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="card-name">
                    <label htmlFor="username">Card Holder Name</label>
                    <input
                        type="text"
                        name="username"
                        id="name"
                        placeholder="eg John Doe"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="card-number">
                    <label htmlFor="number">Card Number</label>
                    <input
                        type="number"
                        name="number"
                        id="number"
                        placeholder="eg 1234 5678 9000 2736"
                        value={formData.number}
                        onChange={handleChange}
                        maxLength="12"
                    />
                </div>
                <div className="card-date-cvc">
                    <div className="expiry">
                        <label htmlFor="date">Expiry Date (MM/YY)</label><br />
                        <input
                            type="number"
                            id="month"
                            name="month"
                            min="01"
                            max="12"
                            placeholder="MM"
                            value={formData.month}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            id="year"
                            name="year"
                            min="00"
                            max="99"
                            placeholder="YY"
                            value={formData.year}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="cvc">cvc</label><br />
                        <input
                            type="number"
                            name="cvc"
                            id="cvc"
                            placeholder="eg 123"
                            value={formData.cvc}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="submit-button">
                    <input type="submit" value="Confirm" />
                </div>
            </form>
        </div>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Form;