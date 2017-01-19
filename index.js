/**
 * Created by liuyu on 2017/1/18.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ActivityIndicator,
    Animated,
    StyleSheet,
    Platform
} from 'react-native';
const NavBarHeight = Platform.OS == 'android' ? 96 * Util.size.width / Util.size.height:64;

export default class Hud extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isShow: false,
            text: '',
            opacityValue: new Animated.Value(this.props.opacity),
        };
    }

    show(text) {
        this.setState({
            isShow: true,
            text: text,
        });

        Animated.timing(
            this.state.opacityValue,
            {
                toValue: this.props.opacity,
                duration: this.props.fadeInDuration,
            }
        ).start(() => {
            this.isShow = true;
        });
    }

    close(after = null) {
        if (!this.isShow) return;
        let animate = () => {
            Animated.timing(
                this.state.opacityValue,
                {
                    toValue: 0.0,
                    duration: this.props.fadeOutDuration,
                }
            ).start(() => {
                this.setState({
                    isShow: false,
                });
                this.isShow = false;
            })
        };

        if (after != null) {
            setTimeout(animate,after);
        } else {
            animate();
        }

    }

    render() {
        let hud = null;
        if (!this.props.textOnly) {
            switch (this.props.hudType) {
                case 'info':
                    hud = <Image style={[this.props.imageStyle,styles.image]} source={require('./src/info.png')}/>;
                    break;
                case 'success':
                    hud = <Image style={[this.props.imageStyle,styles.image]} source={require('./src/success.png')}/>;
                    break;
                case 'error':
                    hud = <Image style={[this.props.imageStyle,styles.image]} source={require('./src/error.png')}/>;
                    break;
                default:
                    hud = this.props.source == null ?
                        <ActivityIndicator style={styles.image} animating={this.state.isShow} size={'small'}/> :
                        <Image style={this.props.imageStyle} source={this.props.source}/>;
                    break;
            }
        }

        let view = this.state.isShow ?
            <View ref="container" pointerEvents= {this.props.backgroundTouchable ? 'none':'auto'} style={[styles.container, {paddingTop: this.props.positionValue}]}>
                <Animated.View
                    style={[styles.content, { opacity: this.state.opacityValue }, this.props.style]}
                >
                    {hud}
                    <Text numberOfLines={20} style={this.props.textStyle}>{this.state.text}</Text>
                </Animated.View>
            </View> : null;
        return view;
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top:NavBarHeight,
        bottom:0,
        alignItems: 'center',
        justifyContent:'center',
        padding:48,

    },
    text: {
        color: 'white',
    },
    content: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
        flexDirection: 'column',
        alignItems:'center'
    },
    image: {
        marginBottom:8,
    }
});

Hud.propTypes = {
    style: View.propTypes.style,
    textStyle: Text.propTypes.style,
    fadeInDuration: React.PropTypes.number,
    fadeOutDuration: React.PropTypes.number,
    opacity: React.PropTypes.number,
    positionValue: React.PropTypes.number,
    source: Image.propTypes.source,
    textOnly: React.PropTypes.bool,
    hudType: React.PropTypes.oneOf([
        'info',
        'success',
        'error',
    ]),
    imageStyle:Image.propTypes.style,
    backgroundTouchable:React.PropTypes.bool,
};

Hud.defaultProps = {
    textStyle: styles.text,
    fadeInDuration: 500,
    fadeOutDuration: 500,
    opacity: 1,
    positionValue: 0,
    textOnly: false,
    backgroundTouchable:true,
    imageStyle:{
        tintColor:'white'
    },
};


