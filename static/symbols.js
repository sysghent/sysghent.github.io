// Arrays of programming languages and type-theoretic symbols
const programmingLanguages = [
    "C++", "Rust", "Haskell", "Scala", "Elixir",
    "Go", "TypeScript", "F#", "OCaml", "Erlang", "Julia", "C", "Java",
    "Clojure", "Fortran", "Ada", "Prolog", "Nim", "Elm", "Agda", "Coq", "Idris"
];

const typeTheoreticSymbols = [
    "∀", "∃", "→", "↦", "⇒", "≡", "≠", "∅", "⊂", "⊃",
    "⊆", "⊇", "∧", "∨", "¬", "⊕", "⊗", "∈", "∉", "⊢",
    "⊨", "≈", "≅", "≜", "∝", "∴", "∵", "∇", "Δ", "∫",
    "∂", "∞", "∴", "∷", "⋅", "⋆", "⋯", "∘", "⋅", "⋅",
    "⋄", "⋇", "⋈", "⋉", "⋊", "⋋", "⋌", "⋍", "⋎", "⋏",
    "λ", "Π", "Σ", "Ω", "Ψ", "Φ", "Λ", "Γ", "Δ", "Θ"
];

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a random float between min and max
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a symbol element
function createSymbol(content) {
    const symbol = document.createElement('div');
    symbol.classList.add('symbol');
    symbol.textContent = content;
    return symbol;
}

// Function to determine total symbols based on screen width
function getTotalSymbols() {
    const width = window.innerWidth;
    if (width > 1200) return 50;
    if (width > 992) return 40;
    if (width > 768) return 30;
    if (width > 576) return 20;
    return 10; // For very small screens
}

// Function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomInt(0, i);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to initialize the falling symbols
function initFallingSymbols() {
    const background = document.querySelector('.background');
    const totalSymbols = getTotalSymbols();

    // Combine both arrays and shuffle them to get a mix of programming languages and symbols
    let combinedSymbols = [...programmingLanguages, ...typeTheoreticSymbols];
    combinedSymbols = shuffleArray(combinedSymbols);

    for (let i = 0; i < totalSymbols; i++) {
        // Randomly select a symbol from the combined array
        const randomIndex = getRandomInt(0, combinedSymbols.length - 1);
        const symbolContent = combinedSymbols[randomIndex];

        // Create the symbol element
        const symbol = createSymbol(symbolContent);

        // Randomize size
        const fontSize = getRandomFloat(1.5, 3.0); // em units
        symbol.style.fontSize = `${fontSize}em`;

        // Randomize left position (0% to 100%)
        const left = getRandomFloat(0, 100);
        symbol.style.left = `${left}%`;

        // Randomize animation duration (15s to 30s)
        const duration = getRandomFloat(15, 30);
        symbol.style.animationDuration = `${duration}s`;

        // Randomize animation delay (0s to duration)
        const delay = getRandomFloat(0, duration);
        symbol.style.animationDelay = `${delay}s`;

        // Randomize opacity between 0.05 and 0.2
        const opacity = getRandomFloat(0.05, 0.2);
        symbol.style.color = `rgba(0, 0, 0, ${opacity})`;

        // Append the symbol to the background container
        background.appendChild(symbol);
    }
}

// Function to remove existing symbols
function removeSymbols() {
    const background = document.querySelector('.background');
    background.innerHTML = '';
}

// Initialize the symbols when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initFallingSymbols);

// Re-initialize symbols on window resize to adjust the number dynamically
window.addEventListener('resize', () => {
    removeSymbols();
    initFallingSymbols();
});
