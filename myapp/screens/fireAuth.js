import { useEffect, useState } from "react";
import { auth } from "./firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { TextInput, TouchableOpacity, View,Text,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";



export const FireAut=()=>{

const nav = useNavigation();
const[email,setEmail]=useState(``);
const[password,setPassword]=useState(``);



   useEffect(()=>{
       const subscribe =auth.onAuthStateChanged(user=>{

         if(user){
              nav.navigate('main');
                        }   } )
      return subscribe
},[])






const SignIn=()=>{

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
 
    const user = userCredential.user;
    
  })
  .catch((error) => {
    console.log(error.code)  
    console.log(error.message)  
  });
   
}


const SingUp=()=>{

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     
      const user = userCredential.user;
     
    })
    .catch((error) => {
     console.log(error.code)  
     console.log(error.message)  
      
    });
}





return(

<View style={{flex:1,justifyContent:"center",alignItems:"center"}}> 
 <View> 

  <TextInput style={styles.text_input} placeholder="enter email"     value={email}     onChangeText={(elen)=> setEmail(elen)} inputMode="email" />
  <TextInput style={styles.text_input} placeholder="enter password"  value={password} onChangeText={(elen)=> setPassword(elen)} />

  </View>

     <View style={{ justifyContent:`space-between`,flexDirection:`row` ,width:300,marginTop:20}}>

<TouchableOpacity style={{backgroundColor:`black`,borderRadius:18}} onPress={()=>SignIn()}><Text style={{fontSize:32,fontWeight:"bold",color:`#00E5FA`}}>SignIn</Text></TouchableOpacity>
<TouchableOpacity  style={{backgroundColor:`black`,borderRadius:18}} onPress={()=>SingUp()}  ><Text style={{fontSize:32,fontWeight:"bold",color:`#00E5FA`}}>SignUp</Text></TouchableOpacity>

     </View>
</View>


)   
}

const styles =StyleSheet.create({

text_input:{

width:300,
height:50,
borderRadius:25,
backgroundColor:`#eaeaea`,
paddingLeft:120,
marginBottom:4,
borderWidth:2
}

})