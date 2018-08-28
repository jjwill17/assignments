import React from 'react'

const Thumb = (props) => {
    const styles = {
        height: "auto",
        maxWidth: "100px"
    }

    return (
    <div>
        {props.status ?
        <button onClick={props.handleClick}><img src='https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Up_Hand_Sign_Emoji_large.png?v=1480481047' style={styles}/></button>
        :
        <button onClick={props.handleClick}><img src='https://cdn.shopify.com/s/files/1/1061/1924/products/White_Thumbs_Down_Sign_Emoji_large.png?v=1480481028' style={styles}/></button>
    }
    </div>
    )
}

export default Thumb