import React from 'react';

import navigationArr from 'Routes/Helper/navigationArr';
import NavItem from './NavItem';

const Navigation = () => {
  const renderNavigation = navigationArr.map((item => <NavItem {...item} key={item.id} />));

  return (
    <React.Fragment>
      {renderNavigation}
    </React.Fragment>
  );
};

export default Navigation;
