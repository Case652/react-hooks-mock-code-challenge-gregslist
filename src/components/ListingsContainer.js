import React from "react";
import ListingCard from "./ListingCard";


function ListingsContainer({listings,removeListing}) {

  const listingComponents = listings.map((listObj)=>{
    return (
    <ListingCard listing={listObj}key={listObj.id} removeListing={removeListing}/>
  )})
  
  return (
    <main>
      <ul className="cards">
        {listingComponents}
      </ul>
    </main>
  );
}

export default ListingsContainer;
