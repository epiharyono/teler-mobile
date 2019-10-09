import React, {Component} from 'react'
import {Container, Content, Text, Button, List, ListItem, Spinner, Left, Right, Thumbnail, Body, Card, CardItem, Icon} from 'native-base'
import {connect} from 'react-redux'
import {AsyncStorage} from 'react-native'
import axios from 'axios'

import {allOrder} from '../_redux/actions/order'

export class TransaksiDetail extends Component {

    state = {
        title:'',
    }

    static navigationOptions = {
        headerTitle: 'Order Rinci',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }

    async _refetch(){
        const url = this.props.navigation.getParam('url')
        const head = this.props.navigation.getParam('head')
        const token = await AsyncStorage.getItem('token')
        this.props.dispatch(allOrder(url,token))

    }

    componentWillMount() {
      this._refetch()
      console.log('Menu LOG : ',this.props.order.results);
    }

    render() {
      return (
          <Container>
              <Content>
                  {this.props.order.isLoading? (
                      <Spinner/>
                  )
                  : (
                      <List>

                          <Card>
                            <CardItem header>
                              <Text>Sub Total Rp. {this.props.order.data.bayar}</Text>
                            </CardItem>
                            <CardItem>
                              <Body>
                                  <Button iconLeft>
                                    <Icon name='cart' />
                                    <Text>Bayar</Text>
                                  </Button>
                              </Body>
                            </CardItem>
                            <CardItem footer>
                              <Text>Menu</Text>
                            </CardItem>
                         </Card>

                          {this.props.order.menus.map(c=>(
                              <ListItem avatar
                                key={c.id}
                              >
                                  <Left>
                                    <Thumbnail source={{ uri: 'Image URL' }} />
                                  </Left>
                                  <Body>
                                    <Text>{c.uraian}</Text>
                                    <Text note>{c.harga}</Text>
                                  </Body>
                                  <Right>
                                    <Button rounded>
                                      <Text>+</Text>
                                    </Button>
                                  </Right>
                                  <Right><Text> 12 </Text></Right>
                                  <Right>
                                    <Button rounded danger>
                                      <Text>-</Text>
                                    </Button>
                                  </Right>
                              </ListItem>
                          ))}
                      </List>
                  )}


              </Content>
          </Container>
      )
    }

}

const mapStateToProps = ({order})=> ({
  order
})


export default connect(mapStateToProps)(TransaksiDetail)
