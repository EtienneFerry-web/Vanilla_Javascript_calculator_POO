window.addEventListener('DOMContentLoaded', function(){
    const ecran = this.document.getElementById('ecran');

    //Pour garder ce que l'utilisateur place en mémoire
    let expression = "";

    //Fonction appelé à chaque clic sur un bouton 
    window.append = function (value){
        //On ajoute le caractère a la fin de la chaine
        expression += value;
        //Mise a jour du texte affiché à l'ecran
        ecran.textContent = expression;
    };

    //Fonction Clear all 
    window.clearAll = function(){
        expression = "";
        //Mise a jour du texte affiché à l'ecran
        ecran.textContent = "";
    };

    //Fonction Del
    window.deleteLast = function () {
        expression = expression.slice(0, -1);
        //Mise a jour du texte affiché à l'ecran
        ecran.textContent = expression;
    };

    //Fonction Positif/Negatif
    window.toggleSign = function() {
        //On cherche le dernier nombre dans l'expression via un REGEX
        const regex = /(-?\d+\.?\d*)$/;
        const match = expression.mactch(regex);

        //Déclaration condition pour inverser le dernier chiffre de l'exp
        if (match) {
            const lastNumber = match[0]; //le dernier nombre trouvé $
            //Invertion du signe
            const toggled = lastNumber.startsWith('-')
                ? lastNumber.slice(1) //retire le "-" si déja négatif
                : '-' + lastNumber;   //ajoute "-"" si positif
            //On remplace le dernier nombre dans l'expression 
            expression = expression.replace(regex, toggled);
            //On met a jour l'écran
            ecran.textContent = expression;
        }
    };

    //Fontion Calcule
    window.calculate = function (){
        try {
            //On remplace "%" pas /100 pour gérer les pourcentages
            const safeExpression = expression.replace(/%/g, "/100");
            //On calcule le résultat
            const result = eval(safeExpression);
            //On affiche le résultat à l'écran
            ecran.textContent = result;
            //On met à jour l'expression pour pouvoir continuer à calculer
            expression = result.toString();
        } catch (error) {
            // Si une erreur se produit (ex:7++5), On affiche "Erreur"
            ecran.textContent = "Erreur!"
            expression = "";
        }   
    };
});