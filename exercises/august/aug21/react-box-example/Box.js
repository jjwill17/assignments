import React from "react"

const Box = (props) => {
    
    const styles = {
        color: props.color,
        backgroundColor: "#060606",
        textAlign: "center"
    }

    return <div className="red" style={styles}>{props.greeting}</div>
}

export default Box