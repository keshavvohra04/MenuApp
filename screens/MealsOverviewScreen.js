import { View ,Text,StyleSheet,FlatList} from 'react-native';
import MealItemStyle from '../Components/MealItem';
// import { FlatList } from 'react-native-gesture-handler';
import {MEALS} from '../data/dummy-data';

function MealsOverviewScreen({route}){
    const catId=route.params.categoryId;
    const dispalyedMeals=MEALS.filter((mealitem)=>{
        return mealitem.categoryIds.indexOf(catId)>=0;
    });

    function RenderMealItem(itemData){
        return <MealItem title={itemData.item.title}/>;
    //     return  <View>
    //     <Text>{itemData.item.title}</Text>
    // </View>;

    }

    return<View style={styles.container}>
                <FlatList data={dispalyedMeals} keyExtractor={(item) => item.id} renderItem={RenderMealItem}/>
            </View>
};

export default MealsOverviewScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
});