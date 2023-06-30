//users-service.js 를 의존성 신경쓰지 않고 만들기
const User = require("./User");
const UsersRepository = require("./users-repository");

async function getUsers() {
	return UsersRepository.findAll();
}

async function addUser(userData) {
	const user = new User(userData);

	return UsersRepository.addUser(user);
}

module.exports = {
	getUsers,
	addUser,
};

/* 
  => user-service 모듈을 만든다. 
	1. user 모듈을 참조(의존)한다.
	2. userRepository 모듈을 참조(의존)한다.

	현재 모듈 userSerivice 모듈에 기능을 추가한다.
	첫 째로, user 정보를 갖고오는 async method 를 만든다.
		getUsers method 는 userRepository 를 의존한다. 
	둘 째로, user 정보를 추가하는 async method 를 만든다.
	  addUser method 는 userRepository 를 의존한다.

	userRepository 를 다른 모듈로 바꿀 때 일어날 일
	1. require path 를 바꿔준다. (path 를 바꾼다는 의미는 관련코드를 바꿔줘야 한다는 것으로 복잡성이 증가한다.)
	2. test 를 진행할 때, 오류가 2개 모듈에서 원인이 발생할 수 있다는 뜻으로 경우의 수가 3가지다.
		=> 이 문제는 jest 및 sinon 를 활용해 하나의 모듈을 완전하게 만들고 그 외의 모듈을 테스트하는 방식을 
		이용할 수 있으나 이런 방법을 사용하지 않는 것이 유리하다. (의존성이 클수록 테스트가 힘들다.)
*/
