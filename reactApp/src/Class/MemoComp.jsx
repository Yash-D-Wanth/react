// import ParentComp from './ParentComp'
import React from 'react'
function MemoComp(props){
    return(
        <>
        {console.log(`memo component ${props.name}`)}
        </>
    )
}
export default React.memo(MemoComp)