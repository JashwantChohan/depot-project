export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 50 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 90 : direction === 'right' ? -10 : 0,
            opacity: 0, // Start with invisible
            filter: 'blur(10px)', // Start with a blur effect when out of screen
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1, // Fully visible when in the final position
            filter: 'blur(0px)', // No blur when in the final position
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            }
        }
    }
}
