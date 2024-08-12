import { useEffect, useState, useNavigate } from 'react';
import * as petService from './services/petService.js';
import PetList from "./components/PetList.jsx"
import PetDetail from './components/PetDetail.jsx'
import PetForm from "./components/PetForm.jsx"


const App = () => {
  const [petList, setPetList] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormView = (pet) => {
    if (!pet.name) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  const updateSelected = (pet) => {
    setSelected(pet);
  };

  const handleAddPet = async (formData) => {
    try {
      const newPet = await petService.create(formData);
      if (newPet.error) {
        throw new Error(newPet.error);
      };
      setPetList([...petList, newPet]);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    };
  };

  const handleUpdatePet = async (formData, petId) => {
    try {
      const updatedPet = await petService.update(formData, petId)
      if (updatedPet.error) {
        throw new Error(updatedPet.error);
      };
      const updatedPetList = petList.map((pet) => (
        pet._id !== updatedPet._id ? pet : updatedPet
      ));
      setPetList(updatedPetList);
      setSelected(updatedPet);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    };
  };

  const handleRemovePet = async (petId) => {
    try {
      const deletedPet = await petService.deleter(petId);
      if (deletedPet.error) {
        throw new Error(deletedPet.error);
      };
      setPetList(petList.filter((pet) => pet._id !== deletedPet._id));
      setSelected(null);
      setIsFormOpen(false);
    } catch (error) {
      console.log(error);
    };
  };
  
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await petService.index();
        setPetList(data);
      } catch (error) {
        console.log(error);
      };
    };
    fetchPets();
  }, [petList]);
  
  return(
    <>
      <PetList petList={petList} updateSelected={updateSelected} handleFormView={handleFormView} isFormOpen={isFormOpen} />
      {isFormOpen ? <PetForm selected={selected} handleAddPet={handleAddPet} handleUpdatePet={handleUpdatePet} /> : <PetDetail selected={selected} handleFormView={handleFormView} handleRemovePet={handleRemovePet} />}
    </>
  )
};

export default App;