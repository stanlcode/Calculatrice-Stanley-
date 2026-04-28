// On récupère l'élément HTML qui affiche les chiffres (input ou écran)
// On utilise getElementById pour cibler un élément unique
const display = document.getElementById('display');

// Cette fonction ajoute un caractère (chiffre ou opérateur) à l'écran
// On utilise += pour concaténer au lieu de remplacer, afin de permettre la saisie progressive (ex: 1 puis 2 → 12)
function insert(input) {
    display.value += input;
}

// Cette fonction vide complètement l'écran
// On affecte une chaîne vide pour réinitialiser l’état sans recréer l’élément
function clearDisplay() {  
    display.value = '';
}

// Cette fonction supprime le dernier caractère
// On utilise slice(0, -1) pour retirer le dernier élément sans modifier le reste
function Del() {
    display.value = display.value.slice(0, -1);
}

// Cette fonction calcule le résultat de l'expression
// On utilise eval() pour interpréter directement une expression mathématique sous forme de string
// (Attention: eval est pratique ici mais dangereux dans des apps réelles car peut exécuter du code malveillant)
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        // Si l'expression est invalide, on affiche une erreur
        display.value = 'Erreur';

        // On utilise setTimeout pour laisser le temps à l'utilisateur de voir l’erreur avant de nettoyer
        setTimeout(clearDisplay, 1500);
    }
}

// Cette fonction change le signe du nombre (+ ↔ -)
// On utilise l’opérateur unaire "-" car il convertit automatiquement en nombre et inverse le signe
function toggleSign() {
    display.value = -display.value; 
}