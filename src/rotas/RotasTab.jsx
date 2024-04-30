import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Inicial } from '../telas/Inicial'
import { Usuarios } from '../telas/Usuarios'
import {AmbientesEquipamentos} from  '../telas/AmbientesEquipamentos'
import { House, Users, Compass, ArrowsInCardinal } from 'phosphor-react-native'

const { Navigator, Screen } = createBottomTabNavigator()

export function RotasTab(){
    return(
        <Navigator screenOptions={{
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#6c757d',
            tabBarStyle: {
                backgroundColor: '#4f030a',
                borderTopColor: 0,
                paddingBottom: 12,
                paddingTop: 12
            }
        }}>

            <Screen
                name='inicial'
                component={Inicial}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <House color={color} size={size}/>
                    )
                }}
            />

            <Screen
                name='usuarios'
                component={Usuarios}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Users color={color} size={size}/>
                    )
                }}
            />

            <Screen
                name='ambiente'
                component={AmbientesEquipamentos}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Compass color={color} size={size}/>
                    )
                }}
            />


        </Navigator>
    )
}