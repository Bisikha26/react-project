// import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initListings, addListing } from './redux/listingsReducer';

// useSelector -> give access to redux store
// useDispatch -> let dispatch / fire off redux action functions
// useEffect -> fire off at each render

const SubmitListing = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addListing(name, age));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={({target}) => setName(target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        onChange={({target}) => setAge(target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  
    const dispatch = useDispatch();
    //useDispatch returns reference to dispatch function from Redux
    const listings = useSelector((state) => state.listings);

    useEffect(() => {
      dispatch(initListings());
    }, [dispatch]);

    return(
      <div className="App">
        {listings.map((listing) => (
          <p>{listing.name}, {listing.age}</p>
        ))}
        <SubmitListing />
      </div>
    );
}

export default App;
