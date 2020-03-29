import React from 'react'

export const Location = (props) => {
  return (
    <div className="card border-primary mb-3">
      <div className="card-header">
        {props.data.name}
        <span style={{color: props.data.is_open ? 'green' : 'red', float: 'right'}}>{props.data.is_open ? 'Open' : 'Closed'}</span>
      </div>
      <div className="card-body text-primary">
        <h5 className="card-title">Hours</h5>
        <div className="card-text">
          {props.data.hours.map((block, index) => {
            return <div key={index}>{block}</div>
          })}
        </div>
      </div>
    </div>
  )
}