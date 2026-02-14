import React, { useState } from "react";
import  axios  from "axios";


const App = () => {
  const [Image, setImage] = useState([]);
  const loadimages = async () => {
    const response = await axios("https://fakestoreapi.com/products/");

    
   const imageurl = response.data.map((item)=>{
      return item.image
    })
  //  console.log(images);
   
    setImage(imageurl)

  };
  return (
    <div>
      <button onClick={loadimages}>show images</button>
      <div className="images" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {Image.map((ele,ind)=>(
          <img src={ele} alt="" key={ind} style={{ width: "150px", height: "150px", objectFit: "contain" }}/>
        ))}
      </div>
    </div>
  );
};

export default App;
