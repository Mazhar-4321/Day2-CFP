function example1() {
    const promise = new Promise((accept, reject) => {
        const fs = require('fs');
        fs.readFile('/abc.txt', 'utf8', (err, data) => {
            if (err) {
                reject("File Read Unsuccessful");

            } else {
                accept(data);
            }
        });

    })
    promise.then(value => console.log(value)).catch(err => console.log(err))
}

example1()
//example2
function getUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      }, 1000);
    });
  }
  
  function onFulfilled(users) {
    console.log(users);
  }
  
  const promise = getUsers();
  promise.then(onFulfilled);