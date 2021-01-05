#!/usr/bin/env node

const fs = require('fs')
fs.copyFile('src/Config/index.example.js', 'src/Config/index.js', (err) => {
    if (err) throw err;
    console.log('src/Config/index.example.js was copied to src/Config/index.js');
});

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


