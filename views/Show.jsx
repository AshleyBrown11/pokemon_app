const React =require('react');

class Show extends React.Component {
  render() {
    const { name, img } = this.props.pokemon
    
    return (
      <div>
        <h1>Gotta Catch 'Em All</h1>
        <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        <img src={img + '.jpg'} alt='' />
        <a href="/pokemon">Back to the Index Page</a>
      </div>
    );
  }
}

export default Show;
