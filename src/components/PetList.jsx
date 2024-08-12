const PetList = ({petList, updateSelected}) => {
    
    const pets = petList.map((pet) => (
        <a key={pet._id} onClick={() => updateSelected(pet)}><li>{pet.name}</li></a>
    ));
    
    return(
        <div>
            <h2>Pet List</h2>
            {!petList.length ? <h2>No Pets Yet!</h2> : <ul>{pets}</ul>}
        </div>
    );
};

export default PetList;