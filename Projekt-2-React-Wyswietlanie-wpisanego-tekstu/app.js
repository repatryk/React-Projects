class InputText extends React.Component {
    state = {
        text: ''
      }
      handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
      }
      handleClick = () => {
          this.setState({
              text: ''
          })
      }
    render() { 
        return (
            <>
            <input 
            value = {this.state.value} 
            placeholder='Wpisz tekst' 
            type="text" 
            onChange = {this.handleChange} />
            <button onClick = {this.handleClick}>Reset</button>
            <h1>{this.state.text}</h1>
            </>
          );
    }
}
 
ReactDOM.render(<InputText/>,document.getElementById('root'));