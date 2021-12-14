import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'

export const MyContext = React.createContext()

export default class MyProvider extends Component {

    state = {
        token: '',
        saveToken: async () => {
            try {
                const resp = await AsyncStorage.setItem('userToken', 'abc');
                return resp;
            }
            catch (error) {
                this.setState({ error })
            }

        },

        removeToken: async () => {
            try {
                const resp = await AsyncStorage.removeItem('userToken');
                return resp
            }
            catch (error) {
                this.setState({ error })
            }
        },
        getToken: async () => {
            try {
                const resp = await AsyncStorage.getItem('userToken');
                return resp;
            }
            catch (error) {
                this.setState({ error })
            }
        }

    }


    componentWillMount() {
        AsyncStorage.getItem('usertoken')
            .then((token) => {
                this.setState({ token })
            })
            .catch(error => {
                this.setState({ error })
            })

    }
    render() {
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
