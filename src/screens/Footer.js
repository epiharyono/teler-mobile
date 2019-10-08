import React, {Component} from 'react'
import {AsyncStorage} from 'react-native'
import {Container, Content, Button, Icon, View, Text, Card, CardItem, Body, Footer, FooterTab} from 'native-base'

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Footer',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }


    async componentDidMount(){
        const token = await AsyncStorage.getItem('token')
        // this.props.allChannels(token)
    }

    render(){
        return (
            <Container>
              <Content></Content>

                <Footer>
                  <FooterTab>
                    <Button>
                      <Icon name="apps" />
                    </Button>
                    <Button>
                      <Icon name="camera" />
                    </Button>
                    <Button active>
                      <Icon active name="navigate" />
                    </Button>
                    <Button>
                      <Icon name="person" />
                    </Button>
                  </FooterTab>
                </Footer>


            </Container>


        )
    }
}
