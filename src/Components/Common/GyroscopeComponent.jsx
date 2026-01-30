import React, { useState, useEffect } from 'react';

const GyroscopeComponent = () => {
  const [coords, setCoords] = useState({ alpha: 0, beta: 0, gamma: 0 });
  const [permissionGranted, setPermissionGranted] = useState(false);

  // 1. Handle Permission (Required for iOS 13+)
  const requestPermission = async () => {
    if (typeof DeviceOrientationEvent !== 'undefined' && 
        typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const status = await DeviceOrientationEvent.requestPermission();
        if (status === 'granted') setPermissionGranted(true);
      } catch (err) {
        console.error("Permission denied", err);
      }
    } else {
      // Browsers that don't require explicit permission
      setPermissionGranted(true);
    }
  };

  // 2. Manage Sensor Listener
  useEffect(() => {
    if (!permissionGranted) return;

    const handleMotion = (event) => {
      setCoords({
        alpha: event.alpha, // Rotation around Z-axis (0 to 360)
        beta: event.beta,   // Rotation around X-axis (-180 to 180)
        gamma: event.gamma  // Rotation around Y-axis (-90 to 90)
      });
    };

    window.addEventListener('deviceorientation', handleMotion);
    
    // Cleanup on unmount to prevent memory leaks
    return () => window.removeEventListener('deviceorientation', handleMotion);
  }, [permissionGranted]);

  return (
    <div style={{ textAlign: 'center', padding: '100px 0 20px' }}>
      {!permissionGranted ? (
        <button onClick={requestPermission}>Enable Gyroscope</button>
      ) : (
        <ul>
          <li><strong>Z (Alpha):</strong> {coords.alpha?.toFixed(2)}°</li>
          <li><strong>X (Beta):</strong> {coords.beta?.toFixed(2)}°</li>
          <li><strong>Y (Gamma):</strong> {coords.gamma?.toFixed(2)}°</li>
        </ul>
      )}
    </div>
  );
};

export default GyroscopeComponent;
