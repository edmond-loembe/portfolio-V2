import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particle = () => {
    const ParticlesInit = useCallback(async (engine: Engine) => {
        console.log("engine init", engine);

        await loadSlim(engine);
    }, []);

    const ParticlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log("container init", container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={ParticlesInit}
                loaded={ParticlesLoaded}
                options={{
                    background: {
                        // color: {
                        //     value: "#0d47a1",
                        // },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 120,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 60,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: {min: 2, max: 5},
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default Particle;
