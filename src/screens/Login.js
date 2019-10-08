import React, {Component} from 'react'
import {View, Container, Content, Form, Label, Item, Input, Button, Text} from 'native-base'
import {AsyncStorage} from 'react-native'
import axios from 'axios'

export default class Login extends Component {

    static navigationOptions = {
        header: null,
    }

    state = {
        email: "epiharyono@gmail.com",
        password: "1234"
    }

    async componentDidMount(){
        const token = await AsyncStorage.getItem('token')
        if(token){
          this.props.navigation.navigate('HomeScreen')
        }
    }

    async handleLogin(){
        const {email, password} = this.state
        const res = await axios.post('http://teler.id/api/v1/auth/login', {
            email,
            password
        })
        
        try {
            await AsyncStorage.setItem('token', res.data.data.token)
            await AsyncStorage.setItem('userId', res.data.data.token + '')
        } catch (error) {
            alert(error)
        }

        this.props.navigation.navigate('HomeScreen')

    }

    render(){
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Email</Label>
                            <Input onChangeText={(email)=> this.setState({email})} value={this.state.email}/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input onChangeText={(password)=> this.setState({password})}  value={this.state.password}/>
                        </Item>
                        <Button success full onPress={()=> this.handleLogin()}>
                            <Text>Login</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}
