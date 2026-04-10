// ============================================
// MOBILE MENU
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// OBJECTIVES TABS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Remove active class from all contents
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button
            button.classList.add('active');

            // Add active class to the corresponding content
            const tabId = button.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);
            if (tabContent) {
                tabContent.classList.add('active');
            }
        });
    });

    // Activate the first tab by default
    const firstTab = document.querySelector('.tab-button');
    if (firstTab) {
        firstTab.click();
    }
});

// ============================================
// SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// SCROLL ANIMATION (Intersection Observer)
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and elements
document.querySelectorAll('.result-card, .team-member, .about-info').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// HIGHLIGHT ACTIVE SECTION IN NAVIGATION
// ============================================

window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ============================================
// ADD STYLE FOR ACTIVE LINK
// ============================================

const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--accent-gold);
    }
`;
document.head.appendChild(style);

// ============================================
// FUNCTION TO ADJUST IFRAME HEIGHT
// ============================================

// This function allows the page to adjust better when embedded as an iframe
function adjustIframeHeight() {
    if (window.parent !== window) {
        // Page is inside an iframe
        const height = document.documentElement.scrollHeight;
        window.parent.postMessage({
            type: 'iframeHeight',
            height: height
        }, '*');
    }
}

// Call on load and when content changes
window.addEventListener('load', adjustIframeHeight);
window.addEventListener('resize', adjustIframeHeight);

// Observe DOM changes
const mutationObserver = new MutationObserver(adjustIframeHeight);
mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
});

// ============================================
// DARK THEME SUPPORT (OPTIONAL)
// ============================================

// Detect system dark theme preference
function initDarkModeSupport() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // You can add dark theme support here if desired
    // For now, we keep the light theme as default
}

initDarkModeSupport();

// ============================================
// CONSOLE LOG FOR DEBUGGING
// ============================================

console.log('RAM page loaded successfully');
console.log('Version: 1.0');
console.log('Compatible with Wix iframe');
