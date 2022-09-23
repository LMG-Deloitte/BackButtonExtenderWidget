import { Component, createElement } from "react";
import { Text, View, StyleSheet, BackHandler, Alert } from "react-native";


//This will run even the page it is on is beneath another page. The action ran when the user presses the back button can be overwritten by whichever back button widgets are above them.
export class BackButton extends Component {
    backAction = () => {
      this.props.backAction.execute();
      return true;
    };

    noAction = () => {
      //Nothing in here
      //Functionality can be added here if this is wanted, I do not believe it is possible to easily close a page here - LMG 
    }
  
    componentDidMount() {
        if(this.props.backAction){
            this.backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                this.backAction);
        }else{
            this.backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                this.noAction);
        }
    }
  
    componentWillUnmount() {
      this.backHandler.remove();
    }
  
    render() {
      return ( 
        <View></View>//If this function is empty an error will be shown in the console
      );
    }
  };
  
  export default BackButton;
