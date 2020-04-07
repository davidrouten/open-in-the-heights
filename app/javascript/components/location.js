import React from 'react'
import { capitalize, getDayOfWeek } from './utils'

export const Location = (props) => {
  var dayOfWeek = getDayOfWeek(new Date())

  return (
    <>
      <div>
        <button className="btn btn-primary" style={{ marginBottom: '15px' }} onClick={props.clearCurrentLocation}>Back</button>
      </div>
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <strong>{props.data.name}</strong>
          <span style={{ float: 'right' }}>{props.data.business_type}</span>
        </div>

        <div className="card-body text-secondary">
          {props.data.links.length > 0 ? (
            <>
              <div className="card-text">
                {props.data.links.map(link => {
                  return <a href={link.url} target="_blank" key={link.name} alt={link.name} className="text-primary">{link.name}</a>
                }).reduce((prev, curr) => [prev, ' | ', curr])}
              </div>
              <hr/>
            </>
          ) : (
            null
          )}

          <h5 className="card-title my-1">Contact</h5>
          <div className="card-text small">
            {props.data.contact_phone ? (
              <div>Phone: <a href={ `tel:${props.data.contact_phone}` } className="text-primary">{props.data.contact_phone}</a></div>
            ) : (
              null
            )}
            {props.data.contact_email ? (
              <div>Email: <a href={ `mailto:${props.data.contact_email}` } className="text-primary" target="_blank">{props.data.contact_email}</a></div>
            ) : (
              null
            )}
          </div>
          <hr/>

          <h5 className="card-title my-1">Address</h5>
          <div className="card-text small">
            <div>{props.data.address.street}</div>
            <div>{props.data.address.street2}</div>
            <div>{props.data.address.city}, {props.data.address.state} {props.data.address.zip}</div>
          </div>
          <hr/>

          <h5 className="card-title my-1">Hours</h5>
          <div className="card-text small">
            {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map(day => {
              return <div key={day} className={ dayOfWeek === day ? 'text-info' : null }><strong>{capitalize(day)}:</strong> {props.data.hours[day]}</div>
            })}
          </div>

          {props.data.delivery_notes ? (
            <>
              <hr/>
              <h5 className="card-title my-1">Delivery Notes</h5>
              <div className="card-text small" dangerouslySetInnerHTML={{ __html: props.data.delivery_notes }}></div>
            </>
          ) : (
            null
          )}

          {props.data.notes ? (
            <>
              <hr/>
              <h5 className="card-title my-1">Notes</h5>
              <div className="card-text small" dangerouslySetInnerHTML={{ __html: props.data.notes }}></div>
            </>
          ) : (
            null
          )}
        </div>
      </div>
    </>
  )
}