 <script>
        // Enhanced particle system
        document.addEventListener('DOMContentLoaded', function() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 40;
            
            // Create particles with different sizes and colors
            for (let i = 0; i < particleCount; i++) {
                createEnhancedParticle(particlesContainer);
            }
            
            // Fade in sections on scroll
            const sections = document.querySelectorAll('section');
            const options = {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px"
            };
            
            const observer = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
            
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                observer.observe(section);
            });
        });
        
        function createEnhancedParticle(container) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Varied sizes for more depth
            const size = Math.random() * 8 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            
            // Gold color variations
            const opacity = Math.random() * 0.2 + 0.1;
            const hue = Math.random() * 20 + 40; // Golden hues
            particle.style.backgroundColor = `hsla(${hue}, 100%, 50%, ${opacity})`;
            
            // Add subtle shadow for depth
            particle.style.boxShadow = `0 0 ${size * 2}px rgba(255, 215, 0, ${opacity})`;
            
            container.appendChild(particle);
            
            // Enhanced animation
            animateEnhancedParticle(particle);
        }
        
        function animateEnhancedParticle(particle) {
            // More varied animation properties
            const duration = Math.random() * 20 + 15; // 15-35 seconds
            const moveY = Math.random() * 150 - 75;
            const moveX = Math.random() * 150 - 75;
            const delay = Math.random() * 5;
            const rotate = Math.random() * 360;
            
            // Create more complex animation
            particle.animate(
                [
                    { transform: 'translate(0, 0) rotate(0deg)', opacity: parseFloat(particle.style.backgroundColor.split(',')[3]) },
                    { transform: `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`, opacity: 0 }
                ],
                {
                    duration: duration * 1000,
                    delay: delay * 1000,
                    fill: 'forwards',
                    easing: 'cubic-bezier(0.42, 0, 0.58, 1)'
                }
            ).onfinish = function() {
                // Reset particle position and restart animation with slightly new properties
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                // Refresh the particle's color and opacity occasionally
                if (Math.random() > 0.7) {
                    const opacity = Math.random() * 0.2 + 0.1;
                    const hue = Math.random() * 20 + 40; // Golden hues
                    particle.style.backgroundColor = `hsla(${hue}, 100%, 50%, ${opacity})`;
                }
                
                animateEnhancedParticle(particle);
            };
        }
    </script>
