export default {
  privateStack: {
    // headerStyle: {
    //   backgroundColor: '#eaeaea',
    //   elevation: 0,
    //   shadowOpacity: 0,
    // },
    headerBackground: null,
    // headerTitleStyle: {
    //   fontSize: 18,
    //   maxWidth: 220,
    //   alignSelf: 'center',
    // },
    // headerBackTitleVisible: false,
    headerLayoutPreset: 'center',
    // headerTintColor: '#fff',
    style: {
      backgroundColor: 'red',
    },
    headerRight: null,
  },
  tab: {},

  linking: {
    prefixes: ['https://myapp.com/app', 'myapp://app'],
    config: {
      screens: {
        AppMainNavigator: {
          screens: {
            //tab
            Home: {
              screens: {
                HomeScreen: {
                  path: 'home/:id',
                  parse: {
                    id: (id) => `${id}`,
                  },
                },
                First: {
                  path: 'home-first',
                },
                Second: {
                  path: 'home-second',
                },
              },
            },
            Setting: {
              screens: {
                Settings: {
                  path: 'settings',
                  parse: {
                    id: (id) => `${id}`,
                  },
                },
              },
            },

            //
          },
        },
        PrivateStackNavigator: {
          screens: {
            SignUp: {
              path: 'signup/:id',
              parse: {
                id: (id) => `${id}`,
              },
            },
          },
        },
        ModalFirst: {
          path: 'modal-first/:id',
          parse: {
            id: (id) => `${id}`,
          },
        },
      },
    },
  },
}
// myapp://feed/1
// https://myapp.com://feed/1
