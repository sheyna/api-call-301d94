import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  render() {

    return (
      <>
        <h1>Data from an API</h1>
        <form>
          <button>Display Star Wars data</button>
        </form>
      </>
    );
  }
}

export default App;
