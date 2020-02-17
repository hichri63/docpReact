import React from 'react'
function Nav(props) {
    return (
        <div className='navbar'>
            <img className='logo' src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" />
            <ul className='listss'>
                {props.info.map(el =><li className={el.submit ? 'dropdown' : 'none'}>
                    <a href={el.link}>
                        {el.name}
                        {el.submit && <ul className='dropdown-content'>
                            {el.submit.map(el => <li> {el} </li>)} </ul>}

                    </a>
                </li> )}
                
            </ul>
        </div>
    )
}
export default Nav