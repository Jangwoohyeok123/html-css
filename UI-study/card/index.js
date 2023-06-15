const shareOption = document.querySelector('.share-option');

document.querySelector('.share-button').addEventListener('click', () => {
  shareOption.classList.toggle('active');
  this.classList.toggle('active');
});

/* 
	1. click 할 때, .share-opton 요소에 active 클래스가 요소에 적힌다.
	2. click 할 때, .share-button 요소에 active 클래스가 요소에 적힌다. 

	share-option, share-button 모두 active 클래스가 없다가 생김
	transition 속성은 클래스가 존재하는 상황에서 그 클래스의 속성값이 변했을 때 동작하는 속성
	요소에 active 클래스가 생겼을 때, share-option class 의 visibility가 hidden 에서 visible 로
	바뀌는 로직을 만들어야만 한다. active 클래스에서 visible 을 해도 transition 을 만들 수 없다.
*/
