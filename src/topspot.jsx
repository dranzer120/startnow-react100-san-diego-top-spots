import React from 'react';

export default props => (
    
    <div className="row">
            <div className='well'>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <a href={'https://maps.google.com/?q='+ props.location}  className='btn btn-primary btn-md'>Map</a>
            </div>
    </div>
);