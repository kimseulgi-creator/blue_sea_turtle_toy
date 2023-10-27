# 푸른 바다 거북이
![blue-sea-turtle2](https://github.com/kimseulgi-creator/blue_sea_turtle_toy/assets/78592995/aa0b5752-b95f-484a-82eb-11330631cbb9)

형설지공 study 토이프로젝트 23.07.15 - 23.07.27

<br>

## 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [구현기능 및 기술스택](#구현기능)
3. [배포주소/Figma주소](#배포주소/Figma주소)
4. [API Table](#api-table)
5. [프로젝트 시연 영상](#프로젝트-시연-영상)
<br>

## 프로젝트 소개

*‘ 해양동물들을 도와줘 🐢 ’*

멸종위기 해양동물들을 위한 자선단체기부 플랫폼입니다. <br />
사용자가 해양동물을 위해 스스로 어떤 노력을 할 수 있을지 post 하면 500원씩 해양동물 자선단체에 기부가 됩니다!

<br>

## 구현기능
- 게시글 post/delete
- 게시글 작성 시 비밀번호 받기 ⇒ 삭제 시 비밀번호 입력받고 확인
- side 메뉴 버튼 클릭시 자동 스크롤 구현
- UI 구현

<br>

## 기술스택
<div>
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
	<img src="https://img.shields.io/badge/redux-764ABC?style=flat&logo=redux&logoColor=white"/>
	<img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white" />
	<img src="https://img.shields.io/badge/reactquery-FF4154?style=flat&logo=reactquery&logoColor=white" />
	<img src="https://img.shields.io/badge/Styledcomponents-DB7093?style=flat&logo=Styledcomponents&logoColor=white" />
	<img src="https://img.shields.io/badge/json server-000000?style=flat&logo=json&logoColor=white" />

</div>

<br>

## 배포주소/Figma주소
[배포주소](https://blue-sea-turtle-toy.vercel.app/)<br />
[Figma주소](https://www.figma.com/file/0uvH7ucn2Ba32K2FwUp4Lv/Untitled?type=design&node-id=0%3A1&mode=design&t=tlN8oeh8Kb8T9lh7-1)

<br>

## API Table

| Number | Method | URL                                   | Description     | Request                                                      | Response                                                     |
| ------ | ------ | ------------------------------------- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1      | `POST` | /api/post                             | 게시글 등록          | {'id' : 게시글id, 'password' : 게시글 password, 'contents' : 게시글 내용} |                                                    |
| 2      | `Delete` | /api/post/id                        | 게시글 삭제        | {'id': 게시글id}                             |                                                             |
| 3      | `GET` | /api/post                              | 게시글 리스트   |                               |  {'id' : 게시글id, 'contents' : 게시글 내용}                                                            |

<br>

## 프로젝트 시연 영상<br>
![KakaoTalk_20231027_221526505](https://github.com/kimseulgi-creator/blue_sea_turtle_toy/assets/78592995/2353fc09-88c2-48a9-b502-3b381219cc6e)

<br>
