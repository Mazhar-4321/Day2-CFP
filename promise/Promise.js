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