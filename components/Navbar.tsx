import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <div>
      <div>
        <p>Vishal</p>
      </div>
      <div>
        <ul>
          <li>
            <a href="">About Me</a>

          </li>
          <li>
            <a href="">Skills</a>
            
          </li>
          <li>
            <a href="">Projects</a>
            
          </li>
          <li>
            <a href="">Contact</a>
            
          </li>
        </ul>
      </div>
      <div>
        <Button> Resume</Button>
      </div>
    </div>
  )
}

export default Navbar