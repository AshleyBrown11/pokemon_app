const React =require('react');


const myStyle ={
  color: '#ffffff',
  background: '#000000',
}

class Index extends React.Component {
  render() {
    const {pokemon} = this.props
    return (
      <div>
        <h1 style ={myStyle}>See All The Pokemon!</h1>
        <ul>
          {pokemon.map((pokemon, i) => (
            <li key={i}>
              <a href={`/pokemon/${pokemon._id}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Index;
