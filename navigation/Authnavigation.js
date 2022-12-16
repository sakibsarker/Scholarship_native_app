import { View, Text } from 'react-native'
import React from 'react'
import Tab from './Tab'
import Login from '../src/Login'
import Signup from '../src/Signup'
import Loginauth from './Loginauth'
const Authnavigation = () => {
    const user=false;
    if(user){
        return<Tab/>
    }
    else{
        return<Loginauth/>
        // return<Login/>
    }
  
}

export default Authnavigation



// const RootNavigation = () => {
//   const user = true;
//   if (user) {
//     return <HomeStack />;
//   } else {
//     return <AuthStack />;
//   }
// };

// export default RootNavigation;
