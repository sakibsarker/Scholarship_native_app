import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Home from "./src/Home";
import SclProgram from './src/SclProgram'
import SelectCountry from './src/SelectCountry'
import SchInfo from './src/SchInfo'
import Tab from './navigation/Tab'
import Authnavigation from "./navigation/Authnavigation";
import Loginauth from "./navigation/Loginauth";
export default function App() {
  return (
    <>
    <NavigationContainer>
    {/* <Tab/> */}
    <Authnavigation/>
    </NavigationContainer>
    
    </>
  );
}
