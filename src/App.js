import React, {Component} from 'react';
import './App.css';
// exprot한 Movie 컴포넌트를 사용
import Movie from './Movie';

class App extends Component {

	state = {};

	componentWillMount() {}


	// 사이즈가 크면 좋은 코딩 방법이 아니기 떄문에
	// then이 많아져서 callback이 많이 발생하는 코드를 작성하는 것 대신 _getMovies를 사용
	componentDidMount() {
		this._getMovies();
	}

	//API Call
	// key 인덱스를 사용하면 속도가 그려진다 --> key 값을 id를 이용해서 부여한다.
	_renderMovies = () => {
		const movies = this.state.movies.map(movie => {
			return <Movie
				title={movie.title_english}
				poster={movie.medium_cover_image}
				key={movie.id}
				genres={movie.genres}
				synopsis={movie.synopsis}
				/>
		})
		return movies
	}
	// 순서와 상관없이 진행
	// callApi 함수 실행이 된 후에 아래라인이 실행된다.
	 _getMovies = async () => {
		const movies = await this._callApi()
		this.setState({
			movies
		})
	}

	// 1. fetch의 데이터 가져오기가 실행 되면 (성공하든 말든 상관없음)
	// 2. then이 실행되고
	// then 함수는 1개의 attribute(Object) = fecth의 결과물만 준다
	// 3. catch가 실행된다. 위의 라인이 에러가 발생하면 작업을 실행해라 ex) console.log 작업
	_callApi = () => {
		//Data 가져오기
		return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
		.then(response => response.json())
		.then(json => json.data.movies)
		.catch(err => console.log(err))
	}
	// state에 데이터가 유무에 따라 class 변경
	render() {
		const { movies } = this.state
		return (
			<div className={movies ? "App" : "App--loading"}>
			{
				movies
					? this._renderMovies()
					: 'Loading'
			}
		</div>);
	}
}

export default App;
