import React from "react";
import {View , Text, ImageBackground ,Image, EdgeInsetsPropType} from 'react-native';
import {DrawerContentScrollView,DrawerItemList  } from "@react-navigation/drawer";

const CustomDrawer = (props)=> {
    return(
        <View style={{flex:1}} >
        <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'#8000ff',paddingTop:0 }}>
            <ImageBackground source={require('../assets/drawerbg/menu.jpg') } style={{padding:30}}>
                <Image 
                source={require('../assets/drawerbg/profilepic.jpg')} 
                style={{height: 80 , width: 80 , borderRadius: 40 , marginBottom: 10}}
                />
                <Text style={{color:'white',fontSize:18, fontFamily:'Roboto-Medium'}}>Vignesh Raj</Text>
            </ImageBackground>
            <View style={{flex:1, backgroundColor:'white',paddingTop:10}}>
            <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>

        </View>
    )
}

export default CustomDrawer;