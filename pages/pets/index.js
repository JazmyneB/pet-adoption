//revvedpets.com/pets
import Navigation from "../../components/Navigation";
import { Fragment } from "react";
import PetContent from "../../components/PetContent";
import "@mui/material";

function petPage(){
  
    return (
      <Fragment>
        <Navigation/>
        <PetContent/>
      </Fragment>
    )

  
  }
  
  export default petPage;