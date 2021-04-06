let central = require('./central'),
    db1 = require('./db1'),
    db2 = require('./db2'),
    db3 = require('./db3'),
    vault = require('./vault'),
    mark = require('./mark');

module.exports = function(id) {
    const obj = {};
    const dbs = {
        db1: db1,
        db2: db2,
        db3: db3,
    }

    return new Promise((resolve, reject) => {
        Promise.all([
            central(id)
                .catch(() => Promise.reject('Error central'))
                .then((db) => {
                    return dbs[db](id)
                        .catch(() => Promise.reject('Error ' + db))
                }),
            vault(id)
                .catch(() => Promise.reject('Error vault'))
        ])
        .then((arr) => {
            mark(id)
                .catch(() => {});

            obj.id = id;
            for(let target of arr) {
                for(let key in target) {
                    obj[key] = target[key];
                }
            }

            resolve(obj);
        })
        .catch((error) => {
            reject(error);
        }) 
    })

};