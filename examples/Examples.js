/**
 * Created by liuyu on 2017/1/18.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import Hud from 'react-native-lyhud'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 50,
        alignItems: 'center'
    },
    text: {
        padding: 8
    }
});

export default class Examples extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            hudType:null,
            textOnly:false,
            source:null,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    onPress={()=>{
                        this.setState({
                            hudType:'info'
                        });
                        this.hud.show('info hud')
                    }}
                    style={styles.text}
                >
                    info hud
                </Text>
                <Text
                    onPress={()=>{
                        this.setState({
                            hudType:'success'
                        });
                        this.hud.show('success hud')
                    }}
                    style={styles.text}>
                    success hud
                </Text>
                <Text
                    onPress={()=>{
                        this.setState({
                            hudType:'error'
                        });
                        this.hud.show('error hud')
                    }}
                    style={styles.text}>
                    error hud
                </Text>
                <Text
                    onPress={()=>{
                        this.setState({
                            hudType:null,
                            source:null,
                        });
                        this.hud.show('default hud')
                    }}
                    style={styles.text}>
                    default hud
                </Text>
                <Text
                    onPress={()=>{
                        this.setState({
                            source:require('./angle-mask.png')
                        });
                        this.hud.show('custom hud')
                    }}
                    style={styles.text}>
                    custom hud
                </Text>
                <Text
                    style={styles.text}
                    onPress={()=>{
                        this.setState({
                            textOnly:!this.state.textOnly,
                        });
                        this.hud.show('text only')
                    }}
                >
                    text only switch
                </Text>
                <Text onPress={()=>{
                    this.hud.close()
                }}
                    style={styles.text}>
                    close
                </Text>
                <Hud source={this.state.source} ref={r=>{this.hud = r}} hudType={this.state.hudType} textOnly={this.state.textOnly}/>
            </View>
        )
    }
}