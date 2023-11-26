import Image from './Image';
import LoadingScreen from './LoadingScreen';
import { useDispatch, useSelector } from 'react-redux';
import { moreImages, setLoading } from '../redux/Slices/ImagesSlice';

const Images = () => {

    const {showImages, showPage, loading, value} = useSelector((state) => state.images);
    const dispatch = useDispatch();

    const getMoreImages = async() => {

        try{

            dispatch(setLoading(true));

            const url = `https://api.unsplash.com/search/photos?page=${showPage}&query=${value}&client_id=qhS2NcX4tar0CA7DHWeD7Slh_f1NfRRTAgtrnzkCx5U`;

            const res = await fetch(url);
            const data = await res.json();
        
            dispatch(moreImages(data.results));
            dispatch(setLoading(false));

        }
        catch(err){
            alert(err);
        }

    }

  return (
    <div>

        {
            value && <h1 className=' text-center mt-6 underline text-2xl font-semibold'>
                Result For {value}
            </h1>
        }

        <div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto">

            {
                loading ? 
                <LoadingScreen item={showPage*10}></LoadingScreen>
                :
                showImages.map( (imag, ind) => (
                <Image key={ind} data={imag}></Image>
                ))
            }
        </div>

        {
            showImages.length > 0 ?
            <button className=' bg-blue-600 px-6 py-2.5 text-white rounded focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 mb-10 mx-auto block' onClick={getMoreImages}>
                Load More
            </button>
            :
            <div className=" text-center text-xl">
                No Images found, Plase Search a Valid Name
            </div>
        }
      
    </div>
  )
}

export default Images
