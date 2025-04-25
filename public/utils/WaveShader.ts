export const WaveShader = {
  vertexShader: `
    uniform float uTime;
    uniform vec2 uMouse;
    
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      vUv = uv;
      
      // Calculate distance to mouse
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      float dist = distance(uMouse, vec2(modelPosition.x, modelPosition.y));
      
      // Create waves based on time and mouse position
      float elevation = sin(modelPosition.x * 0.05 + uTime) * 5.0;
      
      // Add ripple effect from mouse
      float ripple = sin(dist * 0.05 - uTime * 2.0) * 15.0;
      ripple = ripple * (1.0 - min(1.0, dist * 0.001));
      
      // Apply elevation only to y-axis near the middle of the screen
      float centerFactor = 1.0 - abs(modelPosition.y / 300.0);
      centerFactor = max(0.0, centerFactor);
      elevation = elevation * centerFactor;
      
      // Combine base wave with mouse ripple
      elevation += ripple * centerFactor;
      
      modelPosition.z += elevation;
      vElevation = elevation;
      
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      
      gl_Position = projectedPosition;
    }
  `,
  fragmentShader: `
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform float uTime;
    
    varying vec2 vUv;
    varying float vElevation;
    
    void main() {
      // Create a gradient based on the vertical position
      vec3 mixedColor = mix(uColor1, uColor2, vUv.x);
      
      // Add some time-based color shifting
      float colorShift = sin(uTime * 0.5) * 0.5 + 0.5;
      mixedColor = mix(mixedColor, vec3(1.0, 1.0, 1.0), colorShift * 0.1);
      
      // Add glow based on elevation
      float glowIntensity = abs(vElevation) * 0.02;
      mixedColor += glowIntensity;
      
      // Add some transparency for a more subtle effect
      float alpha = 0.6 + glowIntensity;
      
      gl_FragColor = vec4(mixedColor, alpha);
    }
  `,
};
