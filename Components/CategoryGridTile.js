import { Pressable, View, Text,StyleSheet } from "react-native";


function CatergoryGridTile({title,color,onPress}){
return<View style={styles.gridItem}>
    <Pressable android_ripple={{color:'#F9302',shadowOpacity:'0.15'}} style={styles.button} onPress={onPress}>
        <View style={[styles.innerContainer ,{backgroundColor:color}]}>  
            <Text style={styles.title}>{title}</Text>
        </View>
    </Pressable>
</View>
}

const styles=StyleSheet.create({

    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        backgroundColor:'white',
        overflow:'hidden'

    },

    innerContainer:{
        flex:1,
        padding:16,
        justifyContent:'center',
        alignItems:'center',

    },

    button:{
        flex:1,
    },

    title:{
        fontSize:18,
        fontWeight:'bold'
    }
});

export default CatergoryGridTile;