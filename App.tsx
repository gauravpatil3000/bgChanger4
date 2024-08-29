
import {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';




function App(): React.JSX.Element {
const [randomBackground,setRandomBackground] = useState("#ffffff")

const generateColor=()=>{
  const hexRange="1234556778AJFOASJ"
  let color ="#"
  for (let i = 0; i < 6; i++) {
    color += hexRange[Math.floor(Math.random()*16)];
    
  }
  setRandomBackground(color)
}
  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container,{backgroundColor:randomBackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnTxt}>Fruit-Basket</Text>
          </View>
        </TouchableOpacity>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  actionBtn:{
   borderRadius:12,
    backgroundColor:"#F3B63A",
   paddingVertical:10,
   paddingHorizontal:40
  },
  actionBtnTxt:{
    fontSize:24,
    color:"white",
    textTransform:"uppercase"
  }

});

export default App;
