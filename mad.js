// Mad Lib javascript by Edwin!

// Event Listener

document.getElementById("mad-btn").addEventListener("click", buildMadLib);

// Event Function
function buildMadLib() {


    // Input

    let adjective = document.getElementById("adjective").value;
    let verb = document.getElementById("verb").value;
    let noun = document.getElementById("noun").value;

    // Process

    let result = '" There is a ' + adjective + ' spider in my room!" I screamed. "I need a ' + noun + ' to come ' + verb + ' the bug!"' ;

    // Output
    document.getElementById("result").innerHTML = result;
}   











