import {useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import { toast, ToastContainer } from "react-toastify";

const CreateProduct = () => {
  let navigate = useNavigate();
  const { backend } =
    useContext(AppContent);

    const [name, setname] = useState('')
    const [img, setimg] = useState('')
    const [price, setprice] = useState('')
    const [discountedprice, setdiscountedprice] = useState('')

    const Nameonchange = (e)=>{
      setname(e.target.value)
    }
    const Imageonchange = (e)=>{
      setimg(e.target.value)
    }
    const Priceonchange = (e)=>{
      setprice(e.target.value)
    }
    const Dponchange = (e)=>{
      setdiscountedprice(e.target.value)
    }
  const create = async () => {
    console.log(name,price,discountedprice,img)
    let RP = parseInt(price)
    let RDP = parseInt(discountedprice)
    const Creation = await fetch(`${backend}/course/createCourse`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        img:img,
        name:name,
        price:RP,
        dprice:RDP,
      }),
      credentials: "include",
    });

    const response = await Creation.json()
    console.log(response)
    if(response.sucess){
      toast.success("Product Created SucessFully")
    }else{
      toast.error(response.message)
    }
    setdiscountedprice('')
    setimg('')
    setname('')
    setprice('')

  };
  return (
    <>
    <ToastContainer/>
      <Navbar />
      <div className="h-[92.6vh] bg-zinc-800 flex items-center justify-center w-full p-10">
        <div className="h-[60vh] w-[50%] bg-zinc-800 rounded-lg">
          <div className="form">
            <div className="flex flex-col items-center justify-center  dark">
              <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">
                  Create a new <span className="text-green-500">Product</span>
                </h2>
                <div className="flex flex-col">
                  <input
                    placeholder="Name"
                    name="name"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={name}
                    onChange={(e)=>Nameonchange(e)}
                  />
                  <input
                    placeholder="image Link"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={img}
                    onChange={(e)=>Imageonchange(e)}
                  />
                  <input
                    placeholder="Price"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={price}
                    onChange={(e)=>Priceonchange(e)}
                  />
                  <input
                    placeholder="Discounted Price"
                    className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                    type="text"
                    value={discountedprice}
                    onChange={(e)=>Dponchange(e)}
                  />
                  <button
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                    onClick={() => create()}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
