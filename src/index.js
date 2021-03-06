import React, {Component} from 'react';
import {createRootNavigator} from './routes';
import {createAppContainer} from 'react-navigation';
import {StatusBar, View, Text, ActivityIndicator} from 'react-native';

import { Provider } from 'react-redux';
import store from './store';
import NavigationService from './services/navigationService';
import Variables from './styles';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    }
  }

  render() {
    const Layout = createAppContainer(createRootNavigator());
    if(this.state.loading){
      return (<View style={{flex: 1, backgroundColor: Variables.colors.primary, justifyContent: "center", alignItems: "center"}}>
                <StatusBar
          color="#fff"
          barStyle="light-content"
        />
        <ActivityIndicator size="small" color="#fafafa" />
      </View>)
    }
    else{
      return (
        <Provider store={store}>
          <Layout ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}>
              <StatusBar
                color="#fff"
                barStyle="light-content"
              />
          </Layout>
        </Provider>
      )
    };
  }
}

export default App;


