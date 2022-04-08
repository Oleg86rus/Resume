import {render} from '../core/render';

const html = `
		 <div class="card hobby">
            <h2>Мои хобби</h2>
            <ol class="list">
                <li>Сноуборд</li>
                <li>Езда на автомобиле</li>
                <li>Путешествия</li>
            </ol>
        </div>
`;

export const hobby = () => {
	render(html);
};