import React, { useState } from "react";
// import axios from "axios";

import { axiosWithAuth } from '../utils/axiosWithAuth'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  axiosWithAuth()
    .get('/colors')
    .then(res => setColorList(res.data))
    .catch(err => console.log('Error retrieving data: ', err))

    console.log(colorList)
    
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
