import React from 'react'
import './loader.css'

export default function Loader() {
  return (
    <div className="loader text-center">
    <div className="loader-inner">
        <div className="lds-roller mb-3">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <h4 className="text-uppercase font-weight-bold">Loading</h4>
    </div>
</div>
  )
}
