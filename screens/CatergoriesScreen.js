import {CATEGORIES} from '../data/dummy-data';
import {FlatList} from 'react-native';
import CatergoryGridTile from '../Components/CategoryGridTile';




function CatergoriesScreen({navigation}){

    
function renderCatergoryItem(itemData){
    function pressHandler(){
        navigation.navigate('MealsOverview',{
            categoryId:itemData.item.id,
        });
    }
    return <CatergoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler}/>;
}
    
    return <FlatList  
    data={CATEGORIES} 
    keyExtractor={(item) => item.id}
    renderItem ={renderCatergoryItem}
    numColumns={2}
    />
}

export default CatergoriesScreen;