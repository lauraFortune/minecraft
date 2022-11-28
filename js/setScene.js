    //=========================================//
    //                  SET THREE JS SCENE                                    //
    //=========================================//
    const scene = new THREE.Scene(); // create scene object
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); // create camera object - takes parameters: (Field of view(degrees), aspect ratio, near, far )
    camera.position.set(-5, 10, -10); // set camera at positions (x,y,z)
    camera.lookAt(2.5,0,0); // camera look at positions (x,y,z)
    const renderer = new THREE.WebGLRenderer(); // create renderer object
    renderer.setSize( window.innerWidth, window.innerHeight ); // set size to render to app
    renderer.setClearColor( 0xffffff, 0);  // set background colour to clear
    // shadows
    renderer.shadowMap.enabled = true; // enable shadow map
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE shadow map
    document.body.appendChild( renderer.domElement ); // add renderer to body object in the DOM
    // point light - create shadows
    const light = new THREE.PointLight( 0xffffff, 1, 100 ); // create light object - takes parameters: (colour, intensity, distance)
    light.position.set( 0, 10, -4 ); //  position light on x,y,z
    light.castShadow = true; // default is false
    scene.add( light ); // add light to the scene

    //=========================================//
    //                  CUBE SETUP                                               //
    //=========================================//
    const geometry = new THREE.BoxGeometry( 1, 1, 1 ); // box geometry to create cube - takes parameters(width, height, depth)
    // colours - MeshStandardMaterial accepts shadows - MeshBasicMaterial won't
    const blue = new THREE.MeshStandardMaterial( { color: 0xbdbbff } ); // takes hex codes
    const green = new THREE.MeshStandardMaterial( { color: 0x03e5ce } );
    const orange = new THREE.MeshStandardMaterial( { color: 0xf6c345 } );
    const pink = new THREE.MeshStandardMaterial( { color: 0xab0068 } );
    const peach = new THREE.MeshStandardMaterial( { color: 0xffdab9 } )
    const colours = [blue, green, orange, pink, peach]; // colours array to hold all colours - allows us to loop through
    const cubes = []; // cubes array to keep track of all cubes currently being rendered
    let currentCube = 0; // currentCube to keep count of cubes
    
    // rendering the scene
    function animate() { // animate loop 
        requestAnimationFrame( animate ); // renderer will draw the scene everytime the screen is refreshed
        renderer.render( scene, camera );
    }
    animate();

    // pulls from functions.js file - on page load - castle is displayed to screen as default 
    castleBuilder2();
