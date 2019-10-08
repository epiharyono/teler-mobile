import React, {Component} from 'react'
import {AsyncStorage} from 'react-native'
import {Container, Content, Button, Icon, View, Text, Card, CardItem, Body, Footer, FooterTab, Right} from 'native-base'

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Halaman Utama ',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: null
    }


    async componentDidMount(){
        const token = await AsyncStorage.getItem('token')
        if(!token){
          this.props.navigation.navigate('Login')
        }
    }

    render(){
        return (
            <Container>
              <Content>

                <Card>
                    <CardItem>
                      <Icon active name="cart" />
                      <Text onPress={()=> this.props.navigation.navigate('Transaksi')}>Transaksi</Text>
                      <Right>
                        <Icon name="arrow-forward" />
                      </Right>
                     </CardItem>

                     <CardItem>
                       <Icon active name="menu" />
                       <Text>Menu</Text>
                       <Right>
                         <Icon name="arrow-forward" />
                       </Right>
                      </CardItem>

                      <CardItem>
                        <Icon active name="print" />
                        <Text onPress={()=> this.props.navigation.navigate('Icon')}>Printer</Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                       </CardItem>

                       <CardItem>
                         <Icon active name="unlock" />
                         <Text onPress={()=> this.props.navigation.navigate('Logout')}>Logout</Text>
                         <Right>
                           <Icon name="arrow-forward" />
                         </Right>
                        </CardItem>
                 </Card>
              </Content>
            </Container>


        )
    }
}
