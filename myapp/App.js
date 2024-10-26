  
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SingOut } from './screens/sinOut';
import { Main } from './screens/main';
import { FireAut } from './screens/fireAuth';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer >
<Stack.Navigator>

<Stack.Screen name='login' component={FireAut}/>
<Stack.Screen name='main' component={Main}/>
<Stack.Screen name='exit' component={SingOut}/>


</Stack.Navigator>
    </NavigationContainer>
   
  )
}

 