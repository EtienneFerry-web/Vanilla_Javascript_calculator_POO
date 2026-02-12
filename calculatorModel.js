export class CalculatorModel {
    constructor () {
        this.expression = "";
    }

    updateExpression (val) {
        this.expression += val;
    }

    clear () {
        this.expression = "";
    }

    delete () {
        this.expression = this.expression.slice(0, -1);
    }

    toggle () {
        const regex = /(-?\d+\.?\d*)$/;
        const match = this.expression.match(regex);
        if(match) {
            const toggled = match[0].startsWith('-') ? match[0].slice(1): '-' + match[0];
            this.expression = this.expression.replace(regex, toggled);
        }
    }

    solve () {
        try{
            const safeExpression = this.expression.replace(/%/g, "/100");
            const result = new Function(`return ${safeExpression}`)();
            this.expression = result.toString();
        } catch {
            this.expression = "";
            return "Erreur !";
        }
    }

    get currentExpression () {
        return this.expression || "0";
    }
}