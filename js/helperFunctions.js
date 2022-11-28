    
    //=========================================//
    //                      RADIO BUTTONS FUNCTION                      //
    //=========================================//
    // renders selected model
    function getModelSelected(el){ 
        currentCube = 0; // resest current cube to zero before building new model - otherwise count will keep incrementing
        // console.log(el.value);
        if(el.value == 'box'){ // if selected radio value is equal to 'box'
            destroyCubes(); // destroy previous model
            boxBuilder(); // build box
        }else if(el.value == 'pyramid'){ 
            destroyCubes(); 
            pyramidBuilder(); 
        } else if(el.value == 'castle'){
            destroyCubes();
            castleBuilder2();
        } else if(el.value == 'cropCircle'){
            destroyCubes();
            cropCircle();
        }
    }
    
    //=========================================//
    //                  IGNORE BLOCKS FUNCTION                          //
    //=========================================//
    //  checks for blocks to ignore - while building model
    function checkIgnoreBlocks(x,y,z){  // takes (x,y,z) positions as parameters
        for(let i = 0; i < castleIgnoreBlocks.length; i++){ // loops through ignoreBlocks array
            // compares current x,y,z parameters to each set of coordinates in the ignoreBlocks array
            if(castleIgnoreBlocks[i].x == x && castleIgnoreBlocks[i].y == y && castleIgnoreBlocks[i].z == z){
                return true; // returns true if all criteria met - match found!
                break;
            }
        }
        return false; // returns false - if no match found
    }

    //=========================================//
    //                  CREATE CUBE  FUNCTION                             //
    //=========================================//
    // creates individual cubes - models are created from cubes
    function createCube(x,y,z) {  // takes (x,y,z) positions as parameters
        // var cube is equal to THREEjs Mesh object
        // mesh object takes two three js objects as parameters - box geometry object, colour object(MeshStandardMaterial)
        let cube = new THREE.Mesh( geometry, colours[y] ); // colours array holds all colour objects - y index means each layer will be a different colour
        cube.castShadow = true; //set cube to cast shadows - default is false
        cube.receiveShadow = true; //sest cube to receive shadow
        cubes.push(cube); // push cube to cubes array
        cube.position.set(x,y,z); // set cube position to x,y,z parameters
        scene.add( cube ); // add cube to the scene
        currentCube++; // add 1 to cube counter
    }

    //=========================================//
    //                  DESTROY CUBES  FUNCTION                         //
    //=========================================//
    // destroys all cubes in scene 
    function destroyCubes(){
        // console.log('destroying cubes');
        for(var i = 0; i < cubes.length; i++){ // loop through the cubes array
            scene.remove(cubes[i]); // remove each cube from the scene
        }
    }
    