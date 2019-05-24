import React from 'react';
import {SafeAreaView, Text, Image, AsyncStorage, FlatList, TouchableOpacity, View} from 'react-native';
import User from '../User';
import firebase from 'firebase';
import styles from '../constants/styles';

export default class HomeScreen extends React.Component {
    static navigationOptions = (navigation) => {
        return{
            title: 'Chats',
            headerRight: (
                <TouchableOpacity onPress={() => navigation.navigate('Profile', item)} >
                    <Image source={require('../images/user.png')} style={{width:32, height:32, marginRight: 7}}/>
                </TouchableOpacity>
            )
        }
    }

    state = {
        users: []
    }

    componentWillMount() {
        let dbRef = firebase.database().ref('users');
        dbRef.on('child_added', (val) => {
            let person = val.val();
            person.phone = val.key;
            this.setState((prevState) => {
                return {
                    users: [...prevState.users, person]
                }
            })
        })
    }

    _logOut = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }

    renderRow = ({item}) => {
        return(
            <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('Chat', item)}
                style={{ padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 20 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
  render() {
    return (
      <SafeAreaView>
           <FlatList
            data={this.state.users}
            renderItem={this.renderRow}
            keyExtractor={(item) => item.phone}
           />
      </SafeAreaView>
    );
  }
}

// Removed Code this is needed for multiple users.
// Line 21
// if(person.phone === User.phone) {
//     User.name = person.name
// } else {
//     this.setState((prevState) => {
//         return {
//             users: [...prevState.users, person]
//         }
//     })
// }