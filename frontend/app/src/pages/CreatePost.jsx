import React from "react"
import { FormField } from "../components"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const handleSubmit=()=>{

  }
  const handleChange=()=>{

  }
  const handleSurpriseMe=()=>{

  }





  return (
  <section className="max-w 7x1 mx-auto">
     <div className="text-">
        <h1 className="font-extrabold text-[#222328] text-[32px]">
      Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
        Create imaginative and Visually stunning images through AI Image GEN and share with the community
        </p>
      </div>

<form className="mt-16 max-w-3x1 " onSubmit={handleSubmit} >
<div className="flex flex-col gap-5">
<FormField 
  LabelName ="text"
  type = "text"
  name='name'
  placeholder = "Akash"
  value={form.name}
  handleChange={handleChange}

/>
<FormField 
  LabelName ="text"
  type = "text"
  name='name'
  placeholder = "A plush toy robot sitting against a yellow wall"
  value={form.name}
  handleChange={handleChange}
isSurpriseMe
handleSurpriseMe={handleSurpriseMe}
/>

</div>



</form>

  </section>
  )
}

export default CreatePost
