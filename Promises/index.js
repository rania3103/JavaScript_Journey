// an object that manages asynchronous code
// new promise((resolve, reject) =>{asynchronous code});
///////////////////////////////////////////////////
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
wakeup().then(
    value => {console.log(value); return breakfast()}
    ).then(value => {
        console.log(value);
        return school();
    }).then(
        value => {console.log(value);
        console.log("you finished all the tasks");
        }
    ).catch(error => {console.log(error);});

