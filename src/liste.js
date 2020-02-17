import React from 'react';


function Pub (props){
    return(
  <div className='footerBody'>
   <h1 className ='titleBody'>
   We are a global company
with local culture
   </h1>
   <ul>
   <li>
       <a className='listBody' href="#">
           {props.pub.map(el => <div><svg className='fills' xmlns={el.xmlns}>
           <path d={el.d} />
           </svg>
           </div>
           )
           }
       </a>
   </li>
   </ul>

  </div>
    )

}
export default Pub