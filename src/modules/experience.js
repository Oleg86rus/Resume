import {render} from '../core/render';
import {tableExperience} from '../core/api';

const html = `
		<div class="card experience">
            <h2>Опыт работы</h2>
            <table class="table tableExperience"></table>
        </div>  
`;

const renderTable = (org, position, date) => {
	const table = document.querySelector('.tableExperience');
	table.insertAdjacentHTML('beforeend', `
		<tr>
			<td>${org}</td>
			<td>${position}</td>
			<td>${date}</td>
		</tr>
	`);
	return table;
};


export const experience = () => {
	render(html);
	tableExperience.forEach((el) => {
		renderTable(el.Org, el.Position, el.Date);
	});
};