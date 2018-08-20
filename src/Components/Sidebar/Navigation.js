import React, { Component } from 'react';

import navigationArr from 'Routes/Helper/navigationArr';
import NavItem from './NavItem';

class Navigation extends Component {
  render() {
    const renderNavigation = navigationArr.map((item, i) => <NavItem {...item} key={i} />);

    return (
      <React.Fragment>
        {renderNavigation}
      </React.Fragment>
    );
  }
}

export default Navigation;
