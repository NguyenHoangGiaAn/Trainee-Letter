alert ("Welcome Back!");

let fullName;
let id;
let traineedata;

function init(){
$fullName = prompt("What's your name? ");
$id = prompt("What's your ID? ");
if (!fullName || !id){
    init();
    return;
} 
}

init();

function getDataRecursively() {
async function GetTrainee() {
    await fetch("https://www.tuankietcoder.tech/api/trainee_program")
    .then((res) => res.json())
    .then((res) => {
        traineedata = (res.data);
    })
}
if (!traineedata) {
    console.log("First: ", traineedata);
    GetTrainee();
    return;
}
//du lieu xu ly tu day
console.log(traineedata);
traineedata.forEach((item) => {
    const traineeStringify = JSON.stringify(item);
    $(
        "select_person"
    ).innerHTML += `<option>item.fullName</option>`;
});
}

getDataRecursively();

$("select_person").onchange = function(e) {
    console.log(e.target.value);
};