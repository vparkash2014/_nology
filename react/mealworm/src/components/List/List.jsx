
import Card from './../Card';


// const List = (props) => {
//     const {recipes, alternateCard} = props

//     const getCardAlternating = (dish) => {
//         return(
//             <>
//                 <CardFront key={dish.IdMeal} dishInformation={dish} />;
//                 <CardBack key={dish.IdMeal} dishInformation={dish} />;
//             </>
//         )
//     };

//     const getCard = (recipes) => {
//         return (
//             <>
//                 {recipes.map(dish => <CardFront key={dish.IdMeal} dishInformation={dish} /> )}; 
//                 {recipes.map(dish => <CardBack key={dish.IdMeal} dishInformation={dish} /> )};
//             </> 
//         );
//     }
//     console.log(recipes)
//     return (
//         <>
//             {alternateCard ? recipes.map(dish => getCardAlternating(dish)) : getCard(recipes)}
//         </> 
//     );
// }

const List = ({ recipes }) => {

    return (
        <div>
            {recipes.map(dish => <Card key={dish.IdMeal} dishInformation={dish} /> )}
        </div> 
    );
}



export default List;