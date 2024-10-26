uniform vec3 uColorE;
uniform vec3 uColorF;

varying float vWobble;

void main() {
    
    float colorMix = smoothstep(- 1.0, 1.0, vWobble);
    csm_DiffuseColor.rgb = mix(uColorE, uColorF, colorMix);

    // Mirror step
    csm_Metalness = step(0.15, vWobble);
    csm_Roughness = 0.2 - colorMix;

    // Shinny tip
    // csm_Roughness = 1.0 - colorMix;
}