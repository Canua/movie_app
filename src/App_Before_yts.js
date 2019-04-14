// import React, {Component} from 'react';
// import './App.css';
// // exprot한 Movie 컴포넌트를 사용
// import Movie from './Movie';
//
// class App extends Component {
//
// 	// array 정렬된 항목  const movieTitles, const movieImages
// 	state = {}
//
// 	// Render : componentWillMount() -> render() -> componentDidMount()
// 	// Update : componentWillReceivePorps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component
// 	// 새로운 컴포넌트를 받다 -> 새로운 prop와 이전의 props가 다른지 확인 -> props가 다른 컴포넌트를 업데이트
// 	componentWillMount() {
// 		// api 요청 작업이 실행 될 부분
// 	}
// 	componentDidMount() {
// 		/* 컴포넌트가 mount 되면 5초 후 greeting을 업데이트
// 	setTimeout(() =>{
// 		 직접적으로 변경하면 안된다.
// 		 state를 업데이트 하려면 this.setState를 사용해야한다.
//
// 		this.setState({
// 			greeting : 'Hello Again!'
// 		})
// 	}, 5000)
// 	*/
// 		setTimeout(() => {
// 			this.setState({
// 				movies: [
// 					{
// 						title: "Matrix",
// 						poster: "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L._SY445_.jpg"
// 					}, {
// 						title: "Full Metal Jacket",
// 						poster: "https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL._SY445_.jpg"
// 					}, {
// 						title: "Oldboy",
// 						poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
// 					}, {
// 						title: "LaLa Land",
// 						poster: "https://is2-ssl.mzstatic.com/image/thumb/Video111/v4/0e/55/18/0e551803-eaa6-30a6-3924-2494f66acd95/pr_source.jpg/268x0w.jpg"
// 					}, {
// 						title: "harry potter",
// 						poster: "https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg"
// 					}
// 				]
// 			})
// 		}, 5000)
// 		/*
// 			 	새로운 영화 추가
// 		 	 	... 자바스크립트 '전개연산자', 기존의 객체안에 있는 내용을 해당 위치에 풀어준다.
// 		  	...this.state.movies 기존의 영화 리스트들을 그대로 두고 / 만약 없다면 기존의 영화 리스트는 삭제되고 추가한 영화 리스트로 대체된다.
//
// 			 setState를 이용한 새로운 영화 추가, ...this.state.movies 개념 이해할 것
// 			 this.setState({
// 				 movies: [
// 				 {
// 					title: "harry potter",
// 					poster: "https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg"
// 					},
// 					 ...this.state.movies,
// 				 ]
// 			 })
// 	}, 5000)
// 	*/
// 	}
//
// 	// index는 리스트의 숫자
// 	// movies의 각 array의 엘리먼트 마다 고유한 index(key) 값을 갖는다.
// 	/*
// 	API Call 실습
// 	{
// 		this.state.movies.map((movie, index) => {
// 			return <Movie title={movie.title} poster={movie.poster} key={index}/>
// 		}
// 	}
// 	*/
//
// 	//API Call
// 	_renderMovies = () => {
// 		const movies = this.state.movies.map((movie, index) => {
// 			return <Movie title={movie.title} poster={movie.poster} key={index}/>
// 		})
// 		return movies
// 	}
// 	// 		{this.state.movies ? this._renderMovies() : 'Loading' }
// 	//  데이터가 있는지 검사 한 뒤
// 	// 있다면 _renderMovies() 함수 호출
// 	// '_' 사용 하는 이유, 리액트 자체 기능과 생성한(나만의) 기능과 구분하기 위해
// 	// 없다면 Loading (= Loading states )
// 	render() {
// 		return (
// 			<div className="App">
// 			{this.state.movies ? this._renderMovies() : 'Loading' }
// 		</div>);
// 	}
// }
//
// export default App;
