
export default function header() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const userInput = document.createElement('input');
    const findButton = document.createElement('button');


    userInput.id = 'textinput';
    findButton.id = 'findcity';
    
    findButton.textContent = 'Find City';
    userInput.type = 'text';
    h1.textContent = 'Weather App'


    header.appendChild(h1);
    header.appendChild(userInput);
    header.appendChild(findButton);

    return header;
}