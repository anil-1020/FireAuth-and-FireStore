import { View ,Text, Button, TouchableOpacity} from "react-native"
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
 
 
export const SingOut=()=>{
const nav =useNavigation();

 const Auth=getAuth()


const Exit=()=>{

Auth.signOut()
.then(()=>{nav.navigate('login')})

}

    return(

        <View style={{flex:1,backgroundColor:`#eaeaea`,justifyContent:"center",alignItems:"center"}}>


            <View style={{alignItems:"center",justifyContent:"center"}}> 

                       <Text style={{fontSize:44,textAlign:"center"}}> Are you sure to exit: </Text>
                       <Text style={{color:`red`,fontSize:34}}>{Auth.currentUser?.email}</Text>
             </View>

             <View style={{flexDirection:`row` ,justifyContent:`space-between`,width:250,marginTop:60}}>

                     <TouchableOpacity style={{borderWidth:3,borderRadius:20}} onPress={()=> nav.navigate('main')} >
                         <Text style={{fontSize:40}}>cancel</Text>
                     </TouchableOpacity>

                      <TouchableOpacity style={{borderWidth:3,borderRadius:20}}   onPress={()=> Exit()} >
                         <Text style={{fontSize:40}}>sure</Text>
                      </TouchableOpacity>

             </View>
            
         </View>
    )
}