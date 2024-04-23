import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from '../telas/Login'
import { Inicial } from '../telas/Inicial'

const { Navigator, Screen } = createNativeStackNavigator()

export function RotasStack(){
    return(
        <NavigationContainer>

            <Navigator>

                <Screen
                    name='login'
                    component={Login}
                />

                <Screen
                    name='inicial'
                    component={Inicial}
                />

            </Navigator>

        </NavigationContainer>
    )
}

// name é o nome da nossa rota, relacionado com o caminho
// a ordem faz diferença