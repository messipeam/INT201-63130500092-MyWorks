/*const cancelBtn = document.getElementById("cancel");

function showMessage() {
    alert("you click on cancel button now!");
}

//1. binding with event function name
//cancelBtn.onclick = showMessage;

//2. binding with event function expression
cancelBtn.onclick = function () {
    alert("you click on cancel button now!");
};

//
cancelBtn.addEventListener(
    "click",
    () => {
        showMessage();
    },
    false
);
*/

const okBtn = document.querySelector('#submitOK');

okBtn.addEventListener('click', addProduct);

//okBtn.removeEventListener('click', addProduct);


function addProduct(event) {
    alert(`event target: ${event.target}

        event current target : ${event.currentTarget}

        event target id: ${event.target.id}

        event phase: ${event.eventPhase}

        event type: ${event.type}`);
}

const divBtnPanel = document.querySelector("#divButtonPanel");

divBtnPanel.addEventListener("click",(event) => {
        alert(`click on div panel was fired!,
        event target: ${event.target}
        event current target : ${event.currentTarget}
        event target id: ${event.target.id}
        event phase: ${event.eventPhase}
        event type: ${event.type}`);
    },

    true
);
