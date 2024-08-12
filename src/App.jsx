import { useEffect, useState } from 'react';
import * as petService from './services/petService.js';
import PetList from "./components/PetList.jsx"


const App = () => {
  const [petList, setPetList] = useState([]);
  
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
  }, []);
  
  return(
    <>
      <PetList petList={petList} />
    </>
  )
};

export default App;