import React from 'react'
function Error(props) {
    return <div>
        {
        (props.errors) ?
        <div id='error' className='alert-danger'>
            {
                props.errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))
            }
        </div> : ''
}
    </div>
}
export default Error;