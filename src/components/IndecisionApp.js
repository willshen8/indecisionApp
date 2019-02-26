import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleAddOption = (option) =>{
    if(!option){
      return 'Enter a valid value to add item please';
    } else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists';
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  };

  handleDeleteOptions =() => {
    this.setState(() => ({options: []}))
  };

  handleClearSelectedOption =() => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };

  componentDidMount(){
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if(options){
        this.setState(() => ({options}));
      }
    }
    catch(e){
    }
  }

  componentDidUpdate(prevState, prevProps){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
    }
  }

  componentWillUnmount(){
    console.log('Indeicsion Unmounted');
  }

  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
      <Header subtitle={subtitle} />
      <div className="container">
        <Action hasOptions ={this.state.options.length > 0} handlePick={this.handlePick}/>
        <div className="widget">
          <Options options={this.state.options}
                  handleDeleteOptions={this.handleDeleteOptions}
                  handleDeleteOption={this.handleDeleteOption}/>
          <AddOption handleAddOption={this.handleAddOption}/>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption = {this.handleClearSelectedOption}
          />
        </div>
      </div>

    </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
