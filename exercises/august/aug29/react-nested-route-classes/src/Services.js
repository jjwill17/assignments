import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import ServiceDetail from './ServiceDetail'
import data from './data.json'

class Services extends Component {
    constructor(){
        super()
        this.state = {
            services: []
        }
    }

    componentDidMount(){
       this.setState({
           services: data.services
       })
    }

    render(){
        return (
            <div className="services">
                <div className="services-list">
                    { this.state.services.map(service => <Link to={`/services/${service._id}`} key={service._id}>{service.name}</Link>)}
                </div>
                <Switch>
                    <Route path={`${this.props.match.url}/:serviceId`} component={ ServiceDetail }/>
                </Switch>
            </div>
        )
    }
}

export default Services