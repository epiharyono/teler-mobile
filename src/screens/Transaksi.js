import React, {Component} from 'react';
import {Container, Content, Text, Button, List, ListItem, Spinner, Left, Thumbnail, Body} from 'native-base'
import {AsyncStorage} from 'react-native'
import {connect} from 'react-redux'

import {allMeja} from '../_redux/actions/meja'

export  class Transaksi extends Component{

    static navigationOptions = {
        title: 'Transaksi',
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
        this.props.allMeja(token)
    }


    render(){
        return (
            <Container>
                <Content>
                    {this.props.meja.isLoading? (
                        <Spinner/>
                    )
                    : (
                        <List>
                            {this.props.meja.results.map(c=>(
                                <ListItem avatar
                                  key={c.id}
                                  onPress={()=> this.props.navigation.navigate('TransaksiDetail', {url: c.url, head: c.uraian } )}   
                                >
                                    <Left>
                                        <Thumbnail source={{ uri: `http://teler.id/${c.pic}` }} />
                                    </Left>
                                    <Body>
                                        <Text>{c.uraian}</Text>
                                    </Body>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Content>
            </Container>
        )
    }

}

const mapStateToProps = ({meja})=> ({
    meja
})

const mapDispatchToProps = {
    allMeja : (token)=> allMeja(token)
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaksi)
