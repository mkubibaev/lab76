const fs = require('fs');

const fileName = './db.json';
let allMessages = [];

module.exports = {
    init() {
        try {
            const fileContents = fs.readFileSync(fileName);
            allMessages = JSON.parse(fileContents);
        } catch {
            allMessages = []
        }
    },
    getLastMessages() {
        try {
            return allMessages.slice(-30);
        } catch (e) {
            console.log(e);
        }
    },
    addMessage(item) {
        allMessages.push(item);
        this.save()
    },
    save() {
        fs.writeFileSync(fileName, JSON.stringify(allMessages, null, 2));
    }
};