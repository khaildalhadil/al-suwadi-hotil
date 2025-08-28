import React from 'react'

export default function ConfirmDelete({resourcName, onConfirm, disabled, handelCloseModal}) {
  return (
    <div className='p-5'>
      <header className=' text-2xl py-2'>Delete {resourcName}</header>
      <p className='text-gray-600 mb-5'>
        Are your sure you want to delete 
        this {resourcName} permanently ? 
        This action cannot be undoe.
      </p>
      <div>
        <button onClick={handelCloseModal} className='p-2 rounded border border-gray-300 hover:bg-gray-100 mr-3 cursor-pointer' disabled={disabled}>Cancel</button>
        <button onClick={onConfirm} className='justify-self-center bg-red-700 hover:bg-red-800 p-2 rounded cursor-pointer text-white' disabled={disabled}>Delete</button>
      </div>
    </div>
  )
}
