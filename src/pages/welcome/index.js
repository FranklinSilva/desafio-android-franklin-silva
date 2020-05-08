import React, { Component } from 'react';
import {View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import styles from './styles';

import Character from '../../components/Character';
import Variables from '../../styles';
//redux things
import {connect} from 'react-redux';

import * as charactersActions from '../../actions/characters';
import { bindActionCreators } from 'redux';


class Welcome extends Component {
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
        this.state = {
            list: [],
            isLoading: false,
            fetchFailed: false
        }
    }

 

    componentDidMount(){
        this.getCharacters()
    }

    getCharacters = () => {
        this.setState({isLoading: true})
        this.props.getCharacters()
        .then(() => {
            this.setState({isLoading: false});
        })
        .catch(() => {
            this.setState({isLoading: false, fetchFailed: true});
        });
    }

    goToDetails=(item) => {
        this.props.navigation.navigate('Character', {character: item});
    }

    renderContacts = ({item, index}) => {
        return (
            <Character
                name={item.name}
                description={item.description}
                image={item.thumbnail.path}
                goToDetails={() => this.goToDetails(item)}
            />
            )
    }


    render() {
        return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Character List</Text>
            </View>

            {this.state.isLoading &&
                <View style={{flexDirection: "row", justifyContent: "center", marginTop: 20}}>
                    <ActivityIndicator size="small" color={Variables.colors.dark} />
                    <Text style={{fontSize: 14, color: Variables.colors.dark, marginLeft: 5}}>Loading Characters</Text>
                </View>
            }

            {this.state.fetchFailed && !this.state.isLoading &&
            <View style={{alignItems: "center", justifyContent: "center", marginTop: 20}}>
                <Text style={{fontSize: 14, color: Variables.colors.dark, marginLeft: 5}}>Search has failed</Text>
                <TouchableOpacity style={{backgroundColor: Variables.colors.secondary, padding: 10, width: 100, marginTop: 10}} onPress={() => this.getCharacters()}>
                    <Text style={{color: Variables.colors.white, textAlign: "center", fontSize: 12}}>Try Again</Text>
                </TouchableOpacity>
            </View>}

            <View style={{backgroundColor: Variables.colors.lighter}}>
                <FlatList 
                    ref={(ref) => { this.flatListRef = ref; }}
                    data={this.props.characters.results}
                    keyExtractor={(item, index) => index + ""}
                    renderItem={this.renderList}
                    extraData={this.state}
                    inverted={false}
                    initialNumToRender={3}
                    horizontal={false}/>   
            </View>
        </View>
        );
    }

}

const mapStateToProps = state => ({
    characters: state.characters,
})

const mapDispatchToProps = dispatch => 
bindActionCreators({...charactersActions}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
