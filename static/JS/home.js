// Hiệu ứng khi cuộn xuống (fade-in nhẹ)
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fadeIn');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.info-card').forEach(card => observer.observe(card));

// Animation CSS thêm
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeIn { from {opacity: 0; transform: translateY(20px);} to {opacity: 1; transform: translateY(0);} }
.animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
`;
document.head.appendChild(style);
