// Here is some awful / untestable / unmaintainable code.
// Break it up into functions that are testable:
// Tips:
//     - Use async await
//     - Use 3 different event handler functions for each of the actions
//     - Seperate business / request logic from DOM logic
//     - Write as many 'pure' functions as you can
//         - no side effects, no globals, inputs and outputs, etc
// Goals:
//     - Aim for atleast 2 pure functions
//     - Split the 3 pieces of logic into different handlers
document.getElementById('start').addEventListener('click', () => {
    if (isNaN(document.getElementById('inputNumber').value)) {
        document.getElementById('inputNumber').value = "";
        return;
    } else {
        document.getElementById('outputNumber').innerHTML = "Your number is: ";
        document.getElementById('outputNumber').innerHTML +=
            document.getElementById('inputNumber').value;
    }

    setTimeout(() => {
        fetch('https://cat-fact.herokuapp.com/facts').then(response => response.json().then(data => {
            const elem = document.getElementById('catFacts');
            const factsHtml = data.map(fact => `<li>${fact.text}</li>`).join('');
            elem.innerHTML = `<ol>${factsHtml}</ol>`; 
        }))
    }, 500);
        
    setInterval(() => {
        const advice = fetch('https://api.adviceslip.com/advice')
        advice.then(response => response.json().then(data => {
            const adviceElement = document.getElementById('advice');
            adviceElement.innerHTML = `${data.slip.id}: ${data.slip.advice}`;
        }));
    }, 3000);
});