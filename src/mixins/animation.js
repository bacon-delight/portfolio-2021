import * as THREE from "three";
import _ from "lodash";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	50,
	window.innerWidth / window.innerHeight,
	0.01,
	100
);
const renderer = new THREE.WebGLRenderer({ antialias: true });

export default {
	name: "LandingAnimation",
	data() {
		return {
			environment: {
				counter: 0,
				objects: [],
				mouse: {
					x: 0,
					y: 0,
				},
				scroll: 0,
			},
		};
	},
	mounted() {
		this.initializeCamera();
		this.initializeRenderer();
		this.initializeLights();
		this.animate();
		window.addEventListener("resize", this.handleResize);
	},
	methods: {
		initializeCamera() {
			camera.position.set(0, 0, 8);
			camera.lookAt(new THREE.Vector3());
		},
		initializeRenderer() {
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(window.devicePixelRatio);
			document.body.appendChild(renderer.domElement);
		},
		initializeLights() {
			this.ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
			scene.add(this.ambientLight);
		},

		// Scene and Environment
		addObjectToScene(object) {
			scene.add(object);
			this.environment.objects.push(object);
		},

		// Events
		handleResize() {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setPixelRatio(window.devicePixelRatio);
		},
		handlePointerMovement() {
			this.environment.mouse.x = event.clientX;
			this.environment.mouse.y = event.clientY;
		},
		handleScroll() {
			this.environment.scroll = document.getElementById("page").scrollTop;
		},

		// Game Loop
		updateRendering() {
			this.environment.counter += 0.1;
			_.forEach(this.environment.objects, (object) => {
				if (object.animation) {
					object.animation();
				}
			});
			renderer.render(scene, camera);
		},
		animate() {
			this.updateRendering();
			requestAnimationFrame(this.animate);
		},
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.handleResize);
		document.removeEventListener("mousemove", this.handlePointerMovement);
		document.removeEventListener("scroll", this.handleScroll);
	},
};
