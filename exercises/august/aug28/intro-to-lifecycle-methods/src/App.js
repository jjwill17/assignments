import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            backgroundColor: "yellow",
            changeText: "center",
            img: ""
        }
    }

    componentWillMount(){
        window.addEventListener('keypress', e => {
            console.log(e)
            if(e.code === "KeyF"){
                this.setState({
                    backgroundColor: "limegreen"
                })
            }
            if(e.code === "KeyA"){
                this.setState({
                    backgroundColor: "cornflowerblue"
                })
            }
            if(e.code === "KeyK"){
                this.setState({
                    changeText: "left"
                })
            }
            if(e.code === "KeyL"){
                this.setState({
                    changeText: "center"
                })
            }
            if(e.code === "KeyQ"){
                this.setState({
                    img: "https://i.pinimg.com/474x/50/5c/98/505c98a85462666604822151c6dd6a28--superheroes-batman.jpg"
                })
            }
            if(e.code === "KeyW"){
                this.setState({
                    img: "https://images4.alphacoders.com/605/60578.jpg"
                })
            }
        })
    }
   

    render(){
        const styles = {
            object: {
                backgroundColor: this.state.backgroundColor,
                textAlign: this.state.changeText
            }
        }

        const picStyle = {
            maxHeight: "400px",
            width: "auto"
        }
        return(
            <form>
                <h1 style={styles.object} name="changeText">Hello Justin</h1>
                <img style={picStyle} src={this.state.img}/>
            </form>
        )
    }
}

export default App