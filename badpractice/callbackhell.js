function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 is complete");
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 is complete");
        callback();
    }, 4000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 is complete");
        callback();
    }, 1000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 is complete");
        callback();
    }, 3000);
}

function finaltask() {  // No callback needed since it's the final task
    setTimeout(() => {
        console.log("All tasks are completed");
    }, 1000);
}

// Callback Hell
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                finaltask(); // No callback needed
            });
        });
    });
});
