
    //=========================================//
    //                  BOX BUILDER FUNCTION                              //
    //=========================================//
    // builds 5*5 box - 125 cubes
    function boxBuilder() {
        for (let y = 0; y < 5; y++){ // does 5 times - 5 layers
            for(let x = 0; x < 5; x++){ // does 5 times - 5 rows
                for(let z= 0; z < 5; z++) { //does 5 times - builds 5 rows on z axis - 5 times                    
                    createCube(x,y,z); // create cube helper function is called 125 times 
                }
            }
        }
    }

    //=========================================//
    //                  PYRAMID BUILDER FUNCTION                       //
    //=========================================//
    // builds pyramid - 3 tiers(5, 3, 1); Layer 1 = 25 cubes(5*5), Layer 2 = 9 cubes(3*3), Layer 3 = 1 cube
    function pyramidBuilder() { 
        for (let y = 0; y < 3; y++){ // does 3 times ( 3 layers )
            for(let x = y; x < 5-y; x++){ // x = y, first time happens 5 times - 2nd time 3 times - 3rd time once
                for(let z= y; z < 5-y; z++) { // z = y, first time happens 5 times - 2nd time 3 times - 3rd time once
                    createCube(x,y,z);  // create cube helper function is called 35 times
                }
            }
        }
    }

    //=========================================//
    //                  CASTLE BUILDER FUNCTION 1                        //
    //=========================================//
    // build castle - 5 tiers - 1st attempt using if statements
    function castleBuilder() {
        for (let y = 0; y < 5; y++){ // happens 5 times - 5 layers
            if(y == 4){ // build castle top: when y = 4 - top layer
                // execute following code for top layer of castle
                for(let x = 0; x < 5; x+=2){  // x+= 2 means blocks build every 2nd step on x axis
                    for(let z = 0; z < 5; z+=2){ // z+= 2 means blocks build every 2nd step on z axis
                        createCube(x,y,z);  // create cube helper function
                    }
                }
            // else if y!=4 execute following code for layers 0 - 3 of castle
            } else { // build walls
                for(let x = 0; x < 5; x++){
                    if( x == 0 || x == 4) {  // only create cubes if x=0 or 4 
                        for(let z= 0; z <5; z++) {
                            createCube(x,y,z); // create cube helper function
                        }
                    // to create door - if below layer 3 and x position is greater than zero and smaller than 4
                    } else if (y < 2 && x > 0 && x < 4) { 
                        for(let z= 4; z <5; z++) { // will only create cubes at back wall of castle
                            createCube(x,y,z); // create cube helper function
                        }
                    } else { // else will create cubes at front and back walls of castle
                        for(let z= 0; z <5; z+=4) {
                            createCube(x,y,z);  // create cube helper function
                        }
                    }
                }
            }
        }
    }

    //=========================================//
    //                  CASTLE BUILDER FUNCTION 2                        //
    //=========================================//
    // simplified castle builder - 5 tiers - uses checkIgnoreBlocks function
    function castleBuilder2() {
        for (let y = 0; y < 5; y++){ // does 5 times
            for(let x = 0; x < 5; x++){ // does 5 times
                for(let z = 0; z < 5; z++){ // does 5 times
                    if ( checkIgnoreBlocks(x,y,z) == false){ // if parameters DON'T match coordinate in ignore blocks array
                        createCube(x,y,z);  // create cube helper function
                    } // else if parameters DO match an ignore block coordinate - don't create a cube!!
                }
            }
        }
    }

    //=========================================//
    //                  CROP CIRCLE BUILDER FUNCTION                  //
    //=========================================//
    // place cubes in circle
    function cropCircle(){
        let radius = 5; // radius of circle
        let angle = 0; // angle to place cube( starts at 0 )
        let y = 0; // only one layer 

        for(let i = 0; i < 12; i++){ // happens 12 times - 12 cubes are placed in circle
            let x = Math.cos(angle * (Math.PI / 180)) * radius; // Math.cos formula returns the x coordinate 
            let z = Math.sin(angle * (Math.PI / 180)) * radius; // Math.sin foruma returns the z coordinate 
            createCube(x,y,z); //create cube helper function
            angle += 30; // 360 / 12 = 30 - cubes are placed at an increment of 30 degrees each time
        }
    }
