// ------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene
function main(){
    var canvas = document.querySelector('#c');
    var scene = new THREE.Scene();
  
  {
    const color = 0xFFFFFF;
    const intensity = 10.5;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 5, 0);
    scene.add(light);
  }
  
  // Create a basic perspective camera
  var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 2000 );
  camera.position.z = 1.25;
  
  // Create a renderer with Antialiasing
  var renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
  });
  renderer.autoClearColor = false;

  
  // Configure renderer clear color
  renderer.setClearColor( 0x000000, 0 ); // the default
  
  // // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight);
  
  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
  
  // ------------------------------------------------
  // FUN STARTS HERE
  // ------------------------------------------------
  
  // Create a Cube Mesh with basic material
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  var material = new THREE.MeshPhongMaterial( { color: "#433F81" } );
  var cube = new THREE.Mesh( geometry, material );
  
  cube.material.color.setRGB(0.1, 0.5, 0.1);
 
  // Add cube to Scene
  scene.add( cube );
  // cube.rotation.x = Math.PI / 4

  // Render Loop
  
  var render = function () {
    requestAnimationFrame( render );
  
    cube.rotation.x += 0.004;
    cube.rotation.z += 0.004;
    cube.rotation.z += -0.002;
   
    
    // Render the scene
    renderer.render(scene, camera);
  };
  
  render();
  }
  main();