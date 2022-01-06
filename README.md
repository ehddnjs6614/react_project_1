# Movie WebSite

## 개발목표 
`Movie 관련 클론 영상들을보고 흐름을 이해하면서 한번 만들어보자라는 목표로 구현하게되었습니다.`

## 사용기술
 - React
 - Antd
 - Axios
 - react-player
 - react-router-dom@5 

## 주요기능

 - 폴더 구조는 크게 client (react) , server (express) 2가지로 나뉜다.
  - 파일을 실행시킬때는 client나 server 루트가 아닌 최상위루트에서 `npm run dev` 해줘야 client ,server 두개다 실행된다.
  - Movie WebSite 에서 사용한 API는 the MovieDB 라는 웹사이트 에서 사용했다.
  - 가져온 정보는 무비의 최신순으로 가져오는 API , 무비의 상세내용을 가져오는 API를 사용하였다. 
  - Main Movie화면과 Movie Detail 화면, Detali에있는 영화 정보와 , 출연인물을 API를 사용해 유저화면에 뿌려주는게 큰 틀이라고 볼수있다.
  - 또한 Movie의 트레일러를 맨처음화면서 보여주는데, 이것은 react-player를 사용해 youtube비디오를 불러와 화면에 뿌려주었다.
  

## Client
 1. 전체적인 틀을 구현.
 2. 무비정보를 가져와야하는데 가져올때 useEffect를 이용해 사이트에서 가져와서 상수처리했던 API키와 API Url를 임포트 해온다음에 fetch라는 function을 이용해 사용.
 3. 그러면 console.log를 찍어보면 최신순으로 가져오는 데이터정보를 확인할수있다 (밑에 이미지)
 ![콘솔로그](https://user-images.githubusercontent.com/81339388/147520115-ef852530-600e-4f6a-ad5a-002e72cf8036.JPG)
 
 4. Movie API에서 가져온 데이터를 state에 담는다. (밑에 이미지)
 
    ![무비정보저장](https://user-images.githubusercontent.com/81339388/147520308-9b502cd1-542b-4c10-a5cf-733efaeff80b.JPG)
 
 5. 위와같은 방법을 진행으로 불러온 Movie Detail API 를 console.log로 찍어보면 상세정보 결과물을 볼수있다. (밑에 이미지)
    ![디테일로그](https://user-images.githubusercontent.com/81339388/147521375-0fd898ff-7f60-4ca4-ab7e-3bd3c37b57d4.JPG)
 6. 또한 등장인물 까지 불러온것을 볼수있다.
    ![인물로그](https://user-images.githubusercontent.com/81339388/147521384-f10a6b80-4f0c-461d-9430-36350fad4ce2.JPG)
 7. 불러온 API를 state에 담았다면 map함수를 이용해 화면에 뿌려준다.
    ```C
    Casts.map((cast, index) => (
                <React.Fragment key={index}>
                  <GridCards
                    image={
                      cast.profile_path
                        ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                        : null
                    }
                    characterName={cast.name}
                  />
    ```
    
    
    ***
    
 8. React-Player 를 활용해 메인화면에 동영상들을 보여준다.
  
    ![image](https://user-images.githubusercontent.com/81339388/148323010-d942f3b7-0317-4da7-9f70-f532473162cd.png)

    
***


## Server
 - 이번에 사용한  server (express)는 동영상강의로 접해 공부를했었는데 몽고db를 연결해 사용자의 회원가입 유저정보를 담고 로그인 로그아웃을 하는 기능을 구현해봤다.
 - 사실 이번 프로젝트에는 전에 공부했던 server를 리액트에 연결시켜 적용하는것이 목표였기때문에 따로 공부를 더 해야한다.
 - (Ps.계획해둔 일정이 끝나면 노드공부계획을 따로 잡아놨다.)

***

## 개선사항 & 느낀점
```
 - 전체적인 코드에 이해
 - redux 에 대한이해
 - antd 활용의 대한 이해
 
 최대한 이해한다고 했지만 전체적으로 미숙한 부분들이 많다.  정말많이 노력하고 반복 숙달하는게 정답인거같다. 여러모로 많은걸 느끼게 해준 프로젝트이다.
 ```
