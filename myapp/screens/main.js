
import { useEffect, useState } from "react"
import { View,Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Button } from "react-native"
import "firebase/firestore";
import { collection, addDoc ,getDocs  } from "firebase/firestore"; 
import { ShowComp } from "./showComp";
import { db } from "./firebase";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
 

import { getAuth } from "firebase/auth";
const Auth=getAuth()


export const Main=()=>{
const nav =useNavigation();
const[make,setMake]=useState(``);
const[data,setData]=useState([]);
 
 Auth.currentUser?.email

 const AddData=async()=>{
 
    try { 
       
        const docRef = await addDoc(collection(db, `${ Auth.currentUser?.email}`), {
           
            visible:false,
            veri:make
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}


const arr=[]

const ReadData= async()=>{

     const querySnapshot = await getDocs(collection(db, `${ Auth.currentUser?.email}`));
    querySnapshot.forEach((doc) => { arr.push({bili:doc.data(),id:doc.id})  
      console.log(" => ", doc.data());
      console.log(`arr:` +arr)
      setData(arr)
    });
}

useEffect(()=>{     
    ReadData();  
},[make])
 
  


    return(
<View style={{flex:1}}>
 

    <View style={{flexDirection:`row` ,justifyContent:"center",alignItems:"center",marginTop:20}}>

        <TextInput style={styles.container_1} placeholder="please enter your duty" value={make} onChangeText={(elen)=> setMake(elen)} />

         <TouchableOpacity style={styles.opacity} onPress={()=> {  AddData(),setMake(``)} }>
           <Text style={{fontSize:30}}>+</Text> 
         </TouchableOpacity>


     </View>


    <FlatList
       data={data}
          renderItem={({item})=> <ShowComp  item={item.bili.veri} visible={item.bili.visible}  id={item.id} getAgain={()=>ReadData()}  />}
                                                                   />


  
        <TouchableOpacity style={styles.opacity_1 }  onPress={()=> nav.navigate('exit')}>
             <Text style={{fontSize:24}}>EXIT</Text>
             <Ionicons name="exit" size={24} color="black" />
        </TouchableOpacity>
 
   
</View>

    )
}

const styles =StyleSheet.create({
container_1:{

backgroundColor:`#eaea`,
width:300,
height:50,
borderRadius:25,
paddingLeft:75
},
opacity:{

    backgroundColor:`#00E5FA`, 
    width:40,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    borderWidth:3

},
opacity_1:{
    backgroundColor:`red`, 
    justifyContent:"center",
    alignItems:"center",
    width:90,
    flexDirection:`row`,
    position:`absolute`,
    bottom:30,
    right:2

}


})