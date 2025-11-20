import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  // Ponto inicial do mapa (Exemplo genérico).
  // Depois vamos mudar para a latitude/longitude da sua universidade.
  const regiaoInicial = {
    latitude: -22.9068, // Exemplo: Rio de Janeiro
    longitude: -43.1729,
    latitudeDelta: 0.01, // Define o nível de zoom (quanto menor, mais zoom)
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      {/* O Componente MapView renderiza o mapa do Google/Apple */}
      <MapView 
        style={styles.map} 
        initialRegion={regiaoInicial}
      >
        {/* Vamos colocar um marcador fixo só para testar */}
        <Marker
          coordinate={{
            latitude: -22.9068,
            longitude: -43.1729,
          }}
          title="O Fantasmão"
          description="Localização atual simulada"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});