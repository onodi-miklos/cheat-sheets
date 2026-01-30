function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Task 1 completed");
            } else {
                reject("Task 1 failed");
            }
        }, 1000);
    })
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Task 2 completed");
            } else {
                reject("Task 2 failed");
            }
        }, 2000);
    })
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Task 3 completed");
            } else {
                reject("Task 3 failed");
            }
        }, 2500);
    })
}

async function runTasks() {
    try {
        const result1 = await task1();
        console.log(result1);

        const result2 = await task2();
        console.log(result2);

        const result3 = await task3();
        console.log(result3);
    } catch (error) { 
        console.error(error);
    }}