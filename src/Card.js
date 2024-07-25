import Seventh from "./Seventh";

function Card(props){
    const name ="ReactJs";
    const college="Some quick example text to build on the card title and make up the bulk of the card's content.";
    return(
        <div className="card" style={{width:'300px'}}>
            <Seventh program={name} col={college} />
        </div>
    );
}

export default Card;
