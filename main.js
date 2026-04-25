import { navigate, render } from './router.js';

document.addEventListener("DOMContentLoaded", () => {
    // Слухаємо кліки по посиланнях
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigate(e.target.getAttribute("data-link"));
        }
    });

    // Обробка кнопок "Назад/Вперед" у браузері
    window.addEventListener("popstate", () => {
        render();
    });

    // Перерендер при зміні стану
    window.addEventListener("statechange", () => {
        render();
    });

    // Початковий рендер
    render();
});
