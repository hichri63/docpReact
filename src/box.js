import React from 'react';


function Box(props) {
    return (
        <div className='box'>
            <div className='boxLeft'>

                <h4 className='titleCantinair'> The world's
        biggest healthcare platform</h4>


                <p className='pargCantinair'> We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>

                <img className='image2' src="https://www.docplanner.com/img/logo.png" />
            </div>
            <div className ='cantBox'>
                {props.box.map(el => <div className='cantBox2'><img className='imgBoxes' src={el.symbol} />
                    <h1 className='titBoxes'>{el.title}</h1>
                    <p className='parBoxes'>{el.phra}</p>



                </div>





                )}
            </div>

        </div>

    )
}
export default Box