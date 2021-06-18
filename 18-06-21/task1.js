// Title: Promises
// Description: Return a promise on insertion of element inot an array
// Author: Adithya_Mallya@1NT18IS013
// Date: 18/06/21

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
