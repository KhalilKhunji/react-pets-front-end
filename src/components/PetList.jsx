const PetList = ({petList, updateSelected, handleFormView, isFormOpen}) => {
    
    const pets = petList.map((pet) => (
        <a key={pet._id} onClick={() => updateSelected(pet)}><li>{pet.name}</li></a>
    ));
    
    return(
        <div className="sidebar-container">
            <h2>Pet List</h2>
            <div className="list-container">
                {!petList.length ? <h2>No Pets Yet!</h2> : <ul>{pets}</ul>}
            </div>
            <button onClick={handleFormView}>
                {isFormOpen ? 'Close Form' : 'Add New Pet'}
            </button>
        </div>
    );
};

export default PetList;