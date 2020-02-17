import React from 'react'


function SouB (props){
    return(
 <div>
     <h1 className= 'tiyleRep'>Improve the lives of millions. Change yours forever</h1>
     <p className= 'pargRep'>More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
     
     <div className ='rep'>
     {props.soub.map(el =><div className='rep1'>
         <img src={el.image} />
         <div className ='rep2'>
         {el.title}
     <button className= 'btbBox'>SEE OPNING</button>
     </div>
     </div>
     )}
     </div>
 
 
 
 
 
 
 </div>


    )

}
export default SouB