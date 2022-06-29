import React from 'react';
import { Link } from 'react-router-dom'
import './css/RoutePage.css'

function RoutePage(props) {
   const {currentPage} = props

  return (
    <div className="route-page">
      <Link to="/" className="route-link">Home</Link>
      <span>/</span>
      <span className="route-link-current">{currentPage}</span>
    </div>
  )
}

export default RoutePage;



