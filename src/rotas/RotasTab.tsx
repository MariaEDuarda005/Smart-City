import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Inicial } from '../telas/Inicial'
import { Usuarios } from '../telas/Usuarios'
import {AmbientesEquipamentos} from  '../telas/AmbientesEquipamentos'
import {Feather} from '@expo/vector-icons';
import {Localizador} from '../telas/Localizador';

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
                        <Feather 
                            name="home" 
                            size={size} 
                            color={color}
                        />
                    )
                }}
            />

            <Screen
                name='localizador'
                component={Localizador}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Feather 
                            name="map" 
                            size={size} 
                            color={color}
                        />
                    )
                }}
            />

            {/* <Screen
                name='usuarios'
                component={Usuarios}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Feather 
                            name="user" 
                            size={size} 
                            color={color}
                        />
                    )
                }}
            /> */}

            <Screen
                name='ambiente'
                component={AmbientesEquipamentos}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Feather 
                            name="compass" 
                            size={size} 
                            color={color} 
                        />
                    )
                }}
            />


        </Navigator>
    )
}