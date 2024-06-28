const Form = ()=>{
    return (
        <div className="form">
            <form>
                <div className="card-name">
                    <label htmlFor="username">Card Holder Name</label>
                    <input type="text" name="username" id="name" placeholder="eg John Doe"/>
                </div> 
                <div className="card-number">
                    <label htmlFor="number">Card Number</label>
                    <input type="number" name="number" id="number" placeholder="eg 1234 5678 9000 2736"/>
                </div>
                <div className="card-date-cvc">
                    <div className="expiry">
                        <label htmlFor="date">Expiry Date (MM/YY)</label><br />
                        <input type="number" id="month" name="date" min="01" max="12" placeholder="MM"/>
                        <input type="number" id="year" name="date" min="00" max="99" placeholder="YY" />
                    </div>
                    <div>
                        <label htmlFor="cvc">cvc</label><br />
                        <input type="number" name="cvc" id="cvc" placeholder="eg 123"/>
                    </div>
                </div>  
                <div className="sumbit-button">
                    <input type="submit" value="Confirm" />
                </div>
            </form>       
        </div>
    )
}

export default Form;