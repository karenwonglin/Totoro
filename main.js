class TotoGenerator extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'toto-generator');

        const button = document.createElement('button');
        button.textContent = 'Generate Numbers';
        button.addEventListener('click', () => this.generateNumbers());

        const numbersContainer = document.createElement('div');
        numbersContainer.setAttribute('class', 'numbers-container');

        const style = document.createElement('style');
        style.textContent = `
            .toto-generator {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }
            .numbers-container {
                display: flex;
                gap: 10px;
            }
            .number-circle {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: #f0f0f0;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 24px;
                font-weight: bold;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }
            button {
                padding: 10px 20px;
                font-size: 16px;
                cursor: pointer;
                border: none;
                background-color: #2196F3;
                color: white;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                transition: background-color 0.3s, box-shadow 0.3s;
            }
            button:hover {
                background-color: #1976D2;
                box-shadow: 0 4px 8px rgba(0,0,0,0.3);
            }
        `;


        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(button);
        wrapper.appendChild(numbersContainer);

        this.generateNumbers(); // Initial generation
    }

    generateNumbers() {
        const numbersContainer = this.shadowRoot.querySelector('.numbers-container');
        numbersContainer.innerHTML = ''; // Clear previous numbers
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 49) + 1);
        }

        for (const number of [...numbers].sort((a, b) => a - b)) {
            const circle = document.createElement('div');
            circle.setAttribute('class', 'number-circle');
            circle.textContent = number;
            numbersContainer.appendChild(circle);
        }
    }
}

customElements.define('toto-generator', TotoGenerator);