export const render = (html, containerForInsert = '.container') => {
	const container = document.querySelector(containerForInsert);
	container.insertAdjacentHTML('beforeend', html);
};