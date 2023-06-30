// userService.js 모듈을 의존성 신경쓴 후 만들기
const User = require("./User");

function UsersService(usersRepository) {
	// check here
	async function getUsers() {
		return usersRepository.findAll();
	}

	async function addUser(userData) {
		const user = new User(userData);

		return usersRepository.addUser(user);
	}

	return {
		getUsers,
		addUser,
	};
}

module.exports = UsersService;

/* 
	=> userService 모듈이 의존하는 모듈을 인자로 받는 함수(객체)를 만듦
	1. 똑같은 코드지만, path 를 고치는 작업이 필요없다.
	2. 독립적인 userService 모듈을 만들 수 있다.
	
	절차
	1. 의존할 모듈을 먼저, 파악한다. 의존모듈을 모아두는 모듈을 보통 container 라고 한다.
	2. 파라미터로 모듈을 받는다.

	관련개념
	1. 클로저

	정리
	1. 의존하는 객체는 파라미터로 모듈을 받는다. 
*/
