/* eslint-disable react/prop-types */
import { useState } from "react"




function ImageSearch({ term, setTerm}) {
    const [text, setText] = useState({
        userInput: ''
    });
    const [showDelete, setShowDelete] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault()
        if(showDelete) {
            setText({ userInput: '' });
            setShowDelete(false)
        } else {
            setTerm(text.userInput)
            setShowDelete(!showDelete)
        };
        
        
    };


    const handleChange = (event) => {
        const { name, value } = event.target
        setText({...text, [name]: value })
    };

    
    const handleBlur = () => {
        if(text.userInput && !showDelete) {
            setShowDelete(true);
        }
    };


    return(

        <div className="mx-w-sm rounded overflow-hidden my-10 max-auto border flex justify-center" >
            <form  className="w-full max-w-sm" >
                <div className="flex items-center border-b-2 border-teal-500 py-2  ">

                    <input className="appearance-none  bg-transparent border-none w-full
                     text-gray-700 mr-3  py-1  px-2 leading-tight focus:outline-none" 
                      type="text" 
                      name="userInput"
                      value={text.userInput} 
                      placeholder="Search Image Term..."  
                      onChange={handleChange} 
                    //   onBlur={handleBlur}
                      />


                    <button className="flex-shrink-0 big-teal-500 hover:bg-teal-700
                     border-teal-500  hover:border-teal-700 text-sm 
                     border-4 py-1 px-2 rounded"
                      type="button" 
                      onClick={handleSubmit}
                      
                      >
                        { showDelete ? 'Delete' : 'Search' }
                      </button>
                </div>
            </form>
        </div>
    )
}


export default ImageSearch