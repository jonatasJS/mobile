import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import React, { useEffect } from 'react'
import * as Updates from 'expo-updates';

import Routes from './src/routes'

// Checar se há atualizações disponíveis
const checkForUpdates = async () => {
  const { isAvailable } = await Updates.checkForUpdateAsync();
  if (isAvailable) {
    updateApp();
  }
};

// Atualizar para a versão mais recente
const updateApp = async () => {
  await Updates.fetchUpdateAsync();
  Updates.reloadAsync();
};


export default function App() {
  useEffect(() => {
    checkForUpdates();
  })

  return (
    <Routes />
  );
}
