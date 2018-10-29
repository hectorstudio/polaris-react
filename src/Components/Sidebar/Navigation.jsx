import React, { Fragment } from 'react';

import navigationArr from 'Routes/Helper/navigationArr';
import NavItem from './NavItem';

const Navigation = () => {
  const renderNavigation = navigationArr.map((item => <NavItem {...item} key={item.id} />));

  return (
    <Fragment>
      {renderNavigation}
    </Fragment>
  );
};

export default Navigation;
