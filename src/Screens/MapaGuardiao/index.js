import { StatusBar } from 'expo-status-bar';
import { View, Image, Pressable, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import MapView, { Marker } from 'react-native-maps';
import BottomNavGuardiao from '../../components/BottomNavGuardiao';

export default function MapaGuardiao() {
    const navigation = useNavigation();

    const localGuardiao = {
        latitude: -23.5505,
        longitude: -46.6333,
    };

    const localUsuaria = {
        latitude: -23.5480,
        longitude: -46.6300,
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <StatusBar style="dark" />

            <View style={{ flex: 1 }}>

                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: localGuardiao.latitude,
                        longitude: localGuardiao.longitude,
                        latitudeDelta: 0.02,
                        longitudeDelta: 0.02,
                    }}
                >

                    {/* GUARDIÃO */}
                    <Marker coordinate={localGuardiao}>
                        <View style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: '#87D3B6',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 3,
                            borderColor: '#FFFFFF'
                        }}>
                            <Image
                                source={require('../../../assets/imgHomeGuardiao/anjo.png')}
                                style={{
                                    width: 28,
                                    height: 28,
                                    tintColor: '#FFFFFF'
                                }}
                            />
                        </View>
                    </Marker>

                    {/* USUÁRIA */}
                    <Marker coordinate={localUsuaria}>
                        <View style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: '#4B0082',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 3,
                            borderColor: '#FFFFFF'
                        }}>
                            <Image
                                source={require('../../../assets/imgHomeGuardiao/perfil.png')}
                                style={{
                                    width: 28,
                                    height: 28,
                                    tintColor: '#FFFFFF'
                                }}
                            />
                        </View>
                    </Marker>

                </MapView>

            </View>


            <BottomNavGuardiao abaAtivaInicial={2} />
        </SafeAreaView>
    );
}
