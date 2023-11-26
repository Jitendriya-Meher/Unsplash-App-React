import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setImages, setLoading, setValue } from '../redux/Slices/ImagesSlice';

const SearchField = () => {

    console.log("key",process.env);

    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = async() => {

        try{

            dispatch(setLoading(true));

            const url = `https://api.unsplash.com/search/photos?page=4&query=${searchValue}&client_id=qhS2NcX4tar0CA7DHWeD7Slh_f1NfRRTAgtrnzkCx5U`;

            const res = await fetch(url);
            const data = await res.json();

            dispatch(setImages(data.results));
            dispatch(setLoading(false));
            dispatch(setValue(searchValue));

        }
        catch(err){
            alert(err);
        }
    }

  return (
    <div className=' flex'>

      <input type="search" 
      className=' bg-gray-50 border border-gray-300 text-sm w-full indent-2 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl p-2.5'
      placeholder='Search Anything...'
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
       />
      <button
      className=' bg-blue-600 px-6 py-2.5 text-white rounded-br rounded-tr focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400'
      disabled={!searchValue}
      onClick={handleSubmit}
      >
        Search
      </button>
    </div>
  )
}

export default SearchField
