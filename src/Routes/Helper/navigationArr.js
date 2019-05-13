const navigationArr = [
  {
    name: 'Libraries',
    id: 'libraries',
    admin: false,
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
        name: 'TV Shows',
        to: '/series',
        id: 'series',
      },
    ],
  },
  {
    name: 'Settings',
    id: 'settings',
    admin: true,
    links: [
      {
        name: 'Users',
        to: '/users',
        id: 'users',
      },
    ],
  },
];

export default navigationArr;
