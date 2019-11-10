import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Stories from './components/Stories';
import navItems from'./components/navItems';
import Loading from './components/Loading';

// const App = () => {   same as the direct line below. 
// function App() {

class App extends React.Component {

  state = {
    navItems: navItems,
    stories: [],
    isLoading: false,
    activeLink: navItems[0],
  };

  componentDidMount(section = 'arts') {
    this.getStories(section);
  }

  getStories = section => {
    this.setState({ isLoading: true });
    this.setState({activeLink: section});
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`,
    )
      .then(response => response.json())
      .then(data => this.setState({ stories: data.results, isLoading: false }))
      .catch(error => console.log(error));
  };


render() {
  return (
    <>
      <Header siteTitle="All the News That Fits We Print" />
      <Nav navItems={navItems} getStories={this.getStories} activeLink={this.state.activeLink} />
      {this.state.isLoading ? (<Loading />) : (
      <Stories stories={this.state.stories}/>
      )}
    </>
  );
}
}
export default App;
