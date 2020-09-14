// Make sure the page is loaded before running any functions

document.addEventListener("DOMContentLoaded", () => {


// tracking input from html using queryselector
let addInput = document.querySelector("#item");

// Svg icons for all my buttons
let removeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 84V56c0-13.3 10.7-24 24-24h112l9.4-18.7c4-8.2 12.3-13.3 21.4-13.3h114.3c9.1 0 17.4 5.1 21.5 13.3L312 32h112c13.3 0 24 10.7 24 24v28c0 6.6-5.4 12-12 12H12C5.4 96 0 90.6 0 84zm416 56v324c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V140c0-6.6 5.4-12 12-12h360c6.6 0 12 5.4 12 12zm-272 68c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208zm96 0c0-8.8-7.2-16-16-16s-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208z"/></svg>`;
// Complete
let completeSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg>` ;
// 2 users
let user1SVG = '<svg class="svg-icon" viewBox="0 0 20 20">\n' +
    '\t\t\t\t\t\t\t<path fill="none" d="M5.177,17.658c0,0,3.445,1.987,4.823,1.987c2.067,0,4.823-1.987,4.823-1.987c0.024-0.025,0.044-0.054,0.068-0.08H5.109C5.133,17.604,5.153,17.633,5.177,17.658z M8.622,1.583V0.531C6.496,0.973,2.539,2.521,1.376,7.933H0.699c-0.189,0-0.344,0.155-0.344,0.344v1.378C0.354,9.845,0.509,10,0.699,10h0.392c-0.016,0.224-0.026,0.454-0.033,0.689H0.699c-0.189,0-0.344,0.155-0.344,0.344v1.378c0,0.189,0.155,0.344,0.344,0.344h0.439c0.089,0.79,0.262,1.804,0.594,2.849v2.663H4.34c-2.233-2.449-2.264-6.822-2.264-7.01C2.077,4.052,6.353,2.108,8.622,1.583zM10.689,0.354H9.311v2.059h1.378V0.354z M11.378,2.63v0.472H8.622V2.63C6.612,3.147,3.11,4.951,3.11,11.258c0,0,0.004,3.373,1.47,5.632h4.042v-0.689h2.756v0.689h4.042c1.466-2.259,1.47-5.632,1.47-5.632C16.89,4.951,13.388,3.147,11.378,2.63z M5.005,12.035c-0.318-0.364-0.517-0.833-0.517-1.354S4.687,9.69,5.005,9.327V12.035zM6.383,10.026c-0.295,0.078-0.517,0.335-0.517,0.654c0,0.319,0.222,0.576,0.517,0.654v1.395c-0.384-0.032-0.738-0.163-1.033-0.377V9.008c0.296-0.214,0.649-0.345,1.033-0.377V10.026z M7.761,12.353c-0.296,0.214-0.649,0.345-1.033,0.377v-1.395C7.022,11.257,7.244,11,7.244,10.681c0-0.319-0.222-0.576-0.517-0.654V8.631c0.384,0.032,0.738,0.163,1.033,0.377V12.353zM8.105,12.035V9.327c0.318,0.363,0.517,0.833,0.517,1.354S8.423,11.671,8.105,12.035z M10,13.445l-1.378,0.689L10,12.756l1.378,1.378L10,13.445z M11.895,12.035c-0.318-0.364-0.517-0.833-0.517-1.354s0.199-0.991,0.517-1.354V12.035z M13.273,10.026c-0.295,0.078-0.517,0.335-0.517,0.654c0,0.319,0.222,0.576,0.517,0.654v1.395c-0.384-0.032-0.738-0.163-1.033-0.377V9.008c0.296-0.214,0.649-0.345,1.033-0.377V10.026z M14.651,12.353c-0.296,0.214-0.649,0.345-1.033,0.377v-1.395c0.295-0.078,0.517-0.335,0.517-0.654c0-0.319-0.222-0.576-0.517-0.654V8.631c0.384,0.032,0.738,0.163,1.033,0.377V12.353zM14.995,12.035V9.327c0.318,0.363,0.517,0.833,0.517,1.354S15.313,11.671,14.995,12.035z M19.646,9.656V8.278c0-0.189-0.155-0.344-0.344-0.344h-0.678c-1.163-5.413-5.12-6.96-7.246-7.402v1.052c2.269,0.525,6.545,2.469,6.545,9.675c0,0.188-0.031,4.561-2.264,7.01h2.608v-2.663c0.333-1.044,0.505-2.058,0.594-2.849h0.439c0.189,0,0.344-0.155,0.344-0.344v-1.378c0-0.189-0.155-0.344-0.344-0.344h-0.359c-0.007-0.235-0.017-0.465-0.033-0.689h0.392C19.491,10,19.646,9.845,19.646,9.656z"></path>\n' +
    '\t\t\t\t\t\t</svg>'

let user2SVG = ' <svg class="svg-icon" viewBox="0 0 20 20">\n' +
    '\t\t\t\t\t\t\t<circle fill="none" cx="7.884" cy="11.397" r="0.699"></circle>\n' +
    '\t\t\t\t\t\t\t<circle fill="none" cx="12.076" cy="11.397" r="0.699"></circle>\n' +
    '\t\t\t\t\t\t\t<path fill="none" d="M17.685,5.808c-0.257,0-0.502,0.053-0.73,0.139C16.64,2.737,13.649,0.219,10,0.219c-3.649,0-6.64,2.518-6.955,5.728c-0.228-0.086-0.473-0.139-0.73-0.139c-1.153,0-2.096,0.943-2.096,2.096v3.493c0,1.153,0.943,2.096,2.096,2.096c0.28,0,0.547-0.058,0.792-0.158c0.113,1.088,0.304,1.795,0.585,2.254c0.539,0.834,4.139,4.192,6.288,4.192c2.149,0,5.751-3.361,6.272-4.167c0.292-0.476,0.488-1.196,0.602-2.296c0.255,0.112,0.536,0.175,0.831,0.175c1.153,0,2.096-0.943,2.096-2.096V7.904C19.781,6.751,18.838,5.808,17.685,5.808zM15.078,14.855c-0.482,0.746-3.715,3.529-5.099,3.529s-4.616-2.783-5.097-3.525c-0.319-0.521-0.444-1.919-0.489-3.297c0.004-0.055,0.017-0.108,0.017-0.164V8.603c0-0.04,0.005-0.078,0.006-0.118C4.779,8.56,5.156,8.603,5.545,8.603c1.994,0,3.706-1.037,4.455-2.519c0.749,1.482,2.461,2.519,4.455,2.519c0.389,0,0.766-0.043,1.128-0.118c0.001,0.039,0.006,0.078,0.006,0.118c0,0.077-0.008,0.152-0.012,0.229C15.598,10.276,15.641,13.938,15.078,14.855z"></path>\n' +
    '\t\t\t\t\t\t</svg>'


// When website user presses enter the script should add the text to the sit
// eventlistener for when enter is pressed
addInput.addEventListener("keypress",function(e){
    // If enter is pressed -> contintue
    if (13 === e.keyCode){
        // need to find what the user wrote in #item
        let newItem = document.getElementById("item").value;
        // if something is written take that and create a new item in out to do list. Function made below
        if (newItem) {

            addItemTodo(newItem);
            // reset after so you can add a new one again
            document.getElementById("item").value = "";
        }
    }
});
// I want a fucntion to create html
function addItemTodo(text){
    // track the listens and sections

    // find the secion of to do
    let list = document.getElementById("todo");
    // make a new list in this section for all the new tasks
    let item = document.createElement('li');
   // use the text from the input field - connecting to our eventlistener up there^^
    item.innerText = text;

    //Div for our new elements and to add out users,remove and complete buttons.
    let buttons = document.createElement('div');
    buttons.classList.add("buttons");

    // create the buttons.

    let remove = document.createElement('button');
    remove.classList.add('remove');
    // SVG icon
    remove.innerHTML = removeSVG;
    // add event listener for remove

    // this function i will make later to remove item from the list.
    remove.addEventListener("click",removeItem);


    // create the complete button.
    let complete = document.createElement('button');
    complete.classList.add('doing');
    complete.setAttribute("id", "completed"); // ID for styling
    // SVG icon
    complete.innerHTML = completeSVG;
    // add event listener for doing

    // this function i will make later to remove item from the list.
    complete.addEventListener("click",completed);

    // im adding two users to start with. Not sure how to do smarter. Thats also why i created two seperate functions which does nearly the same :(
    let user1 = document.createElement('button');
    user1.classList.add('doing');
    user1.setAttribute("id", "user1");  // ID for styling
    // SVG icon
    user1.innerHTML = user1SVG;
    // add event listener for doing
    user1.addEventListener("click",doingItem1);

    let user2 = document.createElement('button'); // ID for styling
    user2.classList.add('doing');
    user2.setAttribute("id", "user2");
    // SVG icon
    user2.innerHTML = user2SVG;
    // add event listener for doing
    user2.addEventListener("click",doingItem2);


    // add the buttons to the div we created in the start of the function
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    buttons.appendChild(user1);
    buttons.appendChild(user2);

    // and the div to the list
    item.appendChild(buttons);

    // prepend the list to the section
    list.insertBefore(item,list.childNodes[0]);
}
// first of two functions to make the tasks move when different buttons are clicked. This is the hardest for me as im bad at targeting parents/children.
function doingItem1(){
    // grab the list
    let item = this.parentNode.parentNode; // using this to reference the object pressed of execuction. Not 100% sure on using this. Here the parentnodes of the buttons.
    // grab the section
    let parent = item.parentNode;
    // grab the parent id'
    let id = parent.id;

    // grab user1 to delete if that is pressed
    let user = document.getElementById('user2' )

    // if user1-button is clicked delete that so you can see whos working on what
    let item1 = this.parentNode;
    item1.removeChild(user);

    // I use at ternary operator which has three conditions. condition -> execute(if true) -> execute(if false). Use to see if the task is is todo and wher it should get added if it is.
    let target = (id === "todo") ? document.getElementById("doing") : document.getElementById("todo");
    // remove from current section(todo if true)
    parent.removeChild(item);
    // add task to new section (doing if true)
    target.insertBefore(item,target.childNodes[0]);

 }
 // this function does the same but changing a bit of names. Could not find a smarter way to do this cuz im dumb.
    function doingItem2(){

        let item = this.parentNode.parentNode;

        let parent = item.parentNode;

        let id = parent.id;


        let user = document.getElementById('user1')


        let item1 = this.parentNode;
        item1.removeChild(user);

        let target = (id === "todo", "doing") ? document.getElementById("doing") : document.getElementById("todo");

        parent.removeChild(item);

        target.insertBefore(item,target.childNodes[0]);

    }

    // this function is if the complete button is pressed. I want the task to go to the completed section then.
function completed() {
    // grab list
    let item = this.parentNode.parentNode;
    // grab section
    let parent = item.parentNode;
    // grab the parent id
    let id = parent.id;
    // ternary operator again. Using two different conditions. If either is true i want the task in complete section.
    let target = (id === "todo" , "doing") ? document.getElementById("complete") : document.getElementById("todo");

    // remove from section
    parent.removeChild(item);
    // add to new section(complete)
    target.insertBefore(item,target.childNodes[0]);

}
// function to remove section, works if trashcan is pressed.
function removeItem(){
    // grab the list
    let item = this.parentNode.parentNode;
    // grab the section
    let parent  = item.parentNode;
    // remove list/task from section.
    parent.removeChild(item);
}

});