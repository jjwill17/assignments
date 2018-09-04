import React from 'react'
import { connect } from 'react-redux'

const Display = props => {
    const styles = {
        height:'auto', 
        maxWidth:'300px'
    }
    return (
        <div>
            <h1>{props.count}</h1>
            <img src={props.img} style={styles}/>
        </div>
    )
}
                // arg1: What do you want from your store
                // arg2: What methods do I need
export default connect(state=>state,  {})(Display)