const fs = require('fs').promises
const path = require('path')

// We will pass the DATA_PATH value as an environmental variable while running the docker container
const dataPath = path.join(process.env.DATA_PATH || './data.txt')

fs.readFile(dataPath)
  .then((buffer) => {
    const data = buffer.toString()
    console.log(data)
    writeTo(+data + 1)
  })
  .catch((e) => {
    console.log("file not found, writing '0' to a new file")
    writeTo(0)
  })

const writeTo = (data) => {
  fs.writeFile(dataPath, data.toString()).catch(console.error)
}
