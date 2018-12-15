import React, {Component} from 'react';
import './App.css';
import Movie from './components/Movie';

class App extends Component {

  /**
   * Render: componentWillMount -> render() -> componentDidMount()
   * Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
   */
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {}

  componentDidMount() {

    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "dummy"
          }, {
            title: "The Load Of The Rings - The Fellowship of the Ring",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51Qvs9i5a%2BL.jpg"
          }, {
            title: "The Load Of The Rings - The Two Towers",
            poster: "http://mblogthumb1.phinf.naver.net/20150123_32/syshnj_1421977007322Tadsq_JPEG/lo" +
                "rd_of_the_rings_the_two_towers_ver3.jpg?type=w2"
          }, {
            title: "The Load Of The Rings - The Return Of The King",
            poster: "https://pds.joins.com/news/component/joongang_sunday/201509/20/241.png"
          }, {
            title: "The Hobbit - An Unexpected Journey",
            poster: "https://upload.wikimedia.org/wikipedia/en/b/b3/The_Hobbit-_An_Unexpected_Journey" +
                ".jpeg"
          }, {
            title: "The Hobbit - The Desolation of Smaug",
            poster: "https://upload.wikimedia.org/wikipedia/en/4/4f/The_Hobbit_-_The_Desolation_of_Sm" +
                "aug_theatrical_poster.jpg"
          }, {
            title: "The Hobbit - The Battle of the Five Armies",
            poster: "https://upload.wikimedia.org/wikipedia/en/0/0e/The_Hobbit_-_The_Battle_of_the_Fi" +
                "ve_Armies.jpg"
          }, {
            title: "Ready Player One",
            poster: "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5" +
                "MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg"
          }
        ]
      })
    }, 3000);
  }

  _renderMovies = () => {
    const movies = this
      .state
      .movies
      .map((movie, index) => {
        return <Movie key={index} title={movie.title} poster={movie.poster}/>
      });

    return movies;
  }
  render() {
    return (
      <div className="App">
        {this.state.movies
          ? this._renderMovies()
          : "Loading"}
      </div>
    );
  }
}

export default App;