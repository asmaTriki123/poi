import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homme from './Screen/homme'
import OnBoardScreenL from './Screen/homme2';
import Login from './Screen/login';
const Stack = createStackNavigator();
import Register from './Screen/inscri';
import Liste_stas from './Screen/client/liste';
import EspaceClient from './Screen/client/espaceClient';
import Dashboard from './Screen/dashboard';
import Commentaire from './Screen/Commentaire';
import Reservation from './Screen/reservation';
import Koko from './Screen/client/rese';
import Update from './Screen/update';
import ReservationU from './Screen/client/reservations';
import MapStation from './Screen/client/MapStation';
import Signin from './Screen/log';

import Profile from './Screen/client/profile';
import RegisterClient from './Screen/client/registerC';
import LoginC from './Screen/client/LoginC';
import ForgotPass from './Screen/forgotPass';
import HistoriqueReservation from './Screen/DashHistorique';  
import StationData from './Screen/client/informationStation';
import App7 from './Screen/client/liste';
import AddReservation from './Screen/client/ajoutReservation';
import App5 from './Screen/res';
import NewReservation from './Screen/client/NewReservation';
import ReservationStation from './Screen/ReservationStation';
import MesReservation from './Screen/client/MesReservation';
import OnrReservation from './Screen/client/oneReserva';
import Reservationclient from './Screen/client/resevationclient';
import NewReservationMap from './Screen/client/reservationMap';
import {Splash} from './Screen/splash';

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Homme' screenOptions = {{ headerShown : false}}>
      {/* <Stack.Screen name='Home' component={Homme} options={{ headerShown: false }} />*/}
      <Stack.Screen name="Splash" component= {Splash} />
        <Stack.Screen name='OnBoardScreenL' component={OnBoardScreenL}    options={{
   gestureEnabled: false
            }}/>
        <Stack.Screen name='Rerse' component={ReservationU}options={{ headerShown: false }} />
                <Stack.Screen name='mapstation' component={MapStation}options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='addreservation' component={AddReservation} />
        <Stack.Screen name='mapRes' component={NewReservationMap} />
        <Stack.Screen name='oneReservation' component={OnrReservation} />
        <Stack.Screen name='Liste_stas' component={Liste_stas} />
        <Stack.Screen name='signin' component={Signin} />
        
        <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name='Commentaire' component={Commentaire} options={{ headerShown: false }} />
        <Stack.Screen name='Reservation' component={Reservation} />
      
    
        <Stack.Screen name='Update' component={Update} />
        <Stack.Screen name='forgot' component={ForgotPass} />
        <Stack.Screen name='registerC' component={RegisterClient} options={{ headerShown: false }} />
        <Stack.Screen name='LoginC' component={LoginC} options={{ headerShown: false }} />
        <Stack.Screen name='espaceClient' component={EspaceClient} options={{ headerShown: false }} />
        <Stack.Screen name='profile' component={Profile} />
        <Stack.Screen name='newreservation' component={NewReservation} />
        <Stack.Screen name='mesreservation' component={MesReservation} />
        <Stack.Screen name='reservationstation' component={ReservationStation} />
        <Stack.Screen name='reserv' component={App5} />
        <Stack.Screen name='reservationConfirmé' component={HistoriqueReservation} />
        <Stack.Screen name='resclient' component={Reservationclient} />
        <Stack.Screen name='stationData' component={StationData} />
      </Stack.Navigator>
    </NavigationContainer>
  /*  <View>
      <Koko/>
    </View>*/





  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
