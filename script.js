// Initialize loader animations
    const loader = document.querySelector('.loader');
    const spinner = document.querySelector('.loader-spinner');
    const content = document.querySelector('.content');
    
    // Continuous spinner rotation
    gsap.to(spinner, {
      rotation: 360,
      duration: 1.5,
      repeat: -1,
      ease: "none"
    });
    
    // Pulsing loading text
    gsap.to(".loader-text", {
      opacity: 0.7,
      duration: 1.2,
      yoyo: true,
      repeat: -1
    });
    
    // When everything is loaded
    window.addEventListener('load', function() {
      // Create exit animation timeline
      const tl = gsap.timeline();
      
      // Fade out loader
      tl.to(loader, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      })
      // Remove loader
      .set(loader, {
        display: "none"
      })
      // Fade in content
      .to(content, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      })
      // Animate the gradient box with bounce effect
      .from(".box", {
        y: 80,
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "bounce.out",
        delay: 0.2
      });
    });
