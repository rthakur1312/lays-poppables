
import {GLTFLoader} from "./GLTFLoader.js";
import { Loader } from "./three.module.js";
import {OrbitControls} from "./OrbitControls.js";
import { TransformControls } from 'https://threejs.org/examples/jsm/controls/TransformControls.js';




let scene, camera, renderer, cube, light, mx, my, controls, transformControls, elementClicked;
let isMouseDown = false;
let isPointerDown = false;


const div = document.getElementById('product-img-bg');


//renderer
renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
renderer.setSize(800,900 );
// renderer.setPixelRatio(window.devicePixelRatio);
       
div.appendChild(renderer.domElement);


//scene
    scene = new THREE.Scene();


//camera
    camera = new THREE.PerspectiveCamera(75, 800 / 900, 1, 5000 );
     camera.position.set(-10, 100, 1600);
    camera.lookAt(0, 0, 0);

//controls

    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false;
    // controls.enableDamping = true;
    

    transformControls = new TransformControls(camera, renderer.domElement);
    transformControls.setMode("rotate");
    console.log(transformControls);


//light

    light = new THREE.HemisphereLight(0XFFFFFF, 0X000000, 2);
    scene.add(light);
   

    let loader = new GLTFLoader();

    let obj;
    loader.load("BBQ3.glb", function(gltf){
        obj = gltf.scene;
        var box = new THREE.Box3().setFromObject( obj );
	 var center = new THREE.Vector3();
	 box.getCenter( center );
	 obj.position.sub( center );
        
        scene.add(gltf.scene);
           // obj.scale.set(18,18,18);
    });
    



    // window.addEventListener('mousedown', onMouseDown);
    // window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    

        // function onMouseDown(){
        //     isMouseDown = true;
        // }

        // function onMouseUp(){
        //     isMouseDown = false;
        // }

        function onPointerDown(){
            isPointerDown = true;
        }

        function onPointerUp(){
            isPointerDown = false;
        }


   
         elementClicked = false;
        console.log(elementClicked);

        document.getElementById('product-img-bg').addEventListener('click', function () {
            elementClicked = true;
        })


        


       

       


        

    function animate() {
        requestAnimationFrame(animate);
        controls.update;

        
        if(!isPointerDown) {
        obj.rotation.y += 0.01;

        $(function() {
            var isDragging = false;
            $("#product-img-bg")
            .mousedown(function() {
                document.getElementById('clickable-ingredients').style.display = 'none';
                document.getElementById('clickable').style.display = 'none';   
                    
            })
            .mouseup(function() {
                document.getElementById('clickable-ingredients').style.display = 'flex';
                document.getElementById('clickable').style.display = 'flex'; 
                 
            });
        });
       
        if(elementClicked) {
            obj.rotation.y = 0.00;
            document.getElementById('clickable-ingredients').style.display = 'flex';
            document.getElementById('clickable').style.display = 'flex';
            
            controls.reset();
        }

        else {
        
        let rotationAngle = THREE.Math.radToDeg(obj.rotation.y) % 360;

        // console.log(rotationAngle);

        if(rotationAngle > 130 && rotationAngle < 300) {
            obj.rotation.y += 0.02;
            
        }

        // if(rotationAngle > 300) {
        //     document.getElementById('clickable').style.display = 'none';
        // }
        
        }
    }

        renderer.render(scene, camera);
    }

    animate();


   
    
    
    
