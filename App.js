import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { StripeProvider } from "@stripe/stripe-react-native";
export default function App() {
  return (
    <>
     <StripeProvider publishableKey="pk_test_51MW0TFSE0J6Dbm0k8AUFjM4ZFoy7LpaaoesCTuksoNFTBNRBNQd2Z9A7dbirgPjnMND9MBlTtZu07zVA9OPeQqUC00k92fzJP2">
          <StackNavigator />
          <StatusBar style="light" />
      </StripeProvider>
    </>
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
