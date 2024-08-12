const PetDetail = ({selected, handleFormView, handleRemovePet}) => {
    if(!selected) {
        return(
            <div className="details-container">
                <h2>No Details</h2>
            </div>
        );
    } else {
        return(
            <div className="details-container">
                <h2>Pet Details</h2>
                <h3>{selected.name}</h3>
                <ul key={selected._id}>
                    <li>Breed: {selected.breed}</li>
                    <li>Age: {selected.age} year{selected.age > 1 ? 's' : ''} old</li>
                </ul>
                <div className="button-container">
                    <button onClick={() => {handleFormView(selected)}}>Edit</button>
                    <button onClick={() => {handleRemovePet(selected._id)}}>Delete</button>
                </div>
            </div>
        );
    };
};

export default PetDetail;