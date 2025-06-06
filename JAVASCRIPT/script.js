// Add an event listener to the offcanvas element
    document.addEventListener('hidden.bs.offcanvas', function () {
        const scrollPosition = window.scrollY;
        setTimeout(() => {
            window.scrollTo(0, scrollPosition);
        }, 0);
    });

// For animation
document.querySelectorAll('.appear').forEach(el => {
  el.classList.remove('visible');
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.appear').forEach(el => observer.observe(el));


// For counter
const counterContainers = document.querySelectorAll('.counters');
let activated = false;

// For counter - animate once on page load
document.addEventListener('DOMContentLoaded', () => {
    const counterContainers = document.querySelectorAll('.counters');
    counterContainers.forEach(container => {
        const counters = container.querySelectorAll('span[data-count]');
        counters.forEach(counter => {
            counter.innerText = '0';
            let count = 0;
            const target = parseFloat(counter.dataset.count);
            let increment = 1;
            if (target >= 1000) {
                increment = 50; // increment by 50 for active users
            } else if (target > 10) {
                increment = 1;
            } else {
                increment = 0.1;
            }
            function updateCount() {
                if (count < target) {
                    count += increment;
                    if (count > target) count = target;
                    counter.innerText = count.toFixed(target % 1 !== 0 ? 1 : 0);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            }
            updateCount();
        });
    });
});

// cursor
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let currentX = mouseX, currentY = mouseY;

  // Smooth trailing
  function animate() {
    currentX += (mouseX - currentX) * 0.18;
    currentY += (mouseY - currentY) * 0.18;
    cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }
  animate();

  // Move cursor
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.opacity = 1;

    // Detect hover on interactive elements
    const elem = document.elementFromPoint(e.clientX, e.clientY);
  if (
  elem &&
  (
    elem.tagName === 'A' ||
    elem.tagName === 'BUTTON' ||
    elem.classList.contains('btn') ||
    elem.onclick ||
    elem.closest('p, span, h1, h2, h3, h4, h5, h6, label, li')
  )
) {
  cursor.classList.add('cursor-hover');
} else {
  cursor.classList.remove('cursor-hover');
}
  });

  // Pulse on click
  document.addEventListener('mousedown', () => {
    cursor.classList.add('cursor-click');
  });
  document.addEventListener('mouseup', () => {
    cursor.classList.remove('cursor-click');
  });

  // Hide/show on leave/enter
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = 1;
  });
});