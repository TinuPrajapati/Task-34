import React,{useState} from "react";
import axios from "axios";

function Form() {
  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [number,setNumber]= useState('');
  const [error,setError] = useState("");
      

  const sendData =async (e)=>{
    e.preventDefault();
    try{
      const response=await axios.post(`${import.meta.env.VITE_API_Backend_URL}/cloud/data`,{
        name,email,number
      },{
        withCredentials:true
      }
    );
    // window.location.reload(false)
   alert(response.data)
    setEmail('')
    setNumber("")
    setName('')
    }catch(err){
      alert(err.response.data.message);
    }
    
  }

  return (
    <div className="w-[40%] h-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-white text-3xl font-serif border-b-2">
        Task-Cloud Database
      </h1>
      <form
        action="show"
        className="w-[100%] h-[70%] px-6 flex flex-col justify-center items-center gap-4 rounded-md bg-white shadow-2xl"
        onSubmit={sendData}
      >
        <div className="flex flex-col gap-1 w-full ">
          <label htmlFor="name" className="text-lg">
            Username :
          </label>
          <input
            type="text"
            id="email"
            value={name}
            className="border-2 rounded-md px-4 py-1 outline-none"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full ">
          <label htmlFor="email" className="text-lg">
            Email :
          </label>
          <input
            type="email"
            id="email"
            value={email}
            className="border-2 rounded-md px-4 py-1 outline-none"
            onChange={e=> setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1 w-full ">
          <label htmlFor="msg" className="text-lg">
            Number :
          </label>
          <input
            type="text"
            id="email"
            maxLength={10}
            value={number}
            className="border-2 rounded-md px-4 py-1 outline-none"
            onChange={e=> setNumber(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-sky-500 text-white text-2xl font-serif w-[50%] py-3 rounded-md active:scale-90 outline-none">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
