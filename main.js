import { testimonials } from './content.js';

document.addEventListener('DOMContentLoaded', () => {

    lucide.createIcons();


    const header = document.getElementById('main-header');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check


    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });


    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });


    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Customer Reviews - Render testimonials and add animation
    const reviewsContainer = document.getElementById('reviewsContainer');
    if (reviewsContainer && testimonials.length) {
        reviewsContainer.innerHTML = testimonials.map((review, index) => {
            const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
            return `
                <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-md review-card">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">${review.initials}</div>
                        <div>
                            <h3 class="font-bold text-slate-900">${review.name}</h3>
                            <p class="text-sm text-slate-500">${review.role}</p>
                        </div>
                    </div>
                    <p class="text-slate-600 mb-4">${review.text}</p>
                    <div class="star-rating text-orange-500 text-sm">${stars}</div>
                </div>
            `;
        }).join('');
    }

    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('review-entrance');
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-hidden');
        observer.observe(section);
    });


    if (typeof gsap !== 'undefined') {
        const tl = gsap.timeline();
        tl.from("#home h1", {
            duration: 1.2,
            y: 50,
            opacity: 0,
            ease: "power4.out"
        })
        .from("#home p", {
            duration: 0.8,
            y: 20,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.8")
        .from("#home .flex-wrap", {
            duration: 0.8,
            y: 20,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.6");
    }


    const whatsappFloat = document.getElementById('whatsapp-float');
    setTimeout(() => {
        whatsappFloat.classList.add('bounce-in');
    }, 2000);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Google Maps link tracking (optional)
    const googleMapsLinks = document.querySelectorAll('a[href*="google.com/maps"]');
    googleMapsLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Optional: Add analytics tracking here
            console.log('User clicked to view Google Maps reviews');
        });
    });
});
