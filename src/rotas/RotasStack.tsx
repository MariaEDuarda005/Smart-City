import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../telas/Login'
import { Inicial } from '../telas/Inicial'
import { RotasTab } from './RotasTab'

const { Navigator, Screen } = createNativeStackNavigator()

export function RotasStack(){
    return(
        <NavigationContainer>

            <Navigator screenOptions={{ headerShown: false }}>

                <Screen
                    name='login'
                    component={Login}
                />

                <Screen
                    name='rotasTab'
                    component={RotasTab}
                />

            </Navigator>

        </NavigationContainer>
    )
}

// headerShown: false sumir com a tela de navegação
// name é o nome da nossa rota, relacionado com o caminho
// a ordem faz diferença