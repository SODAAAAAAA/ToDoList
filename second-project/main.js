//값 입력
//버튼 클릭 및 엔터 아이템 추가
//삭제버튼 > 할일 삭제
//체크버튼 할일 끝
//탭 누르면 언더바 이동
//전체 진행중 완료 아이템만 보이게

let taskInput = document.getElementById('taskInput')
let AddBtn = document.getElementById('AddBtn')
let taskList = []
let taskItem = document.querySelectorAll('.taskItem')

AddBtn.addEventListener('click', addTask)

function addTask(){
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false,
        delete: false
    }

    taskList.push(task)
    console.log(taskList)

    render();
}

function render(){
    let resultHTML = ''

    for(let i = 0; i<taskList.length; i++) {

        if(taskList[i].delete == true) {

            taskList.splice(i, 1);

            resultHTML += ''

            document.getElementById('taskBoard').removeChild(taskItem)

            //아니 왜 두번 눌러야하느거임........ 

        } else if(taskList[i].isComplete == true){
            resultHTML +=`<div class="taskItem">
            <div class="taskDone">
                ${taskList[i].taskContent}
            </div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-arrow-rotate-right fa-lg"></i></button>
                <button onclick="toggleDelete('${taskList[i].id}')"><i class="fa-solid fa-trash fa-lg"></i></button>
            </div>
        </div>`
        } else {
            resultHTML += `<div class="taskItem">
            <div>
                ${taskList[i].taskContent}
            </div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-check fa-lg"></i></button>
                <button onclick="toggleDelete('${taskList[i].id}')"><i class="fa-solid fa-trash fa-lg"></i></button>
            </div>
        </div>`;
        }
        
    }
    document.getElementById('taskBoard').innerHTML = resultHTML;
}

function deleteItem() {
    console.log("삭제 가보자고")
}

function toggleComplete(id){

    for(let i = 0; i<taskList.length; i++) {
        if(taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }

    render();
}

function toggleDelete(id){

    for(let i = 0; i<taskList.length; i++) {
        if(taskList[i].id == id) {
            taskList[i].delete = !taskList[i].delete;
            break;
        }
    }

    render();
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9);
}