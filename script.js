// Smooth Scroll Function
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Particles.js Setup
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": "#fff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000"
            },
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.01
            }
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            }
        }
    },
    "retina_detect": true
});

// Initialize Lucide icons
lucide.createIcons();

// Intersection Observer for fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Observe all sections that should fade in
document.querySelectorAll('.glass-card').forEach(card => {
    observer.observe(card);
});

// Optional: Add hover effect to cards
document.querySelectorAll('.card-container').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});


// Experience Section
document.addEventListener('DOMContentLoaded', () => {
    // Initialize timeline progress
    const timelineProgress = document.querySelector('.pt_timeline-progress');
    
    // Initialize cards visibility
    const cards = document.querySelectorAll('.pt_card');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));

    // Handle timeline progress based on scroll
    function updateTimelineProgress() {
        const timeline = document.querySelector('.pt_timeline');
        const timelineRect = timeline.getBoundingClientRect();
        const percentageScrolled = Math.min(
            Math.max(
                (-timelineRect.top) / (timelineRect.height - window.innerHeight),
                0
            ),
            1
        );
        timelineProgress.style.transform = `scaleY(${percentageScrolled})`;
    }

    // Initialize skill orbit
    const skillItems = document.querySelectorAll('.pt_skill-item');
    const radius = window.innerWidth > 768 ? 120 : 80; // Adjust radius based on screen size

    skillItems.forEach((item, index) => {
        const angle = (index / skillItems.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        item.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Event listeners
    window.addEventListener('scroll', updateTimelineProgress);
    updateTimelineProgress(); // Initial call

    // Add hover effect to timeline cards
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const techStack = card.querySelector('.pt_tech-stack');
            techStack.style.transform = 'translateY(0)';
            techStack.style.opacity = '1';
        });
    });

    // Add parallax effect to moving background
    
    // document.addEventListener('mousemove', (e) => {
    //     const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    //     const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    //     document.querySelector('.pt_moving-bg').style.transform = 
    //         `translate(${moveX}px, ${moveY}px)`;
    // });
});


// Projects Section
const projects = [
    {
      title: "Mobile Movie App",
      description: "Diving into React Native and Expo by buiding a mobile app that runs in both iOS and Android mobiles",
      tags: ["React Native", "Expo", "AppWrite", "JSX"],
      icon: "boxes",
      link: "",
      github: "https://github.com/toomata-dev/movie_mobile_app/",
      gif: "./img/projects gif/final_movie_app_1.gif"
    },
    {
      title: "Covid Tracker",
      description: "Exploring the WeChat DevTools environment by developing a covid tracker mini program that fetches real-time covid cases data from an API.",
      tags: ["WeChat", "Node.js", "JS", "Postman", "MongoDB", "WXML","WXSS"],
      icon: "boxes",
      link: "",
      github: "https://github.com/toomata-dev/covid_tracker/",
      gif: "./img/projects gif/wechat_mini_program.gif"
    },
    {
      title: "Tic Tac Toe",
      description: "A straightforward tic tac toe web game that is fully compatible with any browser.",
      tags: ["React.js", "Gatsby"],
      icon: "code-2",
      link: "",
      github: "https://github.com/toomata-dev/tic_tag_toe/",
      gif: "./img/projects gif/tic_tag_toe.gif"
    },
    {
      title: "WordPress Website",
      description: "A complete full-stack WordPress website built from ground up on localhost, and deployed via Hostinger.",
      tags: ["WordPress", "MySQL", "Linux", "Hostinger", "PHP", "JavaScript"],
      icon: "code",
      link: "https://www.thebeijingdevils.com/",
      github: "https://github.com/toomata-dev/the_beijing_devils/",
      gif: "./img/projects gif/bj_devils_site.gif"
    },
    {
      title: "Web Portfolio",
      description: "A very modern, simple and clean web developer portfolio, showcasing all my past experience",
      tags: ["WeChat", "HTML5", "CSS", "JavaScript", "Git & GitHub"],
      icon: "boxes",
      link: "",
      github: "https://toomata-dev.github.io/web_portfolio/",
      gif: "./img/projects gif/web_portfolio_1.gif"
    }
  ];
  
  // Create floating background elements
  function createBackgroundElements() {
    const container = document.getElementById('backgroundElements');
    for (let i = 0; i < 20; i++) {
      const element = document.createElement('div');
      element.className = 'floating-object';
      element.style.left = `${Math.random() * 100}%`;
      element.style.top = `${Math.random() * 100}%`;
      element.style.animationDelay = `${Math.random() * 5}s`;
      element.style.animationDuration = `${10 + Math.random() * 20}s`;
      element.style.animation = 'pulse-glow 10s infinite';
      container.appendChild(element);
    }
  }
  
  // Create project cards
  function createProjectCards() {
    const container = document.getElementById('projectsContainer');
    const template = document.getElementById('projectTemplate');
  
    projects.forEach((project, index) => {
      const card = template.content.cloneNode(true);
      
      // Set icon
      const iconElement = card.querySelector('[data-lucide]');
      iconElement.setAttribute('data-lucide', project.icon);
      
      // Set image
      const imageElement = card.querySelector('.pt_project-image');
      imageElement.src = project.gif;
      imageElement.alt = project.title;
      
      // Set title and description
      card.querySelector('.pt_project-title').textContent = project.title;
      card.querySelector('.pt_project-description').textContent = project.description;
      
      // Set tags
      const tagsContainer = card.querySelector('.pt_tags-container');
      project.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'pt_tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
      });
      
      // Set links
      const githubLink = card.querySelector('.pt_github-link');
      const demoLink = card.querySelector('.pt_demo-link');
      githubLink.href = project.github;
      demoLink.href = project.link;
      
      // Set animation delay
      const projectCard = card.querySelector('.pt_project-card');
      projectCard.style.animationDelay = `${index * 0.2}s`;
      projectCard.style.animation = 'fade-in 0.6s ease-out forwards';
      
      container.appendChild(card);
    });
  }
  
  // Initialize Lucide icons
  function initializeLucideIcons() {
    lucide.createIcons();
  }
  
  // Initialize the page
  document.addEventListener('DOMContentLoaded', () => {
    createBackgroundElements();
    createProjectCards();
    initializeLucideIcons();
  });




// Contact Section 
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Three.js Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('globe').appendChild(renderer.domElement);

    // Create Globe
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const material = new THREE.MeshPhongMaterial({
        color: 0x4a90e2,
        wireframe: true,
        transparent: true,
        opacity: 0.8
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add point light
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    camera.position.z = 12;

    // Handle window resize
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        globe.rotation.y += 0.002;
        globe.rotation.x += 0.001;
        
        renderer.render(scene, camera);
    }
    animate();

    // Initialize tilt effect
    VanillaTilt.init(document.querySelectorAll(".pt_contact-card"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2
    });

    // Add hover effect to cards
    document.querySelectorAll('.pt_contact-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Add click-to-copy functionality
    document.querySelectorAll('.pt_contact-info').forEach(info => {
        info.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(info.textContent);
                
                const originalText = info.textContent;
                info.textContent = 'Copied!';
                
                setTimeout(() => {
                    info.textContent = originalText;
                }, 1500);
            } catch (err) {
                console.error('Failed to copy text:', err);
            }
        });
    });
});