/* 1. 기본 상속 => 생성자가 없어도 Animal 객체가 제공한다.
  원형객체(부모객체) 생성자 및 메소드를 복제(상속)한 객체는 이용할 수 있다.
*/

class Animal {
	constructor(name) {
		this.speed = 0;
		this.name = name;
	}

	run() {
		console.log(`${this.name}은 4 발로 뜁니다.`);
	}
}

class Rabbit extends Animal {
	run() {
		console.log(`${this.name}은 2 발로 뜁니다.`);
	}
}

const rabbit = new Rabbit("미친토끼");

rabbit.run();
