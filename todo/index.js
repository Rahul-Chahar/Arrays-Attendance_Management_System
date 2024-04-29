/* Task analyser */

const todo =[
    {taskName: "Reading newspaper", status: false},
    {taskName: "Taking revison class", status: true},
    {taskName: "Completing feature 01", status: false},
]

function taskAnalyser(todo){
    todo.forEach((data)=>{
        if(data.status){
            console.log(`task ${data.taskName} is completed`);
        } else {
            console.log(`task ${data.taskName} is pending`);
        }
    })
}
taskAnalyser(todo)


/* Attendance Management System */