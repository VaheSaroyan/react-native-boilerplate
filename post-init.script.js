#!/usr/bin/env node

const fs = require('fs')

fs.copyFile('src/config/index.example.js', 'src/config/index.js', (err) => {
    if (err) throw err;
    console.log('src/config/index.example.js was copied to src/config/index.js');
});

fs.unlink('src/config/index.example.js', (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('src/config/index.example.js was removed');
})

console.log("React-Native Boilerplate initialized with success !");


console.log(
    `
   VSVS                 VSVS        SVSVSVSVSSVSVSVSV
   VSVS                 VSVS      VSVSVSVVSVSVSVSVSVSV
    VSVS               VSVS         VVSVSV       VSVS 
     VSVS             VSVS             VVSVS  
      VSVS           VSVS                VSVSVS 
       VSVS         VSVS                   VSVSVS 
        VSVS       VSVS                      VVSVSV 
         VSVS     VSVS             VSVS       VVSVSV 
          VSVS   VSVS             VSVSVSVVSVSVSVSVSVSV         VSVS
           VSVS VSVS               VSVSVSVSSVSVSVSVS           VSVS
  `,
)


