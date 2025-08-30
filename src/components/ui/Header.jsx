import React from 'react'

const Header = ({children}) => {
  return (
    <div className='header'>
      <h1 className=''>{children}</h1>
      <div className='underline'>

      </div>
    </div>
  );
}

export default Header