import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js'
import CustomShaderMaterial from 'three-custom-shader-material/vanilla'
import GUI from 'lil-gui'
import gsap from 'gsap'
import wobbleTVVertexShader from './Shaders/WobbleTV/vertex.glsl'
import wobbleTVFragmentShader from './Shaders/WobbleTV/fragment.glsl'
import wobbleSphereVertexShader from './Shaders/WobbleSphere/vertex.glsl'
import wobbleSphereFragmentShader from './Shaders/WobbleSphere/fragment.glsl'
import wobbleMonkeyVertexShader from './Shaders/WobbleMonkey/vertex.glsl'
import wobbleMonkeyFragmentShader from './Shaders/WobbleMonkey/fragment.glsl'
import overlayVertexShader from './Shaders/Overlay/vertex.glsl'
import overlayFragmentShader from './Shaders/Overlay/fragment.glsl'


/**
 * Loaders
 */
// Loading
const loaderElement = document.querySelector('.loading')
const loadingManager = new THREE.LoadingManager(
    // Loaded
    () => {
        gsap.delayedCall(1, () => {

            loaderElement.style.display = 'none'

            gsap.to(
                overlayMaterial.uniforms.uAlpha, 
                { duration: 1.5, value: 0, delay: 0.5 }
            )

            window.setTimeout(() => {
                initGUI()
            }, 2000)

            window.setTimeout(() => {
                if (tv) {
                    tv.visible = true
                }    
                if (screen) {
                    screen.visible = true
                } 
                if (snickers) {
                    snickers.visible = true
                } 
                if (monkey) {
                    monkey.visible = true
                } 
                if (wobble) {
                    wobble.visible = true
                } 
            }, 500)
        })
    },
    // Progress
    (itemUrl, itemsLoaded, itemsTotal) => 
    {
        loaderElement.style.display = 'block'
    }
)

const rgbeLoader = new RGBELoader(loadingManager)
const dracoLoader = new DRACOLoader(loadingManager)
dracoLoader.setDecoderPath('./draco/')
const gltfLoader = new GLTFLoader(loadingManager)
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Base
 */
// Debug
const debugObject = {}

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Overlay
 */
const overlayGeometry = new THREE.PlaneGeometry(2, 2, 1, 1)
const overlayMaterial = new THREE.ShaderMaterial({
    vertexShader: overlayVertexShader,
    fragmentShader: overlayFragmentShader,
    uniforms: {
        uAlpha: new THREE.Uniform(1)
    },
    transparent: true,
    depthWrite: false,
})
const overlay = new THREE.Mesh(overlayGeometry, overlayMaterial)
scene.add(overlay)

/**
 * Environment map
 */
rgbeLoader.load('./Environment/artist_workshop_2k.hdr', (environmentMap) =>
{
    environmentMap.mapping = THREE.EquirectangularReflectionMapping

    scene.background = environmentMap
    scene.environment = environmentMap
})

/**
 * Wobble
 */
// Material TV
debugObject.colorA = '#00ffee'
debugObject.colorB = '#00457a'

const uniforms = {
    uTime: new THREE.Uniform(0),

    uPositionFrequency: new THREE.Uniform(0.382),
    uTimeFrequency: new THREE.Uniform(0.382),
    uStrength: new THREE.Uniform(0.496),

    uWarpPositionFrequency: new THREE.Uniform(0.691),
    uWarpTimeFrequency: new THREE.Uniform(0.496),
    uWarpStrength: new THREE.Uniform(1.048),

    uColorA: new THREE.Uniform(new THREE.Color(debugObject.colorA)),
    uColorB: new THREE.Uniform(new THREE.Color(debugObject.colorB)),
}


const material = new CustomShaderMaterial({
    // CSM
    baseMaterial: THREE.MeshPhysicalMaterial,
    vertexShader: wobbleTVVertexShader,
    fragmentShader: wobbleTVFragmentShader,
    uniforms: uniforms,
    silent: true,

    // MeshPhysicalMaterial
    metalness: 1,
    roughness: 0.5,
    color: '#ffffff',
    transmission: 0,
    ior: 1.5,
    thickness: 1.5,
    transparent: true,
    wireframe: false
})

const material2 = new THREE.MeshPhysicalMaterial({
    metalness: 1,
    roughness: 0,
    color: '#ffffff',
    transmission: 0,
    ior: 1.5,
    thickness: 1.3,
    transparent: true,
    wireframe: false
})

const depthMaterial = new CustomShaderMaterial({
    // CSM
    baseMaterial: THREE.MeshDepthMaterial,
    vertexShader: wobbleTVVertexShader,
    uniforms: uniforms,
    silent: true,

    // MeshDepthMaterial
    depthPacking: THREE.RGBADepthPacking
})

// Material sphere
debugObject.colorC = '#a30000'
debugObject.colorD = '#a600ff'

const uniformsSphere = {
    uTime: new THREE.Uniform(0),

    uPositionFrequency: new THREE.Uniform(0.804),
    uTimeFrequency: new THREE.Uniform(1.177),
    uStrength: new THREE.Uniform(0.577),

    uWarpPositionFrequency: new THREE.Uniform(0.626),
    uWarpTimeFrequency: new THREE.Uniform(1.388),
    uWarpStrength: new THREE.Uniform(0.707),

    uColorC: new THREE.Uniform(new THREE.Color(debugObject.colorC)),
    uColorD: new THREE.Uniform(new THREE.Color(debugObject.colorD)),
}


const materialSphere = new CustomShaderMaterial({
    // CSM
    baseMaterial: THREE.MeshPhysicalMaterial,
    vertexShader: wobbleSphereVertexShader,
    fragmentShader: wobbleSphereFragmentShader,
    uniforms: uniformsSphere,
    silent: true,

    // MeshPhysicalMaterial
    metalness: 0,
    roughness: 1.0,
    color: '#ffffff',
    transmission: 0,
    ior: 1.5,
    thickness: 1.5,
    transparent: true,
    wireframe: false
})

const depthMaterialSphere = new CustomShaderMaterial({
    // CSM
    baseMaterial: THREE.MeshDepthMaterial,
    vertexShader: wobbleSphereVertexShader,
    uniforms: uniformsSphere,
    silent: true,

    // MeshDepthMaterial
    depthPacking: THREE.RGBADepthPacking
})

// Material Monkey
debugObject.colorE = '#fae500'
debugObject.colorF = '#ff0033'

const uniformsMonkey = {
    uTime: new THREE.Uniform(0),

    uPositionFrequency: new THREE.Uniform(0.528),
    uTimeFrequency: new THREE.Uniform(0.82),
    uStrength: new THREE.Uniform(0.253),

    uWarpPositionFrequency: new THREE.Uniform(0.35),
    uWarpTimeFrequency: new THREE.Uniform(0.577),
    uWarpStrength: new THREE.Uniform(0.853),

    uColorE: new THREE.Uniform(new THREE.Color(debugObject.colorE)),
    uColorF: new THREE.Uniform(new THREE.Color(debugObject.colorF)),
}


const materialMonkey = new CustomShaderMaterial({
    // CSM
    baseMaterial: THREE.MeshPhysicalMaterial,
    vertexShader: wobbleMonkeyVertexShader,
    fragmentShader: wobbleMonkeyFragmentShader,
    uniforms: uniformsMonkey,
    silent: true,

    // MeshPhysicalMaterial
    metalness: 0,
    roughness: 0,
    color: '#ffffff',
    transmission: 0.418,
    ior: 10,
    thickness: 3.778,
    transparent: true,
    wireframe: false
})

const depthMaterialMonkey = new CustomShaderMaterial({
    // CSM
    baseMaterial: THREE.MeshDepthMaterial,
    vertexShader: wobbleMonkeyVertexShader,
    uniforms: uniformsMonkey,
    silent: true,

    // MeshDepthMaterial
    depthPacking: THREE.RGBADepthPacking
})

/**
 * Sphere
 */
let geometry = new THREE.IcosahedronGeometry(2.5, 50)
geometry = mergeVertices(geometry)
geometry.computeTangents()

// Mesh
const wobble = new THREE.Mesh(geometry, materialSphere)
wobble.customDepthMaterial = depthMaterialSphere
wobble.receiveShadow = true
wobble.castShadow = true
wobble.position.set(1, 0.5, 0)
wobble.visible = false
scene.add(wobble)

//Model
let tv
let screen
let snickers
gltfLoader.load('./Model/tv.glb', (gltf) => 
{
    const model = gltf.scene
    model.position.set(9, - 2, 0)
    scene.add(model)

    tv = model.children.find((child) => child.name === 'TV')
    tv.receiveShadow = true
    tv.castShadow = true
    tv.material = material
    tv.customDepthMaterial = depthMaterial
    tv.visible = false

    screen = model.children.find((child) => child.name === 'Screen')
    screen.material = material2
    screen.visible = false

    snickers = model.children.find((child) => child.name === 'Snickers')
    snickers.receiveShadow = true
    snickers.castShadow = true
    snickers.material = material2
    snickers.visible = false

})

let monkey
gltfLoader.load('./Model/monkey.glb', (gltf) => 
    {
        monkey = gltf.scene.children[0]
        monkey.receiveShadow = true
        monkey.castShadow = true

        monkey.material = materialMonkey
        monkey.customDepthMaterial = depthMaterialMonkey
        monkey.visible = false

        monkey.position.set(- 8.5, - 0.5, 0)
        scene.add(monkey)
    })

/**
 * Plane
 */
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(25, 25, 25),
    new THREE.MeshPhysicalMaterial({
        metalness: 0.286,
        roughness: 0,
        color: '#ffffff',
        transmission: 0.188,
        ior: 1.3,
        thickness: 3.282,
        transparent: true,
        wireframe: false,
        // side: THREE.DoubleSide
    }),
)
plane.receiveShadow = true
plane.rotation.y = Math.PI
plane.position.y = - 3.5
plane.position.z = 6.5
scene.add(plane)

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 5)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 20
directionalLight.shadow.camera.left = - 12
directionalLight.shadow.camera.right = 12
directionalLight.shadow.normalBias = 0.05
directionalLight.position.set(0.25, 2, - 3.75)
scene.add(directionalLight)

/**
 * Tweaks
 */
