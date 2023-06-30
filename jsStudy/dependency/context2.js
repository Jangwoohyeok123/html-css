// user-service.js 의존성 신경 안쓸 때, test 방법
const UsersRepository = require("./users-repository");
const UsersService = require("./users");
const sinon = require("sinon");
const assert = require("assert");

describe("Users service", () => {
	it("gets users", async () => {
		const users = [
			{
				id: 1,
				firstname: "Joe",
				lastname: "Doe",
			},
		];

		sinon.stub(UsersRepository, "findAll", () => {
			return Promise.resolve(users);
		});

		assert.deepEqual(await UsersService.getUsers(), users);
	});
});

/* 
  => user-service-test 모듈을 만든다.
	1. userRepository 모듈을 참조한다. => 예가 문제라는 것
	2. userService 모듈을 참조한다.
	3. test library sinon 모듈을 참조한다. 
	4. test library assert 모듈을 참조한다.
*/
