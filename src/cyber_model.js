const sqlite3 = require('sqlite3').verbose();
let cyber_db = new sqlite3.Database('../../db/cyber_db.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to Cyber Asset DB.');
});

export function getAssets() {
    let rows = [];
    cyber_db.all(`SELECT * FROM assets ORDER BY asset_id`, [], (err, queryRows) => {
        if (err) {
            throw err;
        }
        rows = queryRows;
    });
    return rows;
}
