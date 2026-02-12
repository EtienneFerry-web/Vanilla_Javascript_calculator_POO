import { CalculatorModel } from ".Vanilla_Javascript_calculator_POO/calculatorModel"
import { CalculatorView } from ".Vanilla_Javascript_calculator_POO/calculatorView"

class App {
    constructor() {
        this.model = new CalculatorModel();
        this.view = new CalculatorView();

        this.view.render(this.model.currentExpression);
    }

    handleInteraction({ value, action }) {
        if (value) {
            this.model.updateExpression(value);
        } else {
            switch (action) {
                case 'clear'    : this.model.clear(); break;
                case 'delete'   : this.model.delete(); break;
                case 'toggle'   : this.model.toggle(); break;
                case 'calculate': this.model.solve(); break;
            }
        }

        this.view.render(this.model.currentExpression);
    }
}

new App();