import React from 'react';

import BreadcrumbList from './BreadcrumbList';

const Breadcrumbs = ({ props }) => {
  const { type } = props;

  switch (type) {
    case 'Episode': {
      const { season, name } = props;
      const items = [
        { name: 'TV Shows', url: '/series' },
        { name: season.series.name, url: `/series/${season.series.uuid}` },
        { name: season.name, url: `/season/${season.uuid}` },
        { name },
      ];

      return <BreadcrumbList items={items} />;
    }
    case 'Season': {
      const { series, name } = props;

      const items = [
        { name: 'TV Shows', url: '/series' },
        { name: series.name, url: `/series/${series.uuid}` },
        { name },
      ];

      return <BreadcrumbList items={items} />;
    }
    case 'Series': {
      const { name } = props;

      const items = [
        { name: 'TV Shows', url: '/series' },
        { name },
      ];

      return <BreadcrumbList items={items} />;
    }
    case 'Movie': {
      const { name } = props;

      const items = [
        { name: 'Movies', url: '/movies' },
        { name },
      ];

      return <BreadcrumbList items={items} />;
    }
    default:
      return false;
  }
};

export default Breadcrumbs;
