import {render} from '../core/render';

const html = `
 	<div class="card education">
		<h2>Образование</h2>
		<p>Сургутский государственный университет</p>
 	</div>
 `;
export const education = () => {
	render(html);
};