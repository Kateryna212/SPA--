import { state, setState } from './state.js';

const routes = {
    '/': '<h1>Вітаємо на головній сторінці!</h1><p>Це базовий SPA модуль.</p>',
    '/about': '<h1>Про нас</h1><p>Ми вивчаємо розробку на JavaScript.</p>',
    '/contact': `
        <h1>Контакти</h1>
        <form id="contact-form">
            <input type="text" id="name" placeholder="Ім'я" value="${state.formData.name}"><br><br>
            <input type="email" id="email" placeholder="Email" value="${state.formData.email}"><br><br>
            <button type="submit">Зберегти стан</button>
        </form>
    `
};

export function navigate(url) {
    window.history.pushState(null, null, url);
    setState({ currentPage: url });
}

export function render() {
    const app = document.getElementById('app');
    const path = window.location.pathname;
    app.innerHTML = routes[path] || '<h1>404 - Сторінку не знайдено</h1>';

    // Додаємо обробник для форми, якщо ми на сторінці контактів
    if (path === '/contact') {
        document.getElementById('contact-form').onsubmit = (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            setState({ formData: { name, email } });
            alert("Дані збережені в об'єкті state!");
        };
    }
}
