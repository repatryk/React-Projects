class Random extends React.Component {
    state = {
        text:'',
      }
      handleClick = () => {
          const number = Math.floor(Math.random()*10)
          this.setState({
              text: this.state.text + number
          })
          
      }
      
    render() { 
        return (
            <>
            <button onClick = {this.handleClick}>{this.props.btn}</button>
            <ShowNumber text={this.state.text}/>
            </>
          );
    }
}
const ShowNumber = props => {
    return (
    <h1>{props.text}</h1>
    )
}
 
ReactDOM.render(<Random btn='Losuj liczbę z przedziału 1-10'/>,document.getElementById('root'));