import React, {Component} from 'react'
import {Container, Content, Text, Button, List, ListItem, Spinner, Left, Right, Thumbnail, Body, Card, CardItem, Icon} from 'native-base'
import {connect} from 'react-redux'
import {AsyncStorage} from 'react-native'
import axios from 'axios'

import {allOrder} from '../_redux/actions/order'

export class TransaksiDetail extends Component {

    constructor(props){
        super(props);

        this.state = {
          title:'', url: '', token: '',
          tot_byr : 0,
          data: []
        }
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
        if(!token){
          this.props.navigation.navigate('HomeScreen')
        }
        this.props.dispatch(allOrder(url,token))
        this.setState({ url: url, token: token })
        // alert(JSON.stringify(this.props.order.data.tot_byr))
    }

    componentDidMount() {
      this._refetch()
    }

    async HandleOrder(act,id_menu){
        const {token, url } = this.state
        // const token = await AsyncStorage.getItem('token')
        const res = await axios.post(`http://teler.id/api/v1${url}`,{
            id_menu,
            act
        },{
            headers: {Authorization: `Bearer ${token}`},
        }).then((resp => {
            // alert(resp.data.info)
            // alert(JSON.stringify(resp))
            // this.setState({ tot_byr: resp.data.data.tot_byr })
            this._refetch()
        }))
        .catch(error => {
            alert(error)
        })

    }

    render() {
      const {sub_byr,ppn,tot_byr} = this.props.order.data
      let disabled = false
      if(tot_byr < 1){  disabled = true}
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
                              <Text>Total Rp. {tot_byr}</Text>
                            </CardItem>
                            <CardItem>
                              <Body>
                                  <Button disabled={disabled} iconLeft onPress={()=> this.props.navigation.navigate('TransaksiBayar', {url: this.state.url } )}  >
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
                                    <Thumbnail source={{ uri: c.pic }} />
                                  </Left>
                                  <Body>
                                    <Text>{c.uraian}</Text>
                                    <Text note>{c.harga}</Text>
                                  </Body>
                                  <Right>
                                    <Button
                                      rounded
                                      onPress={()=> this.HandleOrder('tambah',c.id)}
                                    >
                                      <Text>+</Text>
                                    </Button>
                                  </Right>
                                  <Right><Text> {c.jml_order} </Text></Right>
                                  <Right>
                                    <Button
                                        rounded
                                        danger
                                        onPress={()=> this.HandleOrder('kurang',c.id)}
                                    >
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
