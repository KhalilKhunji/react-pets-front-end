const PetList = ({petList}) => {
    
    const pets = petList.map((pet) => (
        <li>{pet.name}</li>
    ));
    
    return(
        <div>
            <h2>Pet List</h2>
            {!petList.length ? <h2>No Pets Yet!</h2> : <ul>{pets}</ul>}
        </div>
    );
};

export default PetList;