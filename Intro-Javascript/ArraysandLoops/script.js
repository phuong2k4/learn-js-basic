// arrays 
// const arrays = ["nope", 1,2, true]; 
// console.log(arrays);
// console.log(Array.isArray(arrays));// true
// console.log(arrays.length) // 3
// arrays.push("david") // ["nope", 1 ,2, true, "david"] add value
// arrays.splice(3,4) // ["nope", 1, 2, true] remove value -->

// // loops
// var myage = 1
// while(myage <= 50){
//     console.log(myage)
//     if(myage === 18){
//         console.log("I cant fuck everybody")
//     }
//     myage++;
// }

// var mysalary = 1;
// for(var i = 0;i<10;i++){
//     console.log("Month: " + i);
//     mysalary = i*1000;
// }
// console.log(mysalary + "$");

// var todoToday = [
//     "watch youtube",
//     "get dinner",
//     "sleep"
// ]
// todoToday.forEach((todo)=>{
//     console.log(todo)
// })

// var arrays = [1,2,3];
// var result = 0;
// arrays.forEach(function(num){
//     result += num;
// })
// console.log(result);

/*solution*/ 
/*
    var todolist = ''
    const data_storage = []
    const showTodo = document.querySelector(".display-todo")
    const btn = document.querySelector(".btn-js")

    function makelist(){
        const todoText = document.querySelector(".todo-js");
        data_storage.push(todoText.value);
    // Display todo when user click done
        todolist += `<p>${todoText.value}</p>`
        showTodo.innerHTML = todolist
    // make empty input when press submit button
        todoText.value = '';
}
*/

/*solution*/

let todoList = [];
let date_list = [];

renderList();
function renderList(){
// create convert_html for show todo by a div tag
    let convert_html = ''
// each element in todoList create html to print out
    todoList.forEach((value, index)=>{
        var todo_each_index = value;
        var todo_each_date = date_list[index];
        const html = 
        ` <div class="css-todo">
            <div>${todo_each_index}</div>
            <div>${todo_each_date}</div>
            <button 
                    class="del-js del-event">Delete</button>
            </div>`
        convert_html += html;
    })
// print result
    const show_todo = document.querySelector(".show-todo")
    show_todo.innerHTML = convert_html
// delete todo by addeventlistener
    document.querySelectorAll('.del-event')
    .forEach((value, index)=>{
        console.log(value)
        value.addEventListener("click",()=>{
            todoList.splice(index,1);
            renderList();
        })
    })
}
function getTodo(){
// get string value todo 
    const input_todo = document.querySelector(".todo-js")
    var todo_content = input_todo.value
    todoList.push(todo_content)
// get date value
    const input_date = document.querySelector(".date-js")
    var date_content = input_date.value;
    date_list.push(date_content)
    console.log(todoList)
//print out display by div
    renderList()
    input_todo.value = ''
}

// add click event to button when this btn was press
document.querySelector(".btn-event")
.addEventListener('click',()=>{
    getTodo();
})



/* Reference Array */
// const array1 = [1,2,3];
// const array2 = array1;
// const array2 = array1.slice();
// array2.push(4);
// console.log(array1);
// console.log(array2);

/* shortcut destructuring */
// const [firstValue, secondValue] = [1,2,3];
// console.log(firstValue);

