const BASE_URL=`${import.meta.env.VITE_BACK_END_SERVER_URL}`;

const index = async () => {
    try {
        const res = await fetch('http://localhost:3000/pets');
        return res.json();
    } catch (error) {
        console.log(error);
    };
};

const create = async (formData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(formData)}
        );
        return res.json();
    } catch (error) {
        console.log(error);
    };
};

const update = async (formData, petId) => {
    try {
        const res = await fetch(`${BASE_URL}${petId}`, {
            method: 'Put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        return res.json();
    } catch (error) {
        console.log(error);
    };
};

const deleter = async (petId) => {
    try{
        const deletedPet = await fetch(`${BASE_URL}${petId}`, {
            method: 'DELETE'
        });
        return deletedPet;
    } catch (error) {
        console.log(error);
    };
};

export { index, create, update, deleter };