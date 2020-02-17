import React from 'react';

function Pargraphes(props){
    return(
    <div>
       <img className ='image' src="https://www.docplanner.com/img/sygnet.png"/>
       <h1 className ='title'>
       Making the healthcare experience more human
       </h1>
       <div className='para1'>
       {props.paragr.map(el => <p> {el} </p>)}
       </div>
    </div>
    )

}
export default Pargraphes