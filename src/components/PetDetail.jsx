const PetDetail = ({selected, handleFormView}) => {
    if(!selected) {
        return(
            <div>
                <h2>No Details</h2>
            </div>
        );
    } else {
        return(
            <div>
                <h2>Pet Details</h2>
                <h3>{selected.name}</h3>
                <ul key={selected._id}>
                    <li>Breed: {selected.breed}</li>
                    <li>Age: {selected.age} year{selected.age > 1 ? 's' : ''} old</li>
                </ul>
                <button onClick={() => {handleFormView(selected)}}>Edit</button>
            </div>
        );
    };
};

export default PetDetail;