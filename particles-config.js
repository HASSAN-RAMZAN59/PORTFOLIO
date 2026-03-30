// particles-config.js
// Simple, modern particles config for a professional portfolio look

particlesJS('particles-bg', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 900 } },
    color: { value: ['#00d4ff', '#7c3aed', '#f59e0b'] },
    shape: { type: 'circle' },
    opacity: { value: 0.15, random: true },
    size: { value: 4, random: true },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#00d4ff',
      opacity: 0.12,
      width: 1
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: false },
      resize: true
    },
    modes: {
      repulse: { distance: 80, duration: 0.4 }
    }
  },
  retina_detect: true
});
