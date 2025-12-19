import { useState, useEffect, useRef, useCallback } from "react";

export default function CircularSlider({ items }) {
  const [angle, setAngle] = useState(0);
  const radius = 350;
  const intervalRef = useRef(null);

  // Stop auto rotation
  const stopAutoRotate = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Start auto rotation
  const startAutoRotate = useCallback(() => {
    stopAutoRotate(); // ensure clean
    intervalRef.current = setInterval(() => {
      setAngle(a => a + 0.5);
    }, 15);
  }, [stopAutoRotate]);  // ✅ fixed dependency

  // Auto-start
  useEffect(() => {
    startAutoRotate();
    return stopAutoRotate;
  }, [startAutoRotate, stopAutoRotate]);

  // const rotateLeft = () => {
  //   stopAutoRotate();
  //   setAngle(a => a + 40);
  //   startAutoRotate();
  // };

  // const rotateRight = () => {
  //   stopAutoRotate();
  //   setAngle(a => a - 40);
  //   startAutoRotate();
  // };

  return (
    <div
      className="circle-wrapper"
      onMouseEnter={stopAutoRotate}
      onMouseLeave={startAutoRotate}
    >
      <div className="circle">
        {items?.map((item, index) => {
          const itemAngle = (360 / items.length) * index + angle;

          return (
            <div
              key={index}
              className="circle-item"
              style={{
                transform: `
                  rotate(${itemAngle}deg)
                  translate(${radius}px)
                  rotate(-${itemAngle}deg)
                `
              }}
            >
              <div className="item-card">
                <img src={item.image} alt="" />
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className="controls">
        <button onClick={rotateLeft}>◀</button>
        <button onClick={rotateRight}>▶</button>
      </div> */}
    </div>
  );
}
