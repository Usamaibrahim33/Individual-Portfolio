/* eslint-disable react/prop-types */
import { useState } from "react"




function ImageSearch({ term, setTerm}) {
    const [text, setText] = useState('')




    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(text)
        setTerm(text)
        

    }

    return(

        <div className="mx-w-sm rounded overflow-hidden my-10 max-auto border flex justify-center" >
            <form onSubmit={handleSubmit} className="w-full max-w-sm" >
                <div className="flex items-center border-b-2 border-teal-500 py-2  ">

                    <input className="appearance-none  bg-transparent border-none w-full
                     text-gray-700 mr-3  py-1  px-2 leading-tight focus:outline-none" 
                      type="text" placeholder="Search Image Term..."  onChange={(event) => setText(event.target.value)} />


                    <button className="flex-shrink-0   big-teal-500 hover:bg-teal-700
                     border-teal-500  hover:border-teal-700 text-sm 
                     border-4 py-1 px-2 rounded"
                      type="submit"> Search </button>
                </div>
            </form>
        </div>
    )
}


export default ImageSearch