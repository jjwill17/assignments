import React from 'react'
import Background from './batman.jpg';

const Box = (props) => {
    const styles = {
        fontWeight: props.fontWeight,
        backgroundColor: "cornflowerblue",
        color: props.color,
        textAlign: "center",
        paddingTop: "20px",
        marginTop: "5px",
        marginRight: "15%",
        marginBottom: "5px",
        marginLeft: "15%",
    }
    return (
        <div style={styles}>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.info}</p>
        </div>
    )
}

const Section = () => {
    const sectionStyle = {
        marginLeft: "26%",
        marginRight: "auto",
        width: "50%",
        height: "500px",
        backgroundImage: "url(" + Background + ")",
        backgroundRepeat: "no-repeat",
    }

    return (
      <section style={sectionStyle}>
      </section>
    )
}

export {
    Box,
    Section
}