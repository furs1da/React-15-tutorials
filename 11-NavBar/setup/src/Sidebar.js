import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Sidebar = () => {
    return (
        <div className='links-container show-container'>
        <ul className='links'>
        {links.map((link)=>{
            const {id,url,text} = link;
            return <li key={id}>
              <a href={url}>{text}</a>
            </li>
          })}
        </ul>
      </div>
    )
}

export default Sidebar