import React from 'react'
import './CollectionTarget.scss'
import { Link, useNavigate } from 'react-router-dom'
const CollecionsTarget = ({cover, nameCollection}) => {
const navigate = useNavigate()
  const handleClick = () =>{
    console.log(nameCollection);
   navigate(`/collections/${nameCollection}`)
  }
  return (
    <div className='CollectionContainer' onClick={handleClick}>
            <img className='CollectionTargetImg' src={cover} alt="" />
            <h2 className='CollectionTargetName'>{nameCollection}</h2>
    </div>
  )
}

export default CollecionsTarget