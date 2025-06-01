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
const cursor = document.querySelector('.cursor');
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
});