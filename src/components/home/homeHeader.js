import React from 'react';

import ReactDOM from 'react-dom';

import { NavBar, Icon } from 'antd-mobile';

import './less/homeHeader.less';

export default class HomeHeader extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selected: '',
        };
    }

    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
        visible: false,
        selected: opt.props.value,
        });
    };

    handleVisibleChange = (visible) => {
        this.setState({
        visible,
        });
    };

    render() {
    return (<div>
      <NavBar
        
      >
        生活圈
      </NavBar>
    </div>);
  }
}