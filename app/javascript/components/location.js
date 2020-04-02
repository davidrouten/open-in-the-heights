import React from 'react'
import { capitalize } from './utils'

export const Location = (props) => {
  return (
    <>
      <div>
        <button className="btn btn-primary" style={{ marginBottom: '15px' }} onClick={props.clearCurrentLocation}>Back</button>
      </div>
      <div className="card border-secondary mb-3">
        <div className="card-header">
          {props.data.name}
          <span style={{color: props.data.is_open ? 'green' : 'red', float: 'right'}}>{props.data.is_open ? 'Open' : 'Closed'}</span>
        </div>
        <div className="card-body text-secondary">
          <div className="card-text">
            {props.data.links.map(link => {
              return <a href={link.url} target="_blank" key={link.name} alt={link.name}>{link.name}</a>
            }).reduce((prev, curr) => [prev, ' | ', curr])}
          </div>
          <hr/>

          <h5 className="card-title">Contact</h5>
          <div className="card-text">
            {props.data.contact_phone ? (
              <div>Phone: {props.data.contact_phone}</div>
            ) : (
              null
            )}
            {props.data.contact_email ? (
              <div>Email: {props.data.contact_email}</div>
            ) : (
              null
            )}
          </div>
          <hr/>

          <h5 className="card-title">Address</h5>
          <div className="card-text">
            <div>{props.data.address.street}</div>
            <div>{props.data.address.street2}</div>
            <div>{props.data.address.city}, {props.data.address.state} {props.data.address.zip}</div>
          </div>
          <hr/>

          <h5 className="card-title">Hours</h5>
          <div className="card-text">
            {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => {
              return <div key={day}><strong>{capitalize(day)}:</strong> {props.data.hours[day]}</div>
            })}
          </div>
          <hr/>

          {props.data.delivery_notes ? (
            <>
              <h5 className="card-title">Delivery Notes</h5>
              <div className="card-text" dangerouslySetInnerHTML={{ __html: props.data.delivery_notes }}></div>
              <hr/>
            </>
          ) : (
            null
          )}

          {props.data.notes ? (
            <>
              <h5 className="card-title">Notes</h5>
              <div className="card-text" dangerouslySetInnerHTML={{ __html: props.data.notes }}></div>
            </>
          ) : (
            null
          )}
        </div>
      </div>
    </>
  )
}