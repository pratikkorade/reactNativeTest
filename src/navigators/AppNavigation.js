import { createStackNavigator} from 'react-navigation'
import login from '../components/login'
import dashboard from '../components/dashboard'
import auth from '../services/auth'


// const initialStack = createStackNavigator({
//     splash : {screen : Splash},
// },
// {
//     headerMode:'none',
//     initialRouteName: 'splash'
// })

// export const AppNavigation = createStackNavigator({
//     Login : {screen: login},
//     Dashboard : {screen : dashboard}
// }, {
//     initialRouteName :'Login'
// })




// Manifest of possible screens
export const AppNavigation = createStackNavigator({  
    Login : {screen: login},
    Dashboard : {screen : dashboard},
    Auth :{screen : auth}
},

{
    headerMode: 'none',
    initialRouteName: 'Login',
    // navigationOptions:{
    //     gesturesEnabled: true,
    // }
})

// export default App;
