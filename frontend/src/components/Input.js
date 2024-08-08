function Input(props) {
    return(
      <div>
        <label >Enter {props.label}</label>
        <input placeholder={`Enter ${props.label}`}></input>
      </div>
    )
  }
export default Input;
