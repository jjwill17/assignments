import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import PostsPage from './components/PostsPage'
import Profile from './components/Profile'
import Footer from './components/Footer'
import axios from 'axios'

const postAxios = axios.create()

postAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class App extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            formToggle: false,
            user: {
                username: '',
                isAdmin: '',
                _id: ''
            },
            isAuthenticated: false
        }
    }

    getData = () => {
        postAxios.get('/api/posts').then(res => {
            this.setState({
                posts: res.data
            })
        })
    }

    signup = userInfo => {
        axios.post('/auth/signup', userInfo).then(res => {
            // destructured form of const user = res.data.user and const token = res.data.token
            const { user, token } = res.data
            // Save user info in local storage
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.authenticate(user)
        })
        .catch(err => {
            console.log(err)
        })
    }

    login = userInfo => {
        axios.post('/auth/login', userInfo).then(res => {
            // destructured form of const user = res.data.user and const token = res.data.token
            const { user, token } = res.data
            // Save user info in local storage
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            this.authenticate(user)
        })
        .catch(err => {
            console.log(err)
        })
    }

    authenticate = user => {
        this.setState(prevState => ({
            user: {
                ...user
            },
            isAuthenticated: true
        }), () => {
            this.getData()
        })
    }

    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({
            user: {
                username: '',
                isAdmin: false,
                _id: ''
            },
            isAuthenticated: false,
            posts: []
        })
    }

    addPost = newPost => {
        const { title, body, imgUrl } = newPost
        if(title.trim().length > 0 && body.trim().length > 0 && imgUrl.trim().length > 0){
            postAxios.post('/api/posts', newPost).then(res => {
                this.setState(prevState => ({
                    posts: [...prevState.posts, res.data],
                    formToggle: false,
                }))
            })
        }
    }

    handleDelete = id => {
        postAxios.delete(`/api/posts/${id}`).then(res => {
            this.setState(prevState => ({
                posts: prevState.posts.filter(post => post._id !== id)
            }))
        })
    }

    formToggler = () => {
        this.setState(prevState => ({
            formToggle: !prevState.formToggle
        }))
    }

    render(){
        const { isAuthenticated } = this.state
        return (
            <div>
                <Navbar logout={this.logout} isAuthenticated={ isAuthenticated } />
                <Switch>
                    <Route exact path="/" render={props => <Auth {...props} signup={this.signup} login={this.login} /> }/>
                    <Route exact path="/posts" render={(props) =>  
                                                    <PostsPage 
                                                        {...props} 
                                                        addPost={this.addPost}
                                                        handleDelete={this.handleDelete}
                                                        posts={this.state.posts}
                                                        formToggle={this.state.formToggle}
                                                        formToggler={this.formToggler}/>} 
                                                    />
                    <Route 
                        path="/profile" 
                        render={props => <Profile {...props}/> } />
                </Switch> 
                <Footer />
            </div>
        )
    }
}

export default App