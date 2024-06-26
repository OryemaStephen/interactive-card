import CardBack from "./CardBack";
import CardFront from "./CardFront";

const Card = ()=>{
    return (
        <div className="card">
            <CardFront />       
            <CardBack />       
        </div>
    )
}

export default Card;