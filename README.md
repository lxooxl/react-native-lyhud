# react-native-lyhud
A react native module to show hud, it works on iOS and Android.


This is base on [react-native-easy-toast](https://github.com/crazycodeboy/react-native-easy-toast)<br />
## Installation

* 1.Run `npm i react-native-lyhud --save`
* 2.`import Hud from 'react-native-lyhud'`

## GIF
![image](https://github.com/lxooxl/react-native-lyhud/blob/master/ex.gif)

## Getting started

Add `react-native-lyhud` to your js file.

`import Hud from 'react-native-lyhud'`

Inside your component's render method, use hud:

```javascript
 render() {
         return (
             <View style={styles.container}>
                 ...
                 <Hud ref="hud"/>
             </View>
         );
 }
```

>Note:  Add it in the bottom of the root view.

Then you can use it like this:

```javascript
 this.refs.hud.show('hello world!');
```


### Basic usage

```javascript
render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={{padding: 10}}
                    onPress={()=>{
                        this.refs.hud.show('hello world!');
                    }}>
                    <Text>Press me</Text>
                </TouchableHighlight>
                <Hud ref="hud"/>
            </View>
        );
    }
```


## API


Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
style  | View.propTypes.style  | true | {backgroundColor: 'black',opacity: OPACITY,borderRadius: 5,padding: 10,}  |   Custom style hud
positionValue  | React.PropTypes.number  | true | 0  |   Custom hud position marginTop
fadeInDuration  | React.PropTypes.number  | true | 500  |   Custom hud show duration
fadeOutDuration  | React.PropTypes.number  | true | 500  |   Custom hud close duration
opacity  | React.PropTypes.number  | true | 1  |   Custom hud opacity
textStyle  | View.propTypes.style  | true | {color:'white'}  |   Custom style text
source  | Image.propTypes.source  | true | null  |  Custom image source
textOnly  | React.PropTypes.bool  | true | false  |  Only show text
hudType  | 'info','success','error'  | true | null  |  hud Type
imageStyle  | Image.propTypes.style  | true | {tintColor: 'white'}  |  Custom Image style
backgroundTouchable  | React.PropTypes.bool  | true  | true  |  backgroundTouchable


Method            | Type     | Optional | Description
----------------- | -------- | -------- | ----------- | -----------
show(text)   | function | false | show hud with text
close() |  function  | -  |  close hud