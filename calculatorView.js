export class CalculatorView {
    constructor () {
        this.ecran = document.getElementById('ecran');
        this.touches = document.querySelector('.touches');
    }

    render(displayValue) {
        this.ecran.textContent = displayValue;
    }

    bindEvents(handler) {
        this.touches.addEventListener('click', (e) => {
            const target = e.target;
            if(!target.matches('button')) return;

            const value = target.dataset.value;
            const action = target.dataset.action;

            handler({ value, action});
        });
    }
}