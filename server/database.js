const mysql = require('mysql');

let instance = null;

const connection= mysql.createConnection({
    localhost: 'localhost',
    user:'root',
    password: 'rootpass',
    database:'msad' 

})

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    // console.log('db ' + connection.state);
});


class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async searchCode(x) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM jeep WHERE jeep_code = ?;";

                connection.query(query,[x], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports= DbService;



