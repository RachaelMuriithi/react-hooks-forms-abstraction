import React, { useState } from "react";

function Form() {

  const [formData, setFormData] = useState({
    firstName:"John",
    lastName:"Wangombe",
    subscribe: true,
  })

  function handleChange(event) {
    let  name = event.target.name;
    let value = event.target.value;

    if( event.target.type === "checkbox"){
      value = event.target.checked
    }

    setFormData({
      ...formData,
      [name]:value,
    })
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      name="firstName" 
      onChange={handleChange} 
      value={formData.firstName} 
      />


      <input type="text" 
      name="lastName" 
      onChange={handleChange} 
      value={formData.lastName} 
      />

      <br></br>

      <label>
        <input  
        type="checkbox" 
        name="subscribe" 
        checked={formData.subscribe}
        onChange={handleChange}
        />
        Subcribe to our channel
      </label>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;