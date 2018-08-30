import React, { Component } from 'react'
import data from './data.json'

class ServiceDetail extends Component {
    constructor(){
        super()
        this.state = {
            service: {}
        }
    }

    componentDidUpdate(prevProps, prevState){
        // axios.get(`url/${this.props.match.params.serviceId}`).then(res => 
                //this.setState({ service: res.data }))
        if(prevState.service._id !== this.props.match.params.serviceId){
            const service = data.services.find(service => service._id === this.props.match.params.serviceId)
            this.setState({
                service: service
            })
        }
    }

    render(){
        return (
            <div className="service-detail-container">
                <h1>{this.state.service.name} - {this.state.service.price}</h1>
            </div>
        )
    }
}

export default ServiceDetail;