import React, {Component} from "react";
import MOCK_DATA from "./MOCK_DATA.json";
import  { useState } from "react";

function LikeBtn() {
  const [likes, setLikes] = useState(0);
  return(<button className="text-3xl bg-yellow-200 rounded-xl" onClick={() => setLikes(likes + 1)}>{likes} ❤️</button>); 
  

}


export default LikeBtn;



