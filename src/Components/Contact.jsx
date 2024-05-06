import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {


  const [nameValue, setNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  const [postValue, setPostValue] = useState("")
  const [state, handleSubmit] = useForm("myyropqg");


  const handleClick = (e) => {
    if (state.succeeded) {
      toast.success("Thanks for reaching out to me");
      setTimeout(() => {
        setNameValue("")
        setEmailValue("")
        setPostValue("")
      }, 3000)}

    else if(state.errors) {
      return toast.error("submission not successful")
    }
    else{
      return toast.error("Fill the inputs correctly")
    }


  }


 
  return (
    <fieldset name='contacts' className='bg-gradient-to-b from-gray-800 to-black w-full aboutAnim p-5 mt-16 rounded-md'>
      <legend className='m-auto color-white font-medium text-2xl'>Contacts</legend>
      <div className=" flex justify-center items-center">
        <form onSubmit={handleSubmit}
          method="POST"
          className=" flex flex-col w-full md:w-1/2"
        >
          <input
            id='name'
            name="name"
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            type="text"

            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />

          <input
            id='email'
            name="email"
            type="email"
            value={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
            placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <textarea
            id='message'
            name="message"
            value={postValue}
            onChange={(e) => setPostValue(e.target.value)}

            placeholder="Enter your message"
            rows="10"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button onClick={handleClick} disabled={state.submitting} type='submit' className=" cursor-pointer text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Let's talk
          </button>

          <Toaster />
        </form>
      </div>
    </fieldset>
  )
}

export default Contact
