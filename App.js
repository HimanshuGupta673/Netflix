import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { StripeProvider } from "@stripe/stripe-react-native";
import { ProfileContext } from './Context';
export default function App() {
  return (
    <>
    <ProfileContext>
     <StripeProvider publishableKey="pk_test_51NeZx7SEM8ReiHhLiGNRi4kmmjNu2ogn5bONGb22SvnqNuuLIanQLrkWCQjt6cI31YZ1THg50moC9s6nwcaUXnG400KqvEvt3l">
          <StackNavigator />
          <StatusBar style="light" />
      </StripeProvider>
    </ProfileContext>
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
