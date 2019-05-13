import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ListWrap, ListItem } from './Styles';

const BreadcrumbList = ({ items }) => {
  const list = items.map((item) => {
    if (item.url) {
      return (
        <ListItem key={item.name}>
          <Link title={item.name} to={item.url}>{item.name}</Link>
        </ListItem>
      );
    }

    return <ListItem key={item.name}>{item.name}</ListItem>;
  });

  return (
    <ListWrap>
      { list }
    </ListWrap>
  );
};

BreadcrumbList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default BreadcrumbList;
