import {
  Engine,
  World,
  Body,
  Bodies,
  Mouse,
  MouseConstraint,
  Render,
  Constraint,
  Runner,
  Composite,
  Events,
  Common,
} from "matter-js";
import { useRef, useEffect } from "react";
import svgArray from "../MatterAssets";
import { colors, HEIGHT, mobileBreakPoint, WIDTH } from "../../../constants";

const WALLWIDTH = 0.1;

const wallOptions = {
  restitution: 1,
  isStatic: true,
  density: 1,
  render: {
    fillStyle: "white",
  },
};

const starOptions = {
  frictionAir: 0,
  friction: 0,
  restitution: 1,
  isStatic: false,
  rotate: 10,
};

const Scene = ({ isMobile }) => {
  const scene = useRef();
  const canvasRef = useRef(null);
  const starSize = isMobile ? 300 : 500;

  const matterStarsLarge = svgArray.map((x) => {
    return Bodies.circle(
      WIDTH * Math.random(),
      HEIGHT * Math.random(),
      starSize * 0.275,
      {
        label: "starOne",
        ...starOptions,
        render: {
          sprite: {
            texture: x,
            xScale: starSize / 400,
            yScale: starSize / 400,
          },
        },
      }
    );
  });

  useEffect(() => {
    let engine = Engine.create();
    let world = engine.world;
    let render = Render.create({
      element: scene.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: WIDTH,
        height: HEIGHT,
        wireframes: false,
        background: colors.offWhite,
      },
    });

    engine.gravity.x = 0;
    engine.gravity.y = 1;

    World.add(engine.world, [
      // Walls
      // top
      Bodies.rectangle(0, 0, WIDTH * 2, WALLWIDTH, {
        ...wallOptions,
        label: "wall_top",
      }),

      // Bottom
      Bodies.rectangle(0, HEIGHT, WIDTH * 2, WALLWIDTH, {
        ...wallOptions,
        label: "wall_bottom",
      }),

      // Left
      Bodies.rectangle(0, HEIGHT, WALLWIDTH, WIDTH, {
        ...wallOptions,
        label: "wall_left",
      }),

      // Right
      Bodies.rectangle(WIDTH, 0, WALLWIDTH, WIDTH, {
        ...wallOptions,
        label: "wall_right",
      }),
    ]);

    Composite.add(world, [...matterStarsLarge]);

    const explosion = function (engine) {
      const bodies = Composite.allBodies(engine.world);

      for (let i = 0; i < bodies.length; i++) {
        const body = bodies[i];

        if (!body.isStatic && body.position.y >= 500) {
          const forceMagnitude = 0.05 * body.mass;

          Body.applyForce(body, body.position, {
            x:
              (forceMagnitude + Common.random() * forceMagnitude) *
              Common.choose([1, -1]),
            y: -forceMagnitude + Common.random() * -forceMagnitude,
          });
        }
      }
    };

    let counter = 0;

    Events.on(engine, "afterUpdate", function (event) {
      engine.timing.timeScale = 0.1;
      counter += 1;
      if (counter >= 60 * 0.5) {
        // create some random forces
        explosion(engine);

        // reset counter
        counter = 0;
      }
    });

    Runner.run(engine);
    Render.run(render);

    const mouseBody = Bodies.circle(0, 0, 150, {
      render: { fillStyle: "transparent" },
    });
    // World.add(world, mouseBody);

    // const mouse = Mouse.create(render.canvas);
    // const mouseConstraint = MouseConstraint.create(engine, {
    //   mouse: mouse,
    //   constraint: {
    //     stiffness: 0.5,
    //     render: {
    //       visible: true,
    //     },
    //   },
    // });
    // World.add(world, mouseConstraint);

    // const con = Constraint.create({
    //   pointA: mouse.position,
    //   bodyB: (mouseConstraint.body = mouseBody),
    //   stiffness: 0.2,
    //   damping: 1,
    //   render: {
    //     visible: false,
    //   },
    // });
    // World.add(world, con);

    // render.mouse = mouse;
  }, []);

  return (
    <div ref={scene}>
      <canvas ref={canvasRef} />
    </div>
  );
};
export default Scene;
