/* 1. 기본 상속 => 생성자가 없어도 Animal 객체가 제공한다.
  원형객체(부모객체) 생성자 및 메소드를 복제(상속)한 객체는 이용할 수 있다.
*/

export class Animal {
	constructor(name) {
		this.speed = 0;
		this.name = name;
	}

	run(speed) {
		this.speed = speed;
		console.log(`${this.name} 은(는) ${this.speed} 로 달린다.`);
	}

	stop() {
		this.speed = 0;
		console.log(`${this.name} 은 멈췄습니다.`);
	}
}

class Rebbit extends Animal {
	hide() {
		console.log(`${this.name} 는 숨었습니다.`);
	}
}

const rebbit = new Rebbit("미친토끼");

// 오버라이딩 
rebbit.__proto__.run = () => {
	console.log("hello");
};

rebbit.__proto__.run();
