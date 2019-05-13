import React, { Fragment } from 'react';

import { Auth } from 'Client/Auth';
import navigationArr from 'Routes/Helper/navigationArr';
import NavItem from './NavItem';

const Navigation = () => {
  const renderNavigation = navigationArr.map((item) => {
    if (item.admin && !Auth.isAdmin) return false;

    return <NavItem {...item} key={item.id} />;
  });

  return (
    <Fragment>
      {renderNavigation}
    </Fragment>
  );
};

export default Navigation;
