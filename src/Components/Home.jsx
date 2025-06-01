import { useEffect } from 'react'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../Redux/pasteSlice'

const Home = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState("")

  const [searchParams, setSearchParams] = useSearchParams('') //Hook
  const pasteId = searchParams.get('pasteId')

  const dispatch = useDispatch('')
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(()=>{
    console.log('inside useeffect')
    if(pasteId){
      const paste = allPastes.find((p)=> p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
},  [pasteId])

  

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),

    }


    if (pasteId) {
      // update
      dispatch(updateToPastes(paste))
    }
    else {
      // create 
      dispatch(addToPastes(paste))
    }

    // after creation or creation
    setTitle('')
    setValue('')
    setSearchParams({});

  }

  return (
    <div>
      <div className='flex flex-row gap-7 place-content-between'><input
        className='rounded-2xl w-[66%] p-1 pl-4 border mt-4'
        type="text"
        placeholder='Enter Title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}

      />
        <button onClick={createPaste} className='p-2 rounded-2xl mt-2 mr-3'>
          {
            pasteId ? 'Update my Paste' : 'Create My paste'
          }
        </button>



      </div>

      <div className='rounded-2xl  min-w-[500px] mt-5'>
        <textarea
          className='p-2 mt-3 border rounded-2xl'
          placeholder='Enter Content Here'
          value={value}
          cols="50" rows="10"
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>




  )
}

export default Home