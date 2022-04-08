import {render} from '../core/render';
import {coursesFinished} from '../core/api';

const html = `
		<div class="card courses">
            <h2>Пройденные курсы</h2>
            <table class="table tableOfCourses"> 
            </table>
        </div>
`;

const renderTable = (school, course) => {
	const table = document.querySelector('.tableOfCourses');
	table.insertAdjacentHTML('beforeend', `
		<tr>
			<td>${school}</td>
			<td>${course}</td>
		</tr>
	`);
	return table;
};


export const courses = () => {
	render(html);
	coursesFinished.forEach((el) => {
		renderTable(el.School, el.Course);
	});
};