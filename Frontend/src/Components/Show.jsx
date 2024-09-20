import React, { useEffect, useState } from "react";
import axios from "axios";

function Show() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get(
          `${import.meta.env.VITE_API_Backend_URL}/cloud/show`
        );
        setData(response.data);
      };
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="w-[50%] h-full flex flex-col items-center gap-4 px-6 py-2">
      <h1 className="text-white text-3xl font-serif border-b-2">Show Cloud Database</h1>
      <div className="w-full h-[100%] grid grid-cols-2 grid-rows-4 gap-4 rounded-md bg-white shadow-2xl p-4">
        {data.map((item) => (
          <div key={item._id} className="border-2 p-2 rounded-md">
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Number: {item.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Show;
