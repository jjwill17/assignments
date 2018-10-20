import React, { Component } from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom' //new
import ProtectedRoute from './shared/ProtectedRoute' //new
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import PostsPage from './components/PostsPage'
import Profile from './components/Profile'
import Footer from './components/Footer'
import axios from 'axios'

let postsAxios = axios.create()
       
postsAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})


class App extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            formToggle: false,
            user: {
                username: '',
                isAdmin: false
            },
            authErr: {
                status: '',
                err: ''
            },
            isAuthenticated: false,
            loading: true
        }
    }

    //new 
    componentDidMount(){
        this.verify()
    }

    getData = () => {
        postsAxios.get('/api/posts').then(res => {
            this.setState({
                posts: res.data
            })
        })
    }


    signUp = userInfo => {
        axios.post('/auth/signup', userInfo)
            .then(res => {
                const {token, user} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.authenticate(user)
            })
            .catch(err => {
                this.authErr(err.response.status, err.response.data.err) //new
            })
    }

    login = userInfo => {
        axios.post('/auth/login', userInfo)
            .then(res => {
                const {token, user} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.authenticate(user)
            }) 
            .catch(err => {
                this.authErr(err.response.status, err.response.data.err) //new
            })
    }

    authenticate = user => {
        this.setState(prevState => ({
            user: {
                ...user
            },
            isAuthenticated: true,
            loading: false
        }), () => {
            this.getData()
        })
    }

    //new
    verify = () => {
        postsAxios.get('/api/profile').then(res => {
            let { user } = res.data
            this.authenticate(user)
        })
        .catch(err => {
            console.log(err)
        })
    }

    //new
    authErr = (status, err) => {
        this.setState(prevState => ({
            ...prevState,
            authErr: {
                status: status,
                err: err
            },
            loading: false
        }))
    }

    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({
            user: {
                username: '',
                isAdmin: false
            },
            isAuthenticated: false,
            posts: [],
            loading: false
        })
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState(prevState => ({
            addPost: {
                ...prevState.addPost,
                [name]: value
            }
        }))
    }

    addPost = newPost => {
        const { title, body, imgUrl } = newPost
        if(title.trim().length > 0 && body.trim().length > 0 && imgUrl.trim().length > 0){
            postsAxios.post('/api/posts', newPost).then(res => {
                this.setState(prevState => ({
                    ...prevState,
                    posts: [...prevState.posts, res.data],
                    formToggle: false,
                }))
            })
        }
    }

    handleDelete = id => {
        postsAxios.delete(`/api/posts/${id}`).then(res => {
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
        const { isAuthenticated, loading } = this.state
        return (
            <div>
                {isAuthenticated && <Navbar logout={this.logout} authenticated={this.state.isAuthenticated}/>}
                {!loading  
                    ? <div>Loading...</div>
                    :
                <Switch>
                    <Route exact path="/" render={ props => isAuthenticated 
                                                ?   <Redirect to='/posts/' />
                                                :   <Auth 
                                                        {...props} 
                                                        signUp={this.signUp} 
                                                        login={this.login}
                                                        authErr={this.state.authErr}/>
                                                    }/>
                    <ProtectedRoute path="/posts" redirectTo='/' isAuthenticated={ isAuthenticated } render={ props =>  
                                                    <PostsPage 
                                                        {...props} 
                                                        addPost={this.addPost}
                                                        handleDelete={this.handleDelete}
                                                        inputs={this.state.addPost}
                                                        posts={this.state.posts}
                                                        formToggle={this.state.formToggle}
                                                        formToggler={this.formToggler}/>
                                                    }/>
                    <ProtectedRoute path="/profile" redirectTo='/' isAuthenticated={ isAuthenticated } render={props => <Profile {...props} user={this.state.user} /> } />
                </Switch> 
                }
                <Footer />
            </div>
        )
    }
}

export default withRouter(App)