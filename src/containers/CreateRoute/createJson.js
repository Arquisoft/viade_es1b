import * as fs from 'browserify-fs';

class createJson {

    createJson(name, markers) {
        var dict = {
            "one": [15, 4.5],
            "two": [34, 3.3],
            "three": [67, 5.0],
            "four": [32, 4.1]
        };
        fs.writeFile('./hello-world.txt', 'Hello world!\n', function () {
            fs.readFile('./hello-world.txt', 'utf-8', function (err, data) {
                console.log(data);
            });
        });
    }
}

export default createJson = new createJson();