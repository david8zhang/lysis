/* eslint-disable */
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { Tabs, Tab, Icon, Button } from 'react-native-elements';
import { Navbar } from '../../components';

class ChatRoomsPage extends Component {
    renderRooms() {
        rooms = [{
                key: 0,
                img: 'https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png',
                description: 'Chat Room 1',
                active: '3 People Active'
            }, {
                key: 1,
                img: 'https://maxcdn.icons8.com/Share/icon/Users//user_male_circle_filled1600.png',
                description: 'Chat Room 2',
                active: '3 People Active'
            }];

        const { roomViewStyle, descriptionStyle, activeStyle } = styles;
        return rooms.map((room, index) => {
            const { key, img,  description, active} = room;
            return (
                <TouchableOpacity onPress={() => Actions.chat()} key={index}>
                    <View 
                        style={roomViewStyle}
                    >
                        <Image
                            style={{ width:64, height:64 }}
                            source={{ uri:img }}
                        />
                        
                            <View style={{
                                alignItems:'flex-start',
                                padding:16,
                                justifyContent:'center'
                            }}>
                                <Text style={descriptionStyle}>
                                    {description}
                                </Text>
                                <Text style={activeStyle}>
                                    {active}
                                </Text>
                            </View>
                    </View>
                </TouchableOpacity>

            );
        });
    }

    render() {
        return (
            <View>
                <Navbar title='Chat Rooms' />
                <ScrollView>
                    {this.renderRooms()}
                    <Button 
                        onPress={() => Actions.new()}
                        title='Create New Room'
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    roomViewStyle: {
        backgroundColor:'#eeeeee',
        margin:4,
        padding:4,
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    descriptionStyle: {
        fontSize: 20
    },
    activeStyle: {
        fontSize: 10
    }
}

export default ChatRoomsPage;
/* eslint-enable */
