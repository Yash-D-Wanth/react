import React from 'react'
import ReactDOM from 'react-dom'
function Portal(){
    return ReactDOM.createPortal(
       <h1>
        yashwanth
        </h1>,
        document.getElementById('portal-root')
    )
}
export default Portal