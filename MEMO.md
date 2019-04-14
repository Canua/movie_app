○ ReatJS
Inflearn
- Site
https://www.inflearn.com/course/reactjs-web/


Basic : JavaScript

자바스크립트 기술 향상
view

- 요소
- 컴포넌트
그룹별로 분리해서 작업 가능

○ Composition
Nav
Header
Numbers
Grid

○ 단방향 데이터플로우
데이터는 항상 일정한 장소에 존재, 그 장소에서만 데이터 변경 가능
--> 데이터가 변하면 UI가 변경된다.
--> 데이터 -> 데이터 변경 -> UI 변경

리액트(view)이기 때문에 model, controller를 다양하게 사용할 수 있다.



1. 영화앱
- yts API
https://yts.am/

- 트랜스파일러
'리액트 코드'에서 '자바스크립트' 코드로 변경해주는 툴
- 웹팩 ( MODULE BUNDLE의 한 종류)
'리액트 코드'를 브라우저에 적용할 수 있도록 변경
툴

1. nodejs 설치
2. npm install -g create-react-app
3. create-react-app movie_app
4. 생성된 movie_app 폴더 이동후
   npm start
5. 로컬 서버 : http://localhost:3000/
  네트워크 IP 주소 : http://192.168.0.8:3000/
- CRA ( Create React App ) 사용하기 때문에 빌드 구성 없이 소스를 수정 후 저장만 하면 자동으로 빌드가 된다.

○ JSX
리액트 컴포넌트 만들 때 사용하는 규칙
리액트로 작성하는 html
html



○ 컴포넌트 디자인
1. 무비 리스트
무비 리스트
무비 카드
무비 커버

컴포넌트를 각각 다른 파일로 분리

모든 컴포넌트는 render function을 가지고 있다.
render - 컴포넌트가 보여지는 모습

- react
리액트 UI 라이브러리
모바일 앱
- reactDOM
라이브러리를 웹 사이트에 출력해줌
웹사이트에 출력(render)을 도와주는 역할
1개의 컴포넌트를 출력

컴포넌트는 항상 render를 해줘야한다.
원리 : 컴포넌트 생성 -> render -> return -> JSX(=html) --> 브라우저
필수 : import React -> class -> Render, 모든 컴포넌트는 render를 해야함

○ props
data flow with props
데이터 주입
부모가 컴포넌트가 자식 컴포넌트에게 정보를 주는 역할
console.log(this.props);
큰 컴포넌트가 정보를 가지고 있고 작은 컴포넌트에 정보를 전달


 JSX 명령을 실행 시키기 위해 { } 로 닫아 줘야한다.

  - array map 사용
	MDN
	https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	map()은 새로운 array를 만든다
	다른 array의 엘리먼트를 포함한

  리액트는 엘리먼트가 많은 key 값으 줘야한다.
○ state
리액트 컴포넌트 안에 있는 오브젝트
컴포넌트 안에 state가 바뀔 떄마다 Render가 발생한다.
○ loading states
데이터 없이 컴포넌트가 로딩을 하고 API가 데이터를 주면 컴포넌트가 state를 업데이트 한다. = API Call

○
모든 컴포넌트가 state가 있는 것이 아니다
state가 없는 컴포넌트는 stateless functional 컴포넌트라고 한다.
차이 state < -- > stateless functional
smart 컴포넌트  < -- > dump 컴포넌트
state의 유무차이

dump 컴포넌트 : state, function render, lifecycle이 없고
props만 가지고 있다.
기존의 render 순서 render function, will mount, did mount가 다 필요없다.
ex) 어떤 컴포넌트는 return 기능만 하기 위해 존재


○ 컴포넌트 lifecycle
// Render : componentWillMount() -> render() -> componentDidMount()
// Update : componentWillReceivePorps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> component
// 새로운 컴포넌트를 받다 -> 새로운 prop와 이전의 props가 다른지 확인 -> props가 다른 컴포넌트를 업데이트


○ ajax
XML 대신 JSON 쓰는 추세
FETCH : ajax를 reactJS에 적용하는 방법

- GET 방식
URL : API - yts
https://yts.am/api#list_movies
DATA : https://yts.am/api/v2/list_movies.json
평점순 정렬 : https://yts.am/api/v2/list_movies.json?sort_by=rating

// 비동기적으로 가져온다
// 페이지를 새로고침 하기 싫으니까 로딩하면서 API를 가져온다.
componentDidMount() {
	fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
	.then(response => console.log(response))
	.catch(err => console.log(err));
}
// 1. fetch의 데이터 가져오기가 실행 되면 (성공하든 말든 상관없음)
// 2. then이 실행되고
// then 함수는 1개의 attribute(Object) = fecth의 결과물만 준다
// 3. catch가 실행된다. 위의 라인이 에러가 발생하면 작업을 실행해라 ex) console.log 작업

response 받은 데이터를 json으로 변환하고 console로 출력
.then(response => response.json())
.then(json => console.log(json))

○ PROMISE
새로운 자바스크립트 컨셉
비동기적 프로그래밍
첫번째 라인이 끝나든 말든 두번째 라인 작업을 실행한다.
시나리오가 생기고 이를 관리할 수 있다.

○ Await, Async
fetch를 callApi를 사용 해서 했다
getMovies Async 함수이다.

_getMovies = async () => {
 const movies = await this._callApi()
 this.setState({
	 movies
 })
}


$git config --global user.name "Name명"
$git config --global user.email 메일@naver.com
name과 list가 제대로 들어갔는지
$git config --list



https://www.youtube.com/watch?v=aJxQhwObD3s&list=PL7jH19IHhOLOFTVD4R8FeZWkwpVi8-9Fv&index=6