function initGUI()
{
    const gui = new GUI({ width: 325 })

    const planeFolder = gui.addFolder('Plane')
    planeFolder.close()
    planeFolder.add(plane.material, 'metalness', 0.0, 1, 0.001)
    planeFolder.add(plane.material, 'roughness', 0.0, 1, 0.001)
    planeFolder.add(plane.material, 'transmission', 0, 1, 0.001)
    planeFolder.add(plane.material, 'ior', 0, 2, 0.001)
    planeFolder.add(plane.material, 'thickness', 0, 10, 0.001)
    planeFolder.addColor(plane.material, 'color')

    // TV
    const tvFolder = gui.addFolder( 'TV')
    // tvFolder.close()
    tvFolder.addColor(debugObject, 'colorA')
        .onChange(() => uniforms.uColorA.value.set(debugObject.colorA))
    tvFolder.addColor(debugObject, 'colorB')
        .onChange(() => uniforms.uColorB.value.set(debugObject.colorB))
    tvFolder.add(material, 'metalness', 0, 1, 0.001)
    tvFolder.add(material, 'roughness', 0, 1, 0.001)
    tvFolder.add(material, 'transmission', 0, 1, 0.001)
    tvFolder.add(material, 'ior', 0, 10, 0.001)
    tvFolder.add(material, 'thickness', 0, 10, 0.001)
    tvFolder.add(uniforms.uPositionFrequency, 'value', 0, 2, 0.001).name('Position Frequency')
    tvFolder.add(uniforms.uTimeFrequency, 'value', 0, 2, 0.001).name('Time Frequency')
    tvFolder.add(uniforms.uStrength, 'value', 0, 2, 0.001).name('Strength')
    tvFolder.add(uniforms.uWarpPositionFrequency, 'value', 0, 2, 0.001).name('WarpPosition Frequency')
    tvFolder.add(uniforms.uWarpTimeFrequency, 'value', 0, 2, 0.001).name('WarpTime Frequency')
    tvFolder.add(uniforms.uWarpStrength, 'value', 0, 2, 0.001).name('Warp Strength')

    const tvFolder2 = tvFolder.addFolder( 'Base TV')
    tvFolder2.add(material2, 'metalness', 0, 1, 0.001)
    tvFolder2.add(material2, 'roughness', 0, 1, 0.001)
    tvFolder2.add(material2, 'transmission', 0, 1, 0.001)
    tvFolder2.add(material2, 'ior', 0, 10, 0.001)
    tvFolder2.add(material2, 'thickness', 0, 10, 0.001)
    tvFolder2.addColor(material2, 'color')
    tvFolder2.close()

    // Sphere
    const sphereFolder = gui.addFolder( 'Sphere')
    sphereFolder.close()
    sphereFolder.addColor(debugObject, 'colorC')
        .onChange(() => uniformsSphere.uColorC.value.set(debugObject.colorC))
        .name('ColorA')
    sphereFolder.addColor(debugObject, 'colorD')
        .onChange(() => uniformsSphere.uColorD.value.set(debugObject.colorD))
        .name('ColorB')
    sphereFolder.add(materialSphere, 'metalness', 0, 1, 0.001)
    sphereFolder.add(materialSphere, 'roughness', 0, 1, 0.001)
    sphereFolder.add(materialSphere, 'transmission', 0, 1, 0.001)
    sphereFolder.add(materialSphere, 'ior', 0, 10, 0.001)
    sphereFolder.add(materialSphere, 'thickness', 0, 10, 0.001)
    sphereFolder.add(uniformsSphere.uPositionFrequency, 'value', 0, 2, 0.001).name('Position Frequency')
    sphereFolder.add(uniformsSphere.uTimeFrequency, 'value', 0, 2, 0.001).name('Time Frequency')
    sphereFolder.add(uniformsSphere.uStrength, 'value', 0, 2, 0.001).name('Strength')
    sphereFolder.add(uniformsSphere.uWarpPositionFrequency, 'value', 0, 2, 0.001).name('WarpPosition Frequency')
    sphereFolder.add(uniformsSphere.uWarpTimeFrequency, 'value', 0, 2, 0.001).name('WarpTime Frequency')
    sphereFolder.add(uniformsSphere.uWarpStrength, 'value', 0, 2, 0.001).name('Warp Strength')

    // Sphere
    const monkeyFolder = gui.addFolder( 'Monkey')
    monkeyFolder.close()
    monkeyFolder.addColor(debugObject, 'colorE')
        .onChange(() => uniformsMonkey.uColorE.value.set(debugObject.colorE))
        .name('ColorA')
    monkeyFolder.addColor(debugObject, 'colorF')
        .onChange(() => uniformsMonkey.uColorF.value.set(debugObject.colorF))
        .name('ColorA')
    monkeyFolder.add(materialMonkey, 'metalness', 0, 1, 0.001)
    monkeyFolder.add(materialMonkey, 'roughness', 0, 1, 0.001)
    monkeyFolder.add(materialMonkey, 'transmission', 0, 1, 0.001)
    monkeyFolder.add(materialMonkey, 'ior', 0, 10, 0.001)
    monkeyFolder.add(materialMonkey, 'thickness', 0, 10, 0.001)
    monkeyFolder.add(uniformsMonkey.uPositionFrequency, 'value', 0, 2, 0.001).name('Position Frequency')
    monkeyFolder.add(uniformsMonkey.uTimeFrequency, 'value', 0, 2, 0.001).name('Time Frequency')
    monkeyFolder.add(uniformsMonkey.uStrength, 'value', 0, 2, 0.001).name('Strength')
    monkeyFolder.add(uniformsMonkey.uWarpPositionFrequency, 'value', 0, 2, 0.001).name('WarpPosition Frequency')
    monkeyFolder.add(uniformsMonkey.uWarpTimeFrequency, 'value', 0, 2, 0.001).name('WarpTime Frequency')
    monkeyFolder.add(uniformsMonkey.uWarpStrength, 'value', 0, 2, 0.001).name('Warp Strength')

}

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
    pixelRatio: Math.min(window.devicePixelRatio, 2)
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(sizes.pixelRatio)
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.set( 25, - 3, - 22)
scene.add(camera)


// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(sizes.pixelRatio)

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Materials
    uniforms.uTime.value = elapsedTime
    uniformsSphere.uTime.value = elapsedTime
    uniformsMonkey.uTime.value = elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()