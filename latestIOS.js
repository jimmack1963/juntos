let fs = require('fs');
const exec = require('child_process').exec;

try {
  let mat_data = fs.readFileSync('juntos-mat.txt', 'utf8')

  let mat_rows = mat_data.split('\n')

  let offRow = 0
  let mat_likely = mat_rows[offRow]
  do {
    console.log('eval: ' + mat_likely)

    offRow += 1
    mat_likely = mat_rows[offRow]

  }
  while (!mat_likely.includes('.now.sh') )

  console.log('accepted: ' + mat_likely)

  let mat_url = mat_likely.split(' ').filter(function(word) { if (word) return true; })
  mat_url = mat_url[1]
  console.log(mat_url + ' is the material source')

   let full = 'confessions.lol'

  let destinations =
    full
    .toLowerCase()
    .split(',')
  let cmds = []
  let bat = []
  destinations.map((dest) => {
    cmds.push(
      `now alias set ${mat_url} ${dest}`
    )
    cmds.push(
      `now alias set ${mat_url} mat.${dest}`
    )

    bat.push('')
    bat.push(
      `now alias set ${mat_url} ${dest}`
    )
    bat.push(
      `now alias set ${mat_url} mat.${dest}`
    )
    bat.push('')
  })


  // console.log(JSON.stringify(cmds))
  console.log(bat.join('\r\n'))

/*
const child = exec(cmds.join(' \r\n'),

  (error, stdout, stderr) => {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });
*/

  let version = fs.readFileSync('src/statics/version.json', 'utf8')

console.log('echo ' + version)

  // rows.map( (r) => {
  //   let fields
  // })

}
catch (e) {

}
