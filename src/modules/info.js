import {render} from '../core/render';

const html = `
		<div class="info">
			<img src='../img/avatar.jpg' alt="Фотография" class="avatar">
			<div class="info-text">
				<h1>Потоцкий Олег Викторович</h1>
				<p>Мужчина, 30 лет.</p>
				<p>03.01.2022 начал обучение на курсе у Владилена Минина "Javascript Junior Frontend Developer".</p>
				<p>За плечами 5 лет командной разработки на должности инженера (обязанности бизнес-аналитика / системного-аналитика / продакт-менеджера).</p>
				<h4>Мои социальные сети</h4>
				<div class="social_media">
				<a href="https://rossgram.ru/" target="_blank" class="instagram">Росграмм</a>
				<a href="https://t.me/oleg086rus/" target="_blank" class="telegram">Telegram</a>
				</div>
			</div>
        </div>
	`;

export const info = () => {
	render(html);
};