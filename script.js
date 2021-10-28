const items = [
	"Сделать проектную работу",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
];

const list = document.querySelector('.list');
const formButton = document.querySelector('.form__submit');
const formInput = document.querySelector('.form__input');
const itemTemplate = document.querySelector('.item_template');

function main() {
	items.forEach((element) => {
		renderItem(element);
	})

	formButton.addEventListener('click', handleSubmit);
}

function renderItem(text) {
	//1. Создавать разметку

	const htmlElement = itemTemplate.content.cloneNode(true);

	//2. Заменять в разметке текст
	htmlElement.querySelector('.item__text').innerText = text;

	//2.5 Навесить события
	setListeners(htmlElement);

	//3. Вставлять разметку в наш dom
	list.appendChild(htmlElement);

}

function setListeners(element) {
	element.querySelector('.delete').addEventListener('click', handleDelete);
	element.querySelector('.duplicate').addEventListener('click', handleDuplicate);
}

function handleDelete(event) {
	event.target.closest('.list__item').remove();
}

function handleDuplicate(event) {
	const text = event.target.closest('.list__item').querySelector('.item__text').textContent;
	renderItem(text);
}


function handleSubmit() {
	//1. взять значение из инпута
	const myValue = formInput.value;
	//2. отрисовать строку с этим текстом
	renderItem(myValue);
}

main();