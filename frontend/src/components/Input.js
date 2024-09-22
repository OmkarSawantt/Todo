function Input({ label, handleChange, value }) {
  return (
      <div className="relative z-0">
        <input type="text" id={label.toLowerCase()} onChange={(e)=>{handleChange(e)}} value={value} name={label.toLowerCase()}   className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#eb5e28] peer" placeholder=" " />
        <label htmlFor={label.toLowerCase()}   className="absolute text-xl text-[#252422]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#eb5e28]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">{label}</label>
      </div>

  );
}

export default Input;
