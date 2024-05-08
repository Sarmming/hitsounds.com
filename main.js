// const myForm = document.querySelector('#my-form');
// const search = document.querySelector('.search');
// const fieldset = document.querySelector('.hottestspo');

// myForm.addEventListener('click', onclick);

// function onclick(e) {
//     let a, b, c;
//     a = search.value;
//     if (a == fieldset.children.class) {
//         alert(a);
//     }


// }



const searchbtn = document.querySelector('.searchbtn');
const search = document.querySelector('.search');
// const sarmming247 = ['sarmming_247', 'sarmming_24/7', 'sarmming24/7', 'sarmming247', '247', '24/7', '24', '7'];

searchbtn.addEventListener('click', onsubmit);
function onsubmit(e) {


    if (search.value === '') {
        alert(`Input text to the search Engine!`);
    }
    else {
        // if (search.value.includes(sarmming247[0]) || search.value.includes(sarmming247[1]) || search.value.includes(sarmming247[2]) || search.value.includes(sarmming247[3]) || search.value.includes(sarmming247[4]) || search.value.includes(sarmming247[5]) || search.value.includes(sarmming247[6]) || search.value.includes(sarmming247[7]) || search.value.includes(sarmming247[8])) {
        if (search.value == 'sarmming_247' || search.value == 'sarmming_24/7' || search.value == 'sarmming24/7' || search.value == 'sarmming247' || search.value == '247' || search.value == '24/7' || search.value == '247' || search.value == '24' || search.value == '7') {

            //alert(`did you want to search ${search.value} on hitsound.com`);
            location.href = "Sarmming_247.html";
        }
        else {
            alert(`No result found!`);
        }
    }
}

// search.addEventListener('focus', function (e) {
//     search.toLowerCase();
// });


// console.log(window);










