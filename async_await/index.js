// async makes a function return a promise
// await makes an async function wait for a promise
//to do:
// do chores in order
// wake up
// eat your breakfast
// go to school
function wakeup(){
    return new Promise(
        (resolve, reject) =>{
            setTimeout(() => {
                const wakedup = true;
                if (!wakedup){
                    reject("you didn't wake up");
                }
                else{
                    resolve("you wake up!");
                }
            }, 2000);
        }
    );
}
function breakfast(){
    return new Promise(
        (resolve, reject) =>{
            setTimeout(() => {
                const eat = true;
                if (!eat){
                    reject("you didn't eat your breakfast");
                }
                else{
                    resolve("you eat your breakfast!");
                }
            }, 2500);
        }
    );
}
function school(){
    return new Promise(
        (resolve, reject) =>{
            setTimeout(() => {
                const gotoschool = true;
                if (!gotoschool){
                    reject("you didn't go to school");
                }
                else{
                    resolve("you go to school!");
                }
            }, 3000);
        }
    )
}
async function do_tasks(){
    try {
    const wakeup_res= await wakeup();
    console.log(wakeup_res);

    const breakfast_res= await breakfast();
    console.log(breakfast_res);

    const school_res= await school();
    console.log(school_res);

    console.log("you finished all the tasks!");
        
    } catch (error) {
        console.error(error);
    }
}
do_tasks();