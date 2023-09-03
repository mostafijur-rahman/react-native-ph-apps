import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';

import DepositChallanCreateEdit from './components/deposit_challan/CreateEdit';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>

        <DepositChallanCreateEdit/>
        
      </ScrollView>
    </SafeAreaView>
  );
}


export default App;