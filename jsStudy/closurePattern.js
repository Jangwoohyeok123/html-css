function Person(name, age) {
  let _name = name;
  let _age = age;

  const getName = () => {
    return _name;
  };

  const getAge = () => {
    return _age;
  };

  return { getName, getAge };
}

const aman = Person('장우혁', '28');
const age = aman.getAge();
console.log(age);
console.log(Person._name);
