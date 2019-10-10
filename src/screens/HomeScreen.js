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

    state = {
      'isLogin' : true
    }


    async componentDidMount(){
        const token = await AsyncStorage.getItem('token')
        if(!token){
          this.setState({ isLogin: false })
        }else{
          this.setState({ isLogin: true })
        }


    }

    componentWillUnmount(){
        // alert('Home sc')
    }

    render(){
        return (
            <Container>
              <Content>

                <Card>
                    <CardItem>
                      <Icon active name="cart" />
                      <Text onPress={()=> this.props.navigation.navigate('Transaksi')}>Transaksi </Text>
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
                        <Text onPress={()=> this.props.navigation.navigate('Printer')}>Printer </Text>
                        <Right>
                          <Icon name="arrow-forward" />
                        </Right>
                       </CardItem>

                       <CardItem>
                           <Icon active name="unlock" />
                           {this.state.isLogin? (
                               <Text onPress={()=> this.props.navigation.push('Logout')}>Logout</Text>
                           )
                           : (
                               <Text onPress={()=> this.props.navigation.push('Login')}>Login</Text>
                           )}
                           <Right>
                             <Text>{this.state.isLogin}</Text>
                             <Icon name="arrow-forward" />
                           </Right>
                        </CardItem>
                 </Card>
              </Content>
            </Container>


        )
    }
}
