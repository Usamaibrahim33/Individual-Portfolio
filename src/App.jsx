
import './App.css'
import { useState, useEffect } from 'react'
import { FaReact, FaFacebook } from 'react-icons/fa'
import ImageCard from './components/Imagecard'
import ImageSearch from './components/Imagesearch'


function App() {
  const [images, setImages] = useState([])
  const [term, setTerm ] = useState('')
  const [isLoading, setIsLoading] = useState(true)


  const fetchImage = () => {
    fetch(`https://pixabay.com/api/?key=41011940-4ed721661d35bd50a77fee57e&q=${term}&image_type=photo&pretty=true`)
       .then((response) => response.json()) 
       .then((data) =>  {
        setImages(data.hits)
        setIsLoading(false)
        console.log('this is the data', data)
      })
      .catch((error) => console.log('this is the error', error))
  }

  useEffect(() => {
    fetchImage()
       
  }, [term])


  return (
    <>
     <div className='container mx-auto  '>

      <ImageSearch fetchImage={fetchImage} term={term} setTerm={setTerm} />

      {!isLoading && images.length === 0 && <h1 className='text-6xl text-center mx-auto mt-32'> No Images Found</h1>}
      { isLoading ? <h1 className='text-6xl text-center mx-auto mt-32'> is Loading..... </h1>
      : <div className='grid grid-cols-1   sm:grid-cols-2  md:grid-cols-3 '>
        {images.map((image) => (
           <ImageCard  key={image.id} image={image}/> 
        ))}

      </div>}
     </div>
     
    </>
  )
}

export default App
