import * as React from 'react';
import './app.scss';
import Label from './components/Label';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <Label text="test string" />
      </div>
    );
  }
}

export default App;
