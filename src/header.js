
export default function header() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.textContent = 'Weather App'

    header.appendChild(h1);

    return header;
}