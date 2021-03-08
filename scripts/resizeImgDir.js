const fs = require('fs');
const fg = require('fast-glob');

const sharp = require('sharp');

const pathIn = process.argv[2];
const pathOut = process.argv[3];

const SIZES = [ 400, 800, 1200 ];

const printProgress = (current, all) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  if(current < all){
    const perc = (current/all*100).toFixed(1);
    process.stdout.write(perc + '%');
  } else {
    process.stdout.write("Done.\n");
  }
}

fs.existsSync(pathOut) || fs.mkdirSync(pathOut);

const meta = fs.createWriteStream( `${pathOut}/meta.csv` );
meta.write( 'name,width,height,info\n' );

const entries = fg.sync( `${pathIn}*.{jpg,JPG}` );
let counter = 0;
process.stdout.write(`${entries.length} files will be resized.\n`);

entries.forEach(async function(file) {
  const fileName = file
    .replace(pathIn, '')
    .replace(/jpg/i, 'webp')
    .replace(/ /g, '_');
  
  SIZES.forEach( size => {
    fs.existsSync(`${pathOut}/${size}`) || fs.mkdirSync(`${pathOut}/${size}`);
    
    sharp(file)
      .rotate()
      .resize({ height: size })
      .normalize()
      .webp({ quality: 67 })
      .toFile(`${pathOut}/${size}/${fileName}`)
      .then( info => {
        if( size == 400 ){
          meta.write( `${fileName},${info.width},${info.height},\n` );
        }
        printProgress( ++counter, entries.length * SIZES.length );
      })
      .catch( err => { 
        process.stdout.write(`${err} on file: ${file}\n`);
      });
  });
}); 
