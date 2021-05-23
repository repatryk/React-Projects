const Person = (props) => {
    return(
        <li>
            <span>{props.name}</span>
            <button onClick={props.delete}>Usuń</button>
        </li>
    )
}


class List extends React.Component {
    state = {
        people: [
            {id: 1, name: 'Hunt '},
            {id: 2, name:'Anastazja '},
            {id: 3, name:'Damon'},
            {id: 4, name:'Dexter'},
            {id: 5, name:'Chuck '},
            {id: 6, name:'Patryk '},
            {id: 7, name:'Bryce'},
        ],
        
    }

    handleDelete(id) {
         const people = [...this.state.people];
         const index = people.findIndex(person=> person.id === id)
        people.splice(index,1);
        this.setState({
            people
        })
        
    }
    render() {

        const people =  this.state.people.map(person => <Person key={person.id} name={person.name}
            delete={this.handleDelete.bind(this, person.id)} /> )
        return (
            
                <ul>
                    {people}
                    </ul>
                    
                
          );
    }
}
 
ReactDOM.render(<List/>,document.getElementById('root'));