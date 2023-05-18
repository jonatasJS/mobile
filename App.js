import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React, { useEffect } from 'react'
import * as Updates from 'expo-updates';

import Routes from './src/routes'

export default function App() {
  useEffect(() => {
    checkForUpdates();
  }, []);

  const checkForUpdates = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        // Executar qualquer lógica adicional antes de aplicar a atualização
        Updates.reloadAsync();
      }
    } catch (error) {
      console.error('Erro ao verificar atualizações:', error);
    }
  };

  return (
    <Routes />
  );
}
