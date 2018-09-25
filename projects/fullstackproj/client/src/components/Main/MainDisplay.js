import React from 'react'

const MainDisplay = props => {
    // console.log(props)
    const textStyle = {
        color: 'white'
    }
    return (
        <div>
            {props.phraseList.map(item =>
                <div key={item}>
                    <h1 style={textStyle}>{item}</h1>
                    <button onClick={props.handlePost} className='add-button'>Add to your database?</button>
                </div>)}
        </div>
    )
}

// CLASS BASED 
// class MainDisplay extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             phraseList: props.phraseList,
//             date: ''
//         }
//     }

//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     // handleAddition = () => {
//     //     axios.post()
//     // }

    
//     render(){
//         // console.log(this.state.phraseList)
//         // console.log(this.props)

//         return (
//             <div>
//                 {this.state.phraseList.map(item =>
//                     <div key={item}>
//                         <h1>{item}</h1>
//                         <button onClick={this.handleAddition}>Add to your database?</button>
//                     </div>)}
//             </div>
//         )
//     }
// }

export default MainDisplay