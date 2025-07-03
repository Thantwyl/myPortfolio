document.addEventListener('DOMContentLoaded', () => {
    // Check if GSAP and ScrollTrigger are loaded
    if (!window.gsap || !window.ScrollTrigger) {
        console.error('GSAP or ScrollTrigger failed to load. Check CDN links or internet connection.');
        alert('Error: GSAP failed to load. Please check your internet connection or try a different browser.');
        return;
    }

    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Theme Toggle Logic
    const html = document.documentElement;
    const themeToggle = document.querySelector('.theme-toggle');

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '🌙' : '☀️';
    console.log(`Loaded theme: ${savedTheme}`);

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
        localStorage.setItem('theme', newTheme);
        console.log(`Switched to theme: ${newTheme}`);
    });

    // Object to store timelines for each section
    const sectionTimelines = {};

    // Initialize timelines
    console.log('Initializing GSAP timelines...');

    // Home Section Timeline (Letter-by-Letter Animation)
    sectionTimelines['home'] = gsap.timeline({ paused: true })
        .fromTo('#home .hero-title .letter', 
            { opacity: 0, y: 50, rotate: 10 }, 
            { opacity: 1, y: 0, rotate: 0, duration: 0.8, stagger: 0.05, ease: 'power3.out' }
        )
        .fromTo('#home .hero-subtitle .letter', 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.03, ease: 'power3.out' }, '-=0.6'
        )
        .fromTo('#home .cta-button', 
            { opacity: 0, scale: 0.5 }, 
            { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.3)' }, '-=0.6'
        );

    // About Section Timeline
    sectionTimelines['about'] = gsap.timeline({ paused: true })
        .fromTo('#about .section-title', 
            { opacity: 0, y: 200 }, 
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        )
        .fromTo('#about .profile-img', 
            { opacity: 0, scale: 0.5 }, 
            { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }, '-=0.8'
        )
        .fromTo('#about .about-text p', 
            { opacity: 0, y: 200 }, 
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8'
        );

    // Projects Section Timeline
    sectionTimelines['projects'] = gsap.timeline({ paused: true })
        .fromTo('#projects .section-title', 
            { opacity: 0, y: 200 }, 
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        )
        .fromTo('#projects .project-card', 
            { opacity: 0, x: 300 }, 
            { opacity: 1, x: 0, duration: 1, stagger: 0.4, ease: 'power3.out' }, '-=0.8'
        );

    // Skills Section Timeline
    sectionTimelines['skills'] = gsap.timeline({ paused: true })
        .fromTo('#skills .section-title', 
            { opacity: 0, y: 200 }, 
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        )
        .fromTo('#skills .skill-item', 
            { opacity: 0, y: 200 }, 
            { opacity: 1, y: 0, duration: 1, stagger: 0.4, ease: 'power3.out' }, '-=0.8'
        )
        .fromTo('#skills .skill-item::after', 
            { width: 0 }, 
            { 
                width: (index, target) => {
                    const skillLevel = target.getAttribute('data-skill') || 80;
                    return `${skillLevel}%`;
                }, 
                duration: 1.2, 
                stagger: 0.4, 
                ease: 'power3.out' 
            }, '-=0.8'
        );

    // Contact Section Timeline
    sectionTimelines['contact'] = gsap.timeline({ paused: true })
        .fromTo('#contact .section-title', 
            { opacity: 0, y: 200 }, 
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        )
        .fromTo('#contact .contact-text', 
            { opacity: 0, y: 200 }, 
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8'
        )
        .fromTo('#contact .contact-link', 
            { opacity: 0, x: -200 }, 
            { opacity: 1, x: 0, duration: 1, stagger: 0.4, ease: 'power3.out' }, '-=0.8'
        );

    // Navbar Animation (runs once on load)
    gsap.fromTo('.navbar', 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    console.log('Navbar animation played on load');

    // Project Card Hover Animation
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Play Home animation on initial load
    if (sectionTimelines['home']) {
        sectionTimelines['home'].play();
        console.log('Home animation played on load');
    } else {
        console.error('Home timeline not found');
    }

    // Handle Navigation Clicks
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            const section = document.getElementById(sectionId);

            if (!section) {
                console.error(`Section with ID ${sectionId} not found`);
                return;
            }

            // Remove active class from all links
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            link.classList.add('active');

            // Scroll to section
            section.scrollIntoView({ behavior: 'smooth' });

            // Reset and play the timeline
            if (sectionTimelines[sectionId]) {
                sectionTimelines[sectionId].restart();
                console.log(`Nav click: Playing animation for ${sectionId}`);
            } else {
                console.error(`No timeline found for ${sectionId}`);
            }
        });
    });

    // Scroll-Triggered Animations and Active Navbar State
    document.querySelectorAll('.section').forEach(section => {
        const sectionId = section.getAttribute('id');
        if (!sectionTimelines[sectionId]) {
            console.error(`No timeline defined for section ${sectionId}`);
            return;
        }
        ScrollTrigger.create({
            trigger: section,
            start: 'top 50%', // Trigger when section top hits 50% of viewport
            end: 'bottom 50%', // End when section bottom hits 50% of viewport
            onEnter: () => {
                sectionTimelines[sectionId].restart();
                console.log(`Scroll down: Playing animation for ${sectionId}`);
                // Update active nav link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
                });
            },
            onEnterBack: () => {
                sectionTimelines[sectionId].restart();
                console.log(`Scroll up: Playing animation for ${sectionId}`);
                // Update active nav link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.toggle('active', link.getAttribute('data-section') === sectionId);
                });
            },
            onLeave: () => {
                // Clear active class when leaving section (scrolling down)
                document.querySelectorAll('.nav-links a').forEach(link => {
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.remove('active');
                    }
                });
            },
            onLeaveBack: () => {
                // Clear active class when leaving section (scrolling up)
                document.querySelectorAll('.nav-links a').forEach(link => {
                    if (link.getAttribute('data-section') === sectionId) {
                        link.classList.remove('active');
                    }
                });
            }
        });
    });

    console.log('GSAP animations and navbar active state initialized successfully');
});