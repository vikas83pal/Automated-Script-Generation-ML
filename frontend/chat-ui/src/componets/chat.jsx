import React, { use } from 'react'
import { FaRobot, FaPlus, FaPaperPlane, FaGlobe } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const chat = () => {

    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const handleKeyPressEnter = (event) => {
        if(event.key === 'Enter' && message.trim() !== ""){
            setResponse(message);
            setMessage("");
        }
    }

    useEffect(() => {     
    
        console.log(response);
      
    }, [response])
    

    return (
        <>
            <div className='bg-gray-900 text-white w-[100vw] h-[100vh] flex flex-col'>
                <h1 className='text-[2em] font-mono flex justify-center gap-2 mt-[2em]'>
                    <FaRobot size={50} /> NeuraFuse-1
                </h1>
                <h1 className='font-mono text-center text-3xl mt-[3em]'>What can I help you?</h1>


                <div className='h-[80vh] text-center w-[70vw] m-auto mt-3 font-mono rounded-4xl'>
                    {response ? response : "Ask anything"}
                </div>
                <div className="w-[50vw] flex flex-col justify-center p-[2em] bg-gray-800 mx-auto rounded-3xl mb-5">
                    <div className='flex'>
                    <input
                        className="p-3 rounded-3xl w-full focus:outline-none"
                        type="text"
                        placeholder="Type a message..."
                        onChange={(e)=>setMessage(e.target.value)}
                            onKeyDown={handleKeyPressEnter}                        
                    />
                    <FaPaperPlane className='mt-[1em] cursor-pointer'/>
                    </div> 
                    <div className='flex'>
                   <FaPlus className="w-6 h-6 p-1 bg-gray-800 text-white rounded-2xl border border-gray-500 cursor-pointer" />
                   <FaGlobe className='ml-3 mt-1 mr-1' />  Search
                    </div>                  
                </div> 

            </div>
        </>
    )
}

export default chat