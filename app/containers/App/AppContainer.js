import React, { PropTypes, Component } from 'react'
import { View } from 'react-native'
import { PollsNavigator } from '~/containers'
import { PreSplash } from '~/components'

export default class AppContainer extends Component {
  static PropTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
  }
  static defaultProps = {
    isAuthenticating: false
  }
  render () {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true
          ? <PreSplash/>
          : <PollsNavigator /> }
      </View>
    )
  }
}
