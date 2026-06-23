//1 selecty form

document.querySelector("form").addEventListener("submit",getData);

// 2  get the data from the form

function getData(e){
    e.preventDefault()
    const taskName = document.querySelector("#task").value;
    const taskPriority = document.querySelector("#priority").value;


    // console.log(taskName,taskPriority)
    // let taskObj ={
    //     taskName:taskName;
    //     taskPriority:taskPriority
    // }

    let taskObj = {
        taskName,
        taskPriority
    };

    console.log(taskObj);

    displayTable(taskObj);
}

        // <tr>
        //   <td>aa</td>
        //   <td>High</td>
        //   <td>add</td>
        // </tr>

function displayTable(taskObj){
    let row = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = taskObj.taskName;
    
    let td2 = document.createElement("td");
    td2.innerText= taskObj.taskPriority;

    if (td2.innerText=="High"){
        td2.style.color="red"
    }else{
        td2.style.color="green"
    }

    let td3 = document.createElement("td");
    td3.innerText = "add";

    row.append(td1,td2,td3);

    document.querySelector("tbody").append(row)

    
}
