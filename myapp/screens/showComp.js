import { View,Text ,StyleSheet, TouchableOpacity} from "react-native"
import { doc, deleteDoc ,updateDoc} from "firebase/firestore";
import { db } from "./firebase";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const Auth=getAuth()



export const ShowComp=({item,visible,id,getAgain})=>{
 
const[visiblehere,setVisiblehere]=useState(visible)


const Delete=async()=>{
 
    await deleteDoc(doc(db, `${ Auth.currentUser?.email}` , id));
    getAgain();
}

const Update=async()=>{

    const onemsiz = doc(db, `${ Auth.currentUser?.email}` , id);
    await updateDoc(onemsiz, {
      visible:visiblehere
    });
  
   }

   useEffect(()=>{
       Update();
   },[visiblehere])
  

return(

    <View style={styles.container_1}>

               <Text style={{fontSize:24,fontWeight:"bold"}}>{item}</Text>

        <TouchableOpacity style={{position:"absolute",left:20}}  onPress={()=> Delete()}>
           <AntDesign name="delete" size={24} color="black" />
         </TouchableOpacity>

     <TouchableOpacity style={{position:"absolute",right:20}} onPress={()=> {setVisiblehere(pre =>!pre)} }>
        
       { visiblehere ? <AntDesign name="checkcircleo" size={24} color="black" />: <AntDesign name="checkcircle" size={24} color="green" />}
     </TouchableOpacity>

 </View>
)



}

const styles = StyleSheet.create({

    container_1:{
justifyContent:`center`,
alignItems:`center`,
backgroundColor:`#F6EF36`,
width:350,
height:50,
marginTop:4,
borderRadius:24,
flexDirection:`row`

    }
})