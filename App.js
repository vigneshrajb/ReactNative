import * as React from 'react';
import { Button, View , Text ,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/HomeScreen';
import ChatScreen from './Screens/ChatScreen';
import FindScreen from './Screens/FindScreen'; 
import StatusScreen from './Screens/StatusScreen';
import ContactScreen from './Screens/ContactScreen';
import CustomDrawer from './Drawer/CustomDrawer';


const  Tab = createBottomTabNavigator();


function Home() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle:{
          position: 'absolute',
          backgroundColor: 'white',
          borderRadius: 30,
          bottom:20,
          left: 10,
          right: 10,
          height:60,
          justifyContent: 'center',
          alignItems: 'center',                
      }
  }
  } >
      <Tab.Screen name='Feeds' component={HomeScreen}
      options={{
          tabBarIcon:({focused}) =>{
          return(
              <View>
              <Image 
              source={require('./assets/icons/hometab.png')}
              resizeMode='contain'
              style={{
                  width: 25,
                  height: 25,
                  tintColor: focused  ? 'black' :'grey',

              }}


              />

              </View>
          );
          }
      }}

      />
      <Tab.Screen name='Chat' component={ChatScreen}
      options={{
          tabBarIcon:({focused}) =>{
          return(
              <View>
              <Image 
              source={require('./assets/icons/chattab.png')}
              resizeMode='contain'
              style={{
                  width: 26,
                  height: 26,
                  tintColor: focused  ? 'black' :'grey',

              }}


              />

              </View>
          );
          }
      }}
      />
      <Tab.Screen name='Find' component={FindScreen}
      options={{
          tabBarIcon:({focused}) =>{
          return(
              <View>
              <Image 
              source={require('./assets/icons/searchtab.png')}
              resizeMode='contain'
              style={{
                  width: 25,
                  height: 25,
                  tintColor: focused  ? 'black' :'grey',

              }}


              />

              </View>
          );
          }
      }}
      />
      <Tab.Screen name='Settings' component={StatusScreen}
      options={{
          tabBarIcon:({focused}) =>{
          return(
              <View>
              <Image 
              source={require('./assets/icons/settingtab.png')}
              resizeMode='contain'
              style={{
                  width: 25,
                  height: 25,
                  tintColor: focused  ? 'black' :'grey',

              }}


              />

              </View>
          );
          }
      }}
      />


      

  </Tab.Navigator>
  );
}

const Stack = createStackNavigator();


function Contact() {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Phone" component={ContactScreen} />
    </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();

export default function drawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>}screenOptions={{drawerInactiveTintColor:'black', drawerActiveTintColor:'white', drawerActiveBackgroundColor:'#8000ff', drawerLabelStyle: {marginLeft:-20,fontSize:15}}} useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}
        options={{
          title: 'Home',
          drawerIcon: ({focused}) => {
            return(
             <View>
              <Image 
              source={require('./assets/icons/hometab.png')}
              resizeMode='contain'
              style={{
                  width: 25,
                  height: 25,
                  tintColor: focused  ? 'black' :'blue',

              }}


              />

              </View>
          );
            }
          
          }
        }
             
        />
        <Drawer.Screen name="Contact" component={Contact}
         options={{
          title: 'Contact',
          drawerIcon: ({focused}) => {
            return(
             <View>
              <Image 
              source={require('./assets/icons/contact.png')}
              resizeMode='contain'
              style={{
                  width: 25,
                  height: 25,
                  tintColor: focused  ? 'black' :'blue',

              }}


              />

              </View>
          );
            }
          
          }
        }
        />
        <Drawer.Screen name="Chat" component={ChatScreen}
        options={{
          title: 'Chat',
          drawerIcon: ({focused}) => {
            return(
             <View>
              <Image 
              source={require('./assets/icons/chattab.png')}
              resizeMode='contain'
              style={{
                  width: 25,
                  height: 25,
                  tintColor: focused  ? 'black' :'blue',

              }}


              />

              </View>
          );
            }
          
          }
        }
        />
        <Drawer.Screen name="Settings" component={StatusScreen}
         options={{
          title: 'Settings',
          drawerIcon: ({focused}) => {
            return(
             <View>
              <Image 
              source={require('./assets/icons/settingtab.png')}
              resizeMode='contain'
              style={{
                  width: 25,
                  height: 25,
                  tintColor: focused  ? 'black' :'blue',

              }}


              />

              </View>
          );
            }
          
          }
        }
        />

      </Drawer.Navigator>

    </NavigationContainer>
    
   
  );
}



