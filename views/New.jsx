const React = require("react")

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Pokemon Page</h1>
        

        <form action="/pokemon" method="POST">
          Name: <input type="text"  name="name" /> <br />
          Color: <input type="text" name="color" /> <br />
          Image URL: <input type="text" name="img" />
          <input type="submit" value="Create Pokemon" />
        </form>
        <nav>
          <a href="/pokemon">Back</a>
        </nav>
      </div>
    )
  }
}

module.exports = New