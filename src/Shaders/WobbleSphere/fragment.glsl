uniform vec3 uColorC;
uniform vec3 uColorD;

varying float vWobble;

void main() {
    
    float colorMix = smoothstep(- 1.0, 1.0, vWobble);
    csm_DiffuseColor.rgb = mix(uColorC, uColorD, colorMix);


    // Shinny tip
    csm_Roughness = 1.0 - colorMix;
}