/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import { Tabs, Tab, Icon, Button } from 'react-native-elements';
import { Navbar } from '../../components';

class ChatRoomsPage extends Component {
    renderRooms() {
        const { roomViewStyle, descriptionStyle, activeStyle, titleStyle } = styles;
        return this.props.rooms.map((room, index) => {
            const { key, img,  description, active, name } = room;
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
                                <Text style={titleStyle}>
                                    { name }
                                </Text>
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
    titleStyle: {
        fontSize: 20
    },
    descriptionStyle: {
        fontSize: 15
    },
    activeStyle: {
        fontSize: 10
    }
}

const mapStateToProps = (state) => (
    {
        rooms: state.rooms
    }
);

export default connect(mapStateToProps, null)(ChatRoomsPage);
/* eslint-enable */
