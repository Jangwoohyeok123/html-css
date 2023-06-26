class Human {
	constructor(name, speed) {
		this.name = name;
		this.speed = Number(speed);
		this.adjacent = {
			left: "리트리버",
			right: "개백수",
			top: "사장님",
		};
	}

	maxRun(speed) {
		alert(`${speed}km 속도로 뛴다.`);
	}

	talk(string) {
		for (let i = 0; i < this.adjacent.length; i++) {
			alert(this.adjacent[i] + "string");
		}
	}
}

class Man extends Human {
	constructor(sex) {
		// 성별을 추가시킨 확장클래스를 얻고 싶다.
		// super 생성자를 자식 생성자 안에서 먼저 호출한다. (필요조건)
		super("후니", 36);
		this.sex = sex;
	}

	muscleUp(kg, height) {
		console.log(`몸무게 ${kg}가 무거워지고, 키가 ${height} 커짐`);
	}
}

const man = new Man("후니", "남자");
