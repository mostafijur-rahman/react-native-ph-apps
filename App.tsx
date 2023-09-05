import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';

import DepositChallanCreateEdit from './components/deposit_challan/CreateEdit';
import DepositChallanList from './components/deposit_challan/List';

function App() {
  return (
    <SafeAreaView>
        <DepositChallanList/>
    </SafeAreaView>
  );
}


export default App;