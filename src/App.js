import React, { Component} from 'react';
import './App.css';
import Resource from './components/Resource';
import resources from './mock/resources'

class App extends Component {
//[<Resource resource ={aResource}/>, Resource resource ={aResource}]
// constructor(props) {
//   super(props);
//   this.renderPosts.bind(this);
// }

  renderPosts() {
    const display = resources.map((resource) => {
      return <Resource resource={resource} />;
    });

    return display;
  };

  render() {
    return (
      <div className="App">
        <h1>Welcome to BrainHive!</h1>
        {this.renderPosts()}
        {/* {<Resource resource={this.resource[0]} />}
        {<Resource resource={this.resource[1]} />}
        {<Resource resource={this.resource} />} */}
      </div>
    );
  }
}

export default App;
