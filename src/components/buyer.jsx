import React from 'react'
import mainLogo from "./../assets/Image_gold.png";

export default function Buyer() {
  return (
    <div className='Buyer'>
        <div className="buyer__left"> <img  src={mainLogo} height={400} width={800} alt="fireSpot"/></div>
        <div className="buyer__right"><h1>Gold</h1>
        <p>The investment for a lifetime where  you find 99.99%  pure gold guaranteed.</p>
        <p>Offers.</p>
        <div className="buyer__rightTable"></div>
        <div>buy</div></div>
    </div>
  )
}