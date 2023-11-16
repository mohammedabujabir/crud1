import React from 'react'

function Input({id,title,type,name,value,handelData,customClasses,errors}) {
   
  return (
    <div className="mb-3">
    <label htmlFor={id} className="form-label">{title}</label>
    <input type={type} name={name} className={`form-control ${customClasses}`} value={value}id={id} onChange={handelData}/>
    {errors[name] && <p className='text-danger'>{errors[name]}</p>}
  </div>
  )
}

export default Input
