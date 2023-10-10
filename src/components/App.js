import {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listingsData, setListings] = useState([])
  const removeListing = doomedID => {
    const newListings = listingsData.filter(lObj => lObj.id !== doomedID)
    setListings(newListings)
  }
  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
    .then(r => r.json())
    .then(setListings)
  },[])

  const [search,setSearch] = useState("")
  const updateSearch = newValue => setSearch(newValue.toLowerCase())
  const filteredListings = listingsData.filter(lObj =>{
    if(lObj.description.includes(search.toLowerCase())) {
      return true
    } else {
      return false
    }
  })
  console.log(listingsData)
  return (
    <div className="app">
      <Header updateSearch={updateSearch}/>
      <ListingsContainer listings={filteredListings} removeListing={removeListing}/>
    </div>
  );
}

export default App;
