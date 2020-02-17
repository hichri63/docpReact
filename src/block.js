import React from 'react';




function Bloc(props) {
    return (
        <div className='blocclas'>
            {props.blok.map(el => <div className={el.select ? 'backCard' : 'backCard2'}>
                <p>{el.name}</p>

                <p className={el.title && 'tytle'}>{el.title}</p>
                {el.select && <select className="btb">
                    <option value="volvo">Choose country</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>}
                {<img className={el.select ? 'imgBloc' : 'imgBloc1'} src={el.imag} />}

            </div>

            )}

        </div>


    )


}
export default Bloc