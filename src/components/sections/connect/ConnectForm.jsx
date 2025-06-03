import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { Card } from '@/components/ui/card'
import React from 'react'

const ConnectForm = ({formData, handleChange, handleSubmit}) => {
  return (
    <Card className="max-w-lg w-full px-6 rounded-xl py-4">
        {/* <h1 className='text-3xl text-center font-semibold'>Let's Connect</h1> */}
<form onSubmit={handleSubmit} className="w-full h-full mt-4">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-white"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mt-4">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-white"
      />
    </div>
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mt-4">Message:</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-white"
      ></textarea>
    </div>
    <div className="flex justify-center pt-5">
      {/* <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4"
      >
        
      </button> */}
      <InteractiveHoverButton type="submit" >Connect</InteractiveHoverButton>
    </div>
  </form>
  </Card>
  )
}

export default ConnectForm