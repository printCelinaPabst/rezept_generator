// script.js

// 2.1 DOM-Elemente für den Rezept-Generator abrufen
// Wir speichern Referenzen auf unsere HTML-Elemente in JavaScript-Variablen.
// document.getElementById('ID') gibt das Element mit der angegebenen ID zurück.
const generateRecipeBtn = document.getElementById('generateRecipeBtn'); // Der "Rezept generieren" Button
const recipeList = document.getElementById('recipeList');             // Die <ul>-Liste für die Zutaten
const recipeTitle = document.getElementById('recipeTitle');           // Der <h3>-Titel für den Rezeptnamen
const messageDiv = document.getElementById('message');               // Das <div> für Statusmeldungen

console.log("DOM-Elemente erfolgreich abgerufen.");

//-------------------------------------------------------------------------------------

// script.js (fortgesetzt)

// 2.2 Beispiel-Array von Rezepten
// Jedes Objekt im Array repräsentiert ein Rezept.
// 'name' ist der Name des Rezepts.
// 'ingredients' ist ein Array von Strings, das die Zutatenliste enthält.

const recipes = [
  {
    name: "Sommerlicher Salat",
    ingredients: [
      "200g gemischter Salat",
      "100g Kirschtomaten",
      "1 Gurke",
      "50g Feta-Käse",
      "2 EL Olivenöl",
      "1 EL Balsamico-Essig",
      "Salz, Pfeffer"
    ]
  },
  {
    name: "Pasta Pesto",
    ingredients: [
      "250g Spaghetti",
      "100g Basilikumpesto",
      "50g Parmesan",
      "Knoblauchzehe",
      "Pinienkerne",
      "Olivenöl"
    ]
  },
  {
    name: "Gemüse-Curry",
    ingredients: [
      "1 Zwiebel",
      "2 Karotten",
      "1 Zucchini",
      "200g Kichererbsen",
      "400ml Kokosmilch",
      "2 EL Currypulver",
      "Reis als Beilage"
    ]
  },
  {
    name: "Schoko-Muffins",
    ingredients: [
      "150g Mehl",
      "100g Zucker",
      "2 EL Kakao",
      "1 TL Backpulver",
      "1 Prise Salz",
      "1 Ei",
      "100ml Milch",
      "50g geschmolzene Butter",
      "50g Schokostückchen"
    ]
  },
  {
    name: "Frucht-Smoothie",
    ingredients: [
      "1 Banane",
      "100g Beeren (gefroren)",
      "150ml Mandelmilch",
      "1 EL Chiasamen",
      "Optional: Honig zum Süßen"
    ]
  }
];
console.log("Rezeptdaten geladen. Anzahl der Rezepte:", recipes.length);

// script.js (fortgesetzt)

// 2.3 Hauptfunktion zum Generieren eines zufälligen Rezepts
function generateRandomRecipe() {
  // Hier kommt die gesamte Logik für das Generieren des Rezepts hinein.
  // Wir werden diese Funktion in den nächsten Schritten füllen.

  // 2.5 Bestehende Zutatenliste leeren
  // Das Setzen von innerHTML auf einen leeren String ist eine schnelle Methode,
  // um alle Kindelemente eines HTML-Elements zu entfernen.
  recipeList.innerHTML = '';

  // 2.4.1 Zufällig einen Index auswählen
  // Math.random() gibt eine Gleitkommazahl zwischen 0 (inklusive) und 1 (exklusive) zurück.
  // Multiplikation mit recipes.length skaliert den Wert auf die Array-Größe.
  // Math.floor() rundet auf die nächste ganze Zahl ab, um einen gültigen Array-Index zu erhalten.
  const randomIndex = Math.floor(Math.random() * recipes.length);

  // 2.4.2 Das Rezept am zufälligen Index auswählen
  const selectedRecipe = recipes[randomIndex];

  // 2.6 Rezeptnamen im H3-Tag aktualisieren
  // textContent setzt oder gibt den Textinhalt eines Elements zurück.
  // Im Gegensatz zu innerHTML interpretiert textContent keinen HTML-Code, was es sicherer macht.
  recipeTitle.textContent = `Zutaten für: ${selectedRecipe.name}`;

  // 2.7 Zutaten dynamisch zur Liste hinzufügen
  // Die forEach-Methode wird für jedes Element im 'ingredients'-Array einmal ausgeführt.
  selectedRecipe.ingredients.forEach(ingredient => {
    // 2.7.1 Neues Listenelement (<li>) erstellen
    // document.createElement('tagName') erzeugt ein neues HTML-Element im Speicher.
    const listItem = document.createElement('li');

    // 2.7.2 Den Textinhalt des <li> auf die aktuelle Zutat setzen
    listItem.textContent = ingredient;

    // 2.8 Bedingte Style-Manipulation: Bestimmte Zutaten hervorheben
    // Wir prüfen, ob die Zutat bestimmte Schlüsselwörter enthält (case-insensitive).
    if (ingredient.toLowerCase().includes("öl") ||
        ingredient.toLowerCase().includes("butter") ||
        ingredient.toLowerCase().includes("milch")) {
        // Wenn die Bedingung erfüllt ist, fügen wir dem <li> die CSS-Klasse 'highlight-ingredient' hinzu.
      // Die eigentlichen Stile sind im CSS-Block der style.css definiert.
      // element.classList.add('className') fügt dem Element eine Klasse hinzu.
      listItem.classList.add('highlight-ingredient');
      console.log(`Zutat hervorgehoben: ${ingredient}`);
    } 
      recipeList.appendChild(listItem);
      console.log(`Zutat hinzugefügt: ${ingredient}`);
  });
    // 2.9 Nachricht anzeigen, dass ein neues Rezept generiert wurde
  // Wir prüfen, ob das Nachrichtendiv existiert, bevor wir es manipulieren.
  if (messageDiv) {
    messageDiv.innerHTML = `<p>Neues Rezept "<b>${selectedRecipe.name}</b>" generiert!</p>`;
    // Direkte Style-Manipulation über die style-Eigenschaft.
    // Dies ist nützlich für einmalige oder spezifische Stiländerungen.
    messageDiv.style.backgroundColor = '#e1f5fe'; // Hellblau
    messageDiv.style.borderColor = '#42a5f5'; // Blau
    console.log(`Statusmeldung: Rezept "${selectedRecipe.name}" generiert.`);
  }

}
// 2.10 Event Listener für den "Rezept generieren"-Button
// addEventListener ist die moderne und empfohlene Methode,
// um Event-Handler zuzuweisen. Sie nimmt das Ereignis ('click')
// und die Funktion (generateRandomRecipe), die bei diesem Ereignis ausgeführt werden soll.
generateRecipeBtn.addEventListener('click', generateRandomRecipe);
console.log("Event Listener für Button hinzugefügt.");

// 2.11 Initiales Rezept beim Laden der Seite generieren
// Ruft die Funktion einmal auf, damit beim ersten Laden der Seite bereits ein Rezept angezeigt wird.
generateRandomRecipe();
console.log("Initiales Rezept generiert beim Laden der Seite.");

