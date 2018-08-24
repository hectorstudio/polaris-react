const navigationArr = [
  {
    name: 'Libraries',
    id: 'libraries',
    links: [
      {
        name: 'Dashboard',
        to: '/dashboard',
        id: 'dashboard',
      },
      {
        name: 'Movies',
        to: '/movies',
        id: 'movies',
      },
      {
        name: 'Series',
        to: '/series',
        id: 'series',
      },
    ],
  },
  {
    name: 'Settings',
    id: 'settings',
    links: [
      {
        name: 'Users',
        to: '/users',
        id: 'users',
      },
      {
        name: 'Settings',
        to: '/',
        id: 'settings',
      },
    ],
  },
];

export default navigationArr;
