const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('../../db/cyber_db.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to Cyber Asset DB.');
});

export function getAssets() {
    let rows = [];
    db.all(`SELECT * FROM assets ORDER BY asset_id`, [], (err, queryRows) => {
        if (err) {
            throw err;
        }
        rows = queryRows;
    });
    return rows;
}

export function getAsset(id) {
    let rows = [];
    db.get(`SELECT * FROM assets WHERE asset_id = ?`, [id], (err, queryRows) => {
        if (err) {
            throw err;
        }
        rows = queryRows;
    });
    return rows;
}

export function addAsset(data) {
    db.run( `INSERT INTO assets(name, type, serial_number, operating_system, department) VALUES (?, ?, ?, ?, ?)`, [...data.split(",")], (err) => {
        if (err) {
            throw err;
        }
    })
}

export function deleteAsset(id) {
    db.run(`DELETE FROM assets WHERE asset_id = ?`, [id], (err) => {
        if (err) {
            throw err;
        }
    });
}