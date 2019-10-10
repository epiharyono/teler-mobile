import React, {Component} from 'react'
import {View, Container, Content, Form, Label, Item, Input, Button, Text, Spinner} from 'native-base'
import {AsyncStorage} from 'react-native'
import axios from 'axios'

export default class Login extends Component {

    static navigationOptions = {
        header: null,
    }

    state = {
      proses: false
    }

    async componentDidMount(){
        await AsyncStorage.removeItem('token')
        this.setState({ proses: false })
        this.props.navigation.push('HomeScreen')
    }

    render(){
        return (
            <Container>
                <Content>
                  <Spinner/>
                </Content>
            </Container>
        )
    }
}
