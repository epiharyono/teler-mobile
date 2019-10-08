import React, {Component} from 'react'
import {View, Container, Content, Form, Label, Item, Input, Button, Text, Spinner} from 'native-base'
import {AsyncStorage} from 'react-native'
import axios from 'axios'

export default class Login extends Component {

    static navigationOptions = {
        header: null,
    }

    async componentDidMount(){
        const token = await AsyncStorage.getItem('token')
        if(token){
          await AsyncStorage.removeItem('token')
        }
        this.props.navigation.navigate('Login')
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
