class Btn extends React.Component {
    state = {
        messageisActive: false
      }
      handleClick = () => {
         
          this.setState({
              
              messageisActive: !this.state.messageisActive,
            })
        }
        render() { 
            const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum amet voluptatum, similique officia error quae dolores consequatur sequi dolorum aliquid eveniet neque culpa earum. Laborum voluptas nemo eveniet reiciendis excepturi!'
            return (
            <>
            <button onClick = {this.handleClick}> {this.state.messageisActive ? 'Ukryj' : 'Pokaż'}</button>
            {this.state.messageisActive ? <p>{text}</p> : null}
            </>
          );
    }
}
 
ReactDOM.render(<Btn/>,document.getElementById('root'));