/* Copyright (C) 2022 Kichu.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Kichu
*/

const fs = require('fs');

class StringSession {
    constructor() {
    }

    deCrypt(string = undefined) {
        if ('KANNAN_SESSION' in process.env && string === undefined) {
            string = process.env.STRING_SESSION;
        } else if (string !== undefined) {
            if (fs.existsSync(string)) {
                string = fs.readFileSync(string, {encoding:'utf8', flag:'r'});
            }
        }
        
        var split = string.split(':::');
        if (split.length >= 2) {
            return JSON.parse(Buffer.from(split[split.length - 1], 'base64').toString('utf-8'));
        }
    }

    createStringSession(dict) {
        return 'LizaMwol:::' + Buffer.from(JSON.stringify(dict)).toString('base64');
    }
}

module.exports = StringSession;
