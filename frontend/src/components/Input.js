function Input({label,handelChange ,value}) {

    return(
      <div>
        <label >Enter {label}</label>
        <input placeholder={`Enter ${label}`} onChange={(event)=>{handelChange(event)}} value={value} name={label}></input>
      </div>
    )
  }
export default Input;
