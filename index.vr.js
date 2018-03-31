import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
    constructor(){
        super();
        this.state = {selectedState: ""};
    }

    stateClicked (selection) {
    let newState;
    switch(selection) {
        case 1:
            newState = "tajmahal";
            break;
        case 2:
            newState = "chess-world";
            break;
          case 3:
            newState = "congare";
            break;
          case 4:
            newState = "magdeburg";
            break;
          case 5:
            newState = "milano";
            break;
          case 6:
            newState = "colosseum";
            break;
    }
    console.log(newState);
    this.setState({ selectedState: newState});
  }

  componentDidMount() {
    const random = Math.floor((Math.random() * 5) + 1);
    console.log(random);
    let randState;
    switch(random) {
        case 1:
            newState = "tajmahal";
            break;
        case 2:
            newState = "chess-world";
            break;
          case 3:
            newState = "congare";
            break;
          case 4:
            newState = "magdeburg";
            break;
          case 5:
            newState = "milano";
            break;
          case 6:
            newState = "colosseum";
            break;
    }
    console.log(randState);
    this.setState({ selectedState: newState});
  }

    render() {
        const states = {
            tajmahal : "Taj Mahal",
              chessworld: "Chess World",
              congare: "Congare NP",
              magdeburg: "Magdeburg NP",
              milano: "Milano",
              newyork: "Colosseum"
           }
      return (
          <View>
              <Pano source={asset(this.state.selectedState + '.jpg')}/>
              <View
                  style={{
                      flex: 1,
                      width: 2,
                      flexDirection: 'column',
                      alignItems: 'stretch',
                      layoutOrigin: [0.5, 0.5],
                      transform: [{translate: [0, 0, -5]}]
                  }}
                  >
                      <Title/>
                      <TextBoxes stateClicked={this.stateClicked.bind(this)} states={states}/>
                 </View>
            </View>
      );
    }
};

class TextBoxes extends React.Component {

  render() {
    return (
      <View>
         <VrButton onClick={() => this.props.stateClicked(1)}>
            <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#0277bd'}}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.tajmahal}</Text>
            </View>
         </VrButton>
        <VrButton onClick={() => this.props.stateClicked(2)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#0277bd'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.chessworld}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(3)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#0277bd'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.congare}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(4)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#0277bd'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.magdeburg}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(5)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#0277bd'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.milano}</Text>
          </View>
        </VrButton>
        <VrButton onClick={() => this.props.stateClicked(6)}>
          <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#0277bd'}}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>{this.props.states.newyork}</Text>
          </View>
        </VrButton>
      </View>
    )
  }
}

class Title extends React.Component {
  constructor() {
    super();
    this.state = {title: "Panoramic Monuments Trip"};
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 0.2, textAlign: 'center', color: "#000"}}>
        {this.state.title}
        </Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
