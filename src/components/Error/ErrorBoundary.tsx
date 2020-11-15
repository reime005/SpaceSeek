import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNRestart from 'react-native-restart';

interface Props {}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  //eslint-disable-next-line
  componentDidCatch(error: any, errorInfo: any) {
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View
          style={{
            flex: 1,
            padding: 32,
            alignItems: 'center',
            backgroundColor: '#ff884d',
            justifyContent: 'center',
          }}>
          <StatusBar barStyle="light-content" />
          <Text
            style={{
              fontFamily: 'RobotoCondensed-Bold',
              fontSize: 24,
              color: '#fff',
              textAlign: 'center',
            }}>
            Something went wrong.{'\n'}The app will restart.
          </Text>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              RNRestart.Restart();
            }}
            style={{
              marginTop: 32,
              borderRadius: 32,
              paddingVertical: 16,
              paddingHorizontal: 32,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
            }}>
            <Text style={{ fontFamily: 'RobotoCondensed-Bold' }}>
              Press to restart
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}
