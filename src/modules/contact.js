import {render} from '../core/render';

const html = `
		 <div class="contact">
            <h2>Связаться со мной</h2>
            <form action="#">
                <div class="row">
                    <div class="form-group">
                        <label for="name">Ваше имя:</label>
                        <input type="text" id="name" placeholder="Введите имя..." autocomplete="off" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Ваш email:</label>
                        <input type="email" id="email" placeholder="Введите email..." autocomplete="off" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="text">Ваше сообщение:</label>
                    <textarea id="text" cols="15" rows="2" placeholder="Введите текст..." autocomplete="off" required></textarea>
                </div>
                <input type="submit" value="Связаться" class="btn">
            </form>
        </div>
`;

export const contacts = () => {
	render(html);
	const button = document.querySelector('.btn');
	button.addEventListener('click', () => {
		alert('В настоящее время функционал недоступен. По мере изучения backend - будет добавлен.');
	});
};