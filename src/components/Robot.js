import { useState } from 'react';
import './Robot.css';

const RobotSimulator = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('NORTH');

  const moveForward = () => {
    let { x, y } = position;
    switch (direction) {
      case 'NORTH':
        if (y < 4) y += 1;
        break;
      case 'EAST':
        if (x < 4) x += 1;
        break;
      case 'SOUTH':
        if (y > 0) y -= 1;
        break;
      case 'WEST':
        if (x > 0) x -= 1;
        break;
      default:
        break;
    }
    setPosition({ x, y });
  };

  const rotateLeft = () => {
    switch (direction) {
      case 'NORTH':
        setDirection('WEST');
        break;
      case 'EAST':
        setDirection('NORTH');
        break;
      case 'SOUTH':
        setDirection('EAST');
        break;
      case 'WEST':
        setDirection('SOUTH');
        break;
      default:
        break;
    }
  };

  const rotateRight = () => {
    switch (direction) {
      case 'NORTH':
        setDirection('EAST');
        break;
      case 'EAST':
        setDirection('SOUTH');
        break;
      case 'SOUTH':
        setDirection('WEST');
        break;
      case 'WEST':
        setDirection('NORTH');
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <h1>Robot Simulator</h1>
      <div className="grid">
        {[...Array(5)].map((_, row) => (
          <div key={row} className="row">
            {[...Array(5)].map((_, col) => (
              <div key={col} className={`cell ${position.x === col && position.y === 4 - row ? 'robot' : ''}`}>
                {position.x === col && position.y === 4 - row && (
                  <div className={`robot ${direction.toLowerCase()}`} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={moveForward}>Move Forward</button>
        <button onClick={rotateLeft}>Rotate Left</button>
        <button onClick={rotateRight}>Rotate Right</button>
      </div>
    </div>
  );
};

export default RobotSimulator;
