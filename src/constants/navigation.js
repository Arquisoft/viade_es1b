/**
 * Object mapping of known possible inboxes for the user
 */
export const NavigationItems = [
  {
    id: 'welcome',
    icon: '/img/icon/apps.svg',
    label: 'navBar.welcome',
    to: '/welcome'
  },
  {
    id: 'profile',
    icon: '/img/people.svg',
    label: 'navBar.profile',
    to: '/profile'
  },
  {
    id: 'map',
    icon: '/img/icon/map.svg',
    label: 'navBar.map',
    to: '/map'
  },

  {
    id: 'upload',
    icon: '/img/icon/upload.svg',
    label: 'navBar.upload',
    to: '/upload'
  },

  {
    id: 'download',
    icon: '/img/icon/download.svg',
    label: 'navBar.download',
    to: '/download'
  }

];

export const ProfileOptions = [
  {
    label: 'navBar.profile',
    onClick: 'profileRedirect',
    icon: 'cog'
  },
  {
    label: 'navBar.logOut',
    onClick: 'logOut',
    icon: 'lock'
  }
];
