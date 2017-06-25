/* eslint-disable */
import React, { Component } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { Tabs, Tab, Icon } from 'react-native-elements';
import { Navbar } from '../../components';


class ChatRoomsPage extends Component {
    renderRooms() {
        rooms = [{
                key: 0,
                img: 'http://i1.kym-cdn.com/entries/icons/facebook/000/019/301/0dc.jpg',
                description: 'I will destroy ISIS'
            }, {
                key: 1,
                img: 'http://i3.kym-cdn.com/photos/images/original/001/045/025/a90.png',
                description: 'We have a Linda'

            }];

        const { roomViewStyle } = styles;
        return rooms.map((room, index) => {
            const { key, img,  description} = room;
            return (
                <View 
                    style={roomViewStyle}
                    key={index}
                    onClick={() => console.log("fuck this shit")}>
                    <Image
                        style={{width:64, height:64}}
                        source={{uri:img}}
                        />
                    <View style={{
                            alignItems:'flex-start',
                            padding:16,
                            justifyContent:'center'
                        }}>
                        <Text>{description}</Text>
                    </View>
                </View>
            );
        });
    }

    render() {
        return (
            <View>
                <Navbar title='Chat Rooms' />
                <ScrollView>
                    {this.renderRooms()}
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
    }
}

export default ChatRoomsPage;
/* eslint-enable */
