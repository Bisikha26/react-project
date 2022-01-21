// import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initListings, addListing, deleteListing } from './redux/listingsReducer';

import {FaSearch, FaTimes} from 'react-icons/fa';
// import iziToast from 'izitoast';

// useSelector -> give access to redux store
// useDispatch -> let dispatch / fire off redux action functions
// useEffect -> fire off at each render

const SubmitListing = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addListing(name, age))

    setName("");
    setAge("");
  };

 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={({target}) => setName(target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={({target}) => setAge(target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  
    const dispatch = useDispatch();
    //useDispatch returns reference to dispatch function from Redux
    const listings = useSelector((state) => state.listings);

    const removeListing = (listingName) => {
      dispatch(deleteListing(listingName));
    }
  

    useEffect(() => {
      dispatch(initListings());
    }, [dispatch]);

    return(
      <div className="App">
        <div className="title">Who's here ?</div>
        <SubmitListing />
        {listings.map((listing) => (
            <p className="list">
              <div className="list-wrapper">{listing.name}, {listing.age}
              <span className="times" onClick={() => removeListing(listing.name)}><FaTimes /></span></div>
            </p>
        ))}
      </div>
    );
}

export default App;
