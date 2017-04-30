import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { FooterTabs } from '~/components'
import { connect } from 'react-redux'
import { setFooterTab } from '~/redux/modules/activeFooterTab'

export default class FooterTabsContainer extends Component {
  static propTypes = {
    activeFooterTab: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  state = {}
  render () {
    return (
      <FooterTabs
      onTabSelect-{(tab) => this.props.dispatch(activeFooterTab(tab))}
      activeFooterTab={this.props.activeFooterTab}/>
    )
  }
}

function mapStateToProps ({activeFooterTab}) {
  return {
    activeFooterTab
  }
}

export default conect(mapStateToProps)(
  FooterTabsContainer)
