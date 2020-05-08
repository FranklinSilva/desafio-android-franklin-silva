import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, Platform, TouchableOpacity, Keyboard, TouchableHighlightBase} from 'react-native'
import Variables from '../styles';

export default class MainPagesHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={[this.props.styles, styles.container]}>
                <View style={{flexDirection: "row"}}>
                    <View style={styles.imageBox}>
                        <Image                     
                            style={{ 
                            //height: 150,
                            height: "auto",
                            width: 200}}
                            resizeMode="contain"
                            source={{uri: this.props.image}}/>
                    </View>
                    <View>
                        <Text style={styles.name}>{this.props.name}</Text>
                        <Text style={styles.description}>{this.props.description}</Text>
                    </View>
                </View>
              
                <TouchableOpacity onPress={() => this.props.goToDetails()} style={styles.buttonContainer}>
                    <Text stylle={styles.buttonContainerText}>See details</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Variables.colors.white,
        //backgroundColor: "#fff",
        borderRadius: 6,
        borderColor: Variables.colors.gray,
        //borderColor: "#a6a6a6",
        padding: 10
    },
    imageBox: {alignSelf: "center",},
    name: {
        color: Variables.colors.dark,
        //color: "#666",
        fontSize: 18,
        textAlign: "center",
        fontWeight: "600"
    },
    description: {
        color: Variables.colors.dark,
        //color: "#666",
        fontSize: 14,
        textAlign: "center",
        marginTop: 10
    },
    buttonContainer: {
        backgroundColor: Variables.colors.secondary,
        //backgroundColor: "#ffff00",
        padding: 10,
        marginVertical: 10
    },
    buttonContainerText: {
        backgroundColor: Variables.colors.white,
        //backgroundColor: "#fff",
        fontSize: 16,
    },
})


