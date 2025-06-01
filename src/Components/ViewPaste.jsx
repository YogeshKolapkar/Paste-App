import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPastes } from '../Redux/pasteSlice'

const ViewPaste = () => {
  // const[title, setTitle] =useState('');.
  const {id}= useParams();

  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];

  console.log('final Paste =', paste);
  return (
    <div>
    <div className='flex flex-row gap-7 place-content-between'>
      <input
      className='rounded-2xl w-[66%] p-1 pl-4 border mt-4'
      type="text"
      disabled
      placeholder='Enter Title'
      value={paste.title}
      onChange={(e) => setTitle(e.target.value)}

    />
      {/* <button onClick={createPaste} className='p-2 rounded-2xl mt-2 mr-3'>
        {
          pasteId ? 'Update my Paste' : 'Create My paste'
        }
      </button> */}



    </div>

    <div className='rounded-2xl  min-w-[500px] mt-5'>
      <textarea
        className='p-2 mt-3 border rounded-2xl'
        placeholder='Enter Content Here'
        value={paste.content}
        disabled
        cols="50" rows="10"
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  </div>

  )
}

export default ViewPaste