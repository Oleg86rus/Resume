import {render} from '../core/render';
import {skillsList} from '../core/api';

const html = `
		 <div class="card skills">
            <h2>Ключевые навыки</h2>
            <ol class="list listOfSkills"></ol>
        </div>
`;

const renderList = (el) => {
	const list = document.querySelector('.listOfSkills');
	list.insertAdjacentHTML('beforeend', `
		<li>${el}</li>
	`);
	return list;
};

export const skills = () => {
	render(html);
	skillsList.forEach((el) => {
		renderList(el);
	});
};