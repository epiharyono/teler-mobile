import React, {Component} from 'react'
import {View, Container, Content, Form, Label, Item, Input, Button, Text, Spinner, Icon} from 'native-base'
import {AsyncStorage, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import axios from 'axios'

import {apiUrl} from '../utils/config'

export default class Login extends Component {

    static navigationOptions = {
        header: null,
    }

    state = {
        email: "epiharyono@gmail.com",
        password: "1234",
        proses: false,
        isPasswordHidden: true,
        toggleText: 'show'
    }

    async componentDidMount(){
        const token = await AsyncStorage.getItem('token')
        if(token){
          this.props.navigation.push('HomeScreen')
        }
        this.setState({ proses: false })
    }

    async componentWillReceiveProps(){
        // const token = await AsyncStorage.getItem('token')
        // if(token){
        //   this.props.navigation.navigate('HomeScreen')
        // }
        alert('will')
        this.setState({ proses: false })
    }

    async handleLogin(){
        this.setState({ proses: true })
        // var token  = 'eyJ0eXAid'
        // await AsyncStorage.setItem('token', token)
        // this.props.navigation.navigate('HomeScreen')

        const {email, password} = this.state
        const res = await axios.post(`${apiUrl}/auth/login`,{
            email,
            password
        }).catch(error => {
            alert(error)
        })

        try {
            await AsyncStorage.setItem('token', res.data.data.token)
            await AsyncStorage.setItem('userId', res.data.data.token + '')
        } catch (error) {
            alert(error)
        }

        this.props.navigation.push('HomeScreen')

    }

    handleToggle = () => {
        const { isPasswordHidden } = this.state;

        if (isPasswordHidden) {
          this.setState({ isPasswordHidden: false });
          this.setState({ toggleText: 'hide' });
        } else {
          this.setState({ isPasswordHidden: true });
          this.setState({ toggleText: 'show' });
        }
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
                        <Item stackedLabel>
                            <Label>Password</Label>
                            <Input
                                onChangeText={(password)=> this.setState({password})}
                                value={this.state.password}
                                secureTextEntry={this.state.isPasswordHidden}
                            />
                            <Icon onPress={this.handleToggle} name='checkmark-circle' />

                        </Item>



                        {this.state.proses? (
                            <Button success full>
                                <Spinner/>
                                <Text>Proses...</Text>
                            </Button>
                        )
                        :(
                            <Button success full onPress={()=> this.handleLogin()}>
                                <Text>Login</Text>
                            </Button>
                        )}
                    </Form>
                </Content>
            </Container>
        )
    }
}
