const dots = document.querySelectorAll('.slider-dots span');
const slider = document.querySelector('.room-slider');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    // Reset the animation
    slider.style.animation = 'none';
    slider.style.transform = `translateX(-${index * 100}vw)`;
    
    // Reset the animation back to original
    setTimeout(() => {
      slider.style.animation = 'slide 12s infinite ease-in-out';
    }, 50);

    // Update active dot
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});