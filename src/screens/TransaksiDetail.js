import React, {Component} from 'react'
import {Container, Content, Text, Button, List, ListItem, Spinner, Left, Thumbnail, Body} from 'native-base'
import {connect} from 'react-redux'
import axios from 'axios'

// import {allMessages} from '../_redux/actions/message'

export class TransaksiDetail extends Component {

    state = {
        title:'',
    }

    static navigationOptions = {
      headerTitle: 'Order',
    }

    _refetch(){
      const url = this.props.navigation.getParam('url')
      const head = this.props.navigation.getParam('head')
      // this.props.dispatch(allMessages(url))
    }

    componentWillMount() {
      this._refetch()
    }

    render() {
      return (
          <Container>
              <Content>
                <Spinner/>
              </Content>
          </Container>
      )
    }

}

const mapStateToProps = ({message})=> ({
  message
})

export default connect(mapStateToProps)(TransaksiDetail)
