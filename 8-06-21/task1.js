// promise on successfull insertion of element to array
// set setTimeout of 1000ms

// promise to display elements of an array
// on click on a button "show"

const db = [];

const insertIntoDb = (val) => {
    return new Promise((resolve, reject) => {
        
        if(val !== undefined && val !== null){
            db.push(val);
            let res = {
                'status': 'inserted',
                'data': db
            }
            setTimeout(resolve(res), 2000);
        } else {
            reject(new Error("Invalid value!!"))
        }
    })
}

const promise1 = insertIntoDb(13)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));

const promise2 = insertIntoDb()
    .then(res => console.log(res))
    .catch(err => console.log(err));