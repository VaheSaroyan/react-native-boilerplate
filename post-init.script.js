#!/usr/bin/env node

const fs = require('fs')
fs.copyFile('src/config/index.example.js', 'src/config/api.js', (err) => {
    if (err) throw err;
    console.log('src/config/index.example.js was copied to src/config/api.js');
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


