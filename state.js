export const state = {
    currentPage: window.location.pathname,
    formData: {
        name: "",
        email: ""
    }
};

// Функція для оновлення стану
export function setState(newState) {
    Object.assign(state, newState);
    // Створюємо подію, щоб повідомити систему про зміну стану
    window.dispatchEvent(new CustomEvent("statechange"));
}
