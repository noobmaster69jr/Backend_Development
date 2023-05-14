const fs = require('fs')
const transformStream = require('stream')
let fileStream = fs.createReadStream(__dirname+'/input.txt')
const outputStream = process.stdout

let middleStream = new transformStream.Transform({
    transform(chunk, enc, nextCB){
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk)
        setTimeout(nextCB, 1000);
    }
})

let newReadableStream = fileStream.pipe(middleStream)
newReadableStream.pipe(outputStream)

//readStream.pipe(outputStream)
//fileStream.pipe(outputStream)