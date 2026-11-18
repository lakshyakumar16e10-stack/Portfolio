/**
 * ============================================================================
 * LAKSHYA KUMAR PORTFOLIO — 3D MOTION & INTERACTIVE CONTROLLER
 * ============================================================================
 * Features:
 * 1. Continuous 3D Loop Conveyor (True infinite physics track with smooth turnarounds)
 * 2. Day / Night Environmental World 180° 3D Rotation + Procedural Dew Drops
 * 3. Interactive Technical Capabilities Selection Wheel & Detail Panel
 * 4. Responsive & Accessible Controls
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. DATA DEFINITIONS (Skills & Projects)
     ========================================================================== */
  const SKILLS_DATA = {
    overview: {
      isOverview: true,
      title: "Technical Journey & Overview",
      badge: "7 Core Capabilities",
      totalCount: 7,
      intro: "Welcome to my technical portfolio. I am an aspiring software developer with a strong passion for web development, computational logic, and systems engineering.",
      details: "My current focus centers on mastering web fundamentals (semantic HTML5, modern responsive CSS3, and JavaScript logic), strengthening algorithmic problem-solving with Python and C++, querying relational datasets in SQL, and leveraging AI prompt engineering workflows.",
      highlights: [
        { label: "Active Practice", val: "Daily Coding on Codeforces & SoloLearn" },
        { label: "Current Focus", val: "Beginning C++ & Data Structures" },
        { label: "Design Style", val: "Modern 3D Glassmorphism & Clean UI" }
      ]
    },
    cpp: {
      id: "cpp",
      name: "C++",
      level: "Beginning • Active Focus",
      percentage: 30,
      iconSvg: `<svg viewBox="0 0 100 100" class="tech-svg"><polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="#00599c"/><polygon points="50,12 84,31 84,69 50,88 16,69 16,31" fill="#004482"/><text x="50" y="63" font-size="34" font-family="-apple-system, sans-serif" font-weight="900" fill="#ffffff" text-anchor="middle">C++</text></svg>`,
      description: "Currently learning core C++ syntax, basic memory management, standard input/output, and applying it to competitive programming challenges on Codeforces. Focusing on algorithmic efficiency and data manipulation.",
      experience: "Actively studying variables, loops, control structures, functions, pointers, and time complexity for competitive problem sets.",
      certificate: null,
      certLabel: "In Progress • Active Focus on Codeforces"
    },
    html5: {
      id: "html5",
      name: "HTML5",
      level: "Semantic Markup & Accessibility",
      percentage: 85,
      iconSvg: `<svg viewBox="0 0 512 512" class="tech-svg"><path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z"/><path fill="#EF652A" d="M256 472l149-41 35-391H256v432z"/><path fill="#ECECEC" d="M256 176h-84l-6-64h90V48h-152l18 200h134v-72zm0 148l-83-22-5-62h-64l10 125 142 39v-80z"/><path fill="#fff" d="M256 176v-64h90l-8-96H256V48h152l-18 200H256v-72zm0 148v80l142-39 15-169H256v64h78l-7 84-71 20z"/></svg>`,
      description: "Structuring clean, semantic, and accessible web pages. Proficient in semantic layout tags (<main>, <section>, <nav>, <article>), audio/video integration, and accessible form structures.",
      experience: "Built multiple responsive website interfaces, landing pages, and components using semantic HTML5 guidelines.",
      certificate: {
        title: "SoloLearn HTML Fundamentals",
        url: "https://www.sololearn.com/profile/18253921/?ref=app"
      },
      certLabel: "Verified on SoloLearn (Profile 18253921)"
    },
    css3: {
      id: "css3",
      name: "CSS3",
      level: "Modern Styling & 3D Glassmorphism",
      percentage: 80,
      iconSvg: `<svg viewBox="0 0 512 512" class="tech-svg"><path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z"/><path fill="#33A9DC" d="M256 472l149-41 35-391H256v432z"/><path fill="#ECECEC" d="M256 176h-84l-6-64h90V48h-152l18 200h134v-72zm0 148l-83-22-5-62h-64l10 125 142 39v-80z"/><path fill="#fff" d="M256 176v-64h90l-8-96H256V48h152l-18 200H256v-72zm0 148v80l142-39 15-169H256v64h78l-7 84-71 20z"/></svg>`,
      description: "Crafting modern glassmorphic responsive designs, Flexbox & Grid architectures, complex keyframe animations, 3D perspective transforms, and scroll-snapping experiences.",
      experience: "Architected this portfolio's 3D fluid and neon city glassmorphism, scroll-lock sensitivity, and metallic silver navigation dock.",
      certificate: {
        title: "SoloLearn CSS Track",
        url: "https://www.sololearn.com/profile/18253921/?ref=app"
      },
      certLabel: "Verified on SoloLearn (Profile 18253921)"
    },
    js: {
      id: "js",
      name: "JavaScript",
      level: "Fundamentals & DOM Interactivity",
      percentage: 45,
      iconSvg: `<svg viewBox="0 0 630 630" class="tech-svg"><rect width="630" height="630" fill="#f7df1e"/><path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.4-38.1-25.4-17.34 0-28.33 11-28.33 25.4 0 17.7 11 24.9 36.37 35.9l14.8 6.35c50.33 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-106.3-58.8zm-209.98 5.5c-11.4 18.6-26.2 31.3-51.6 31.3-25.8 0-42.3-13.1-42.3-37.2v-176.6h54.98v171.7c0 8.9 3.8 14.8 12.7 14.8 8.04 0 13.53-4.2 18.2-12.7v-173.8h54.98v218.2c-15.2 24.9-32.9 37.6-46.96-35.7z"/></svg>`,
      description: "Core JavaScript fundamentals: variables, scoping, conditional logic, loops, functions, array methods, event listeners, and DOM manipulation for dynamic user interfaces.",
      experience: "Engineered client-side 3D conveyor loop physics, skills selection wheel interaction, and environmental day/night transitions.",
      certificate: null,
      certLabel: "Practicing via Practical Implementations"
    },
    python: {
      id: "python",
      name: "Python",
      level: "Core Basics & Problem Solving",
      percentage: 50,
      iconSvg: `<svg viewBox="0 0 110 110" class="tech-svg"><path fill="#3776AB" d="M54.5 5c-14.6 0-24 6.2-24 18.4v13.5h24.5v3.4H24.3C10.7 40.3 0 50.1 0 65.2c0 14.5 10.1 23.4 23.4 23.4h7.5v-10.4c0-8.9 7.6-16.7 16.7-16.7h24.6c7.7 0 13.9-6.3 13.9-14V23.4C86.1 11.2 74.4 5 54.5 5zm-13 7.4c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z"/><path fill="#FFD43B" d="M55.5 105c14.6 0 24-6.2 24-18.4V73.1H55v-3.4h30.7c13.6 0 24.3-9.8 24.3-24.9 0-14.5-10.1-23.4-23.4-23.4h-7.5v10.4c0 8.9-7.6 16.7-16.7 16.7H37.8c-7.7 0-13.9 6.3-13.9 14v23.1c0 12.2 11.7 18.4 31.6 18.4zm13-7.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/></svg>`,
      description: "Python scripting, data structures (lists, dictionaries, sets), string operations, mathematical algorithms, and solving competitive programming challenges.",
      experience: "Writing solutions for Codeforces Division 3/4 rounds, algorithm drills, and data processing scripts.",
      certificate: {
        title: "SoloLearn Python Track",
        url: "https://www.sololearn.com/profile/18253921/?ref=app"
      },
      certLabel: "Verified on SoloLearn (Profile 18253921)"
    },
    sql: {
      id: "sql",
      name: "SQL",
      level: "Relational Queries & Data Selection",
      percentage: 50,
      iconSvg: `<svg viewBox="0 0 100 100" class="tech-svg"><ellipse cx="50" cy="22" rx="38" ry="14" fill="#00758F"/><path d="M12 22v30c0 7.7 17 14 38 14s38-6.3 38-14V22" fill="none" stroke="#00758F" stroke-width="8"/><path d="M12 52v26c0 7.7 17 14 38 14s38-6.3 38-14V52" fill="none" stroke="#F29111" stroke-width="8"/><text x="50" y="58" font-size="20" font-family="-apple-system, sans-serif" font-weight="900" fill="#ffffff" text-anchor="middle">SQL</text></svg>`,
      description: "Relational database operations: querying tables using SELECT, conditional filtering with WHERE and LIKE, ordering with ORDER BY, aggregate functions (COUNT, SUM, AVG), and multi-table JOINs.",
      experience: "Hands-on relational query exercises, schema analysis, and structured database problem sets.",
      certificate: {
        title: "SoloLearn SQL Track",
        url: "https://www.sololearn.com/profile/18253921/?ref=app"
      },
      certLabel: "Verified on SoloLearn (Profile 18253921)"
    },
    prompting: {
      id: "prompting",
      name: "Prompt Engineering",
      level: "Structured AI Workflows & LLMs",
      percentage: 75,
      iconSvg: `<svg viewBox="0 0 100 100" class="tech-svg"><defs><linearGradient id="promptGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#9333ea"/><stop offset="100%" stop-color="#3b82f6"/></linearGradient></defs><circle cx="50" cy="50" r="44" fill="url(#promptGrad)"/><path d="M50 20 L56 38 L74 44 L56 50 L50 68 L44 50 L26 44 L44 38 Z" fill="#ffffff"/><circle cx="68" cy="68" r="7" fill="#facc15"/><circle cx="28" cy="68" r="5" fill="#38bdf8"/></svg>`,
      description: "Formulating precise system prompts, zero-shot and few-shot formatting, chain-of-thought problem structuring, and integrating large language models to accelerate code generation, testing, and debugging.",
      experience: "Designing reliable prompting patterns for full-stack prototyping, algorithm analysis, and code optimization.",
      certificate: null,
      certLabel: "Hands-On Practice & LLM Tooling"
    }
  };

  /* Conveyor Technology Logos (Clean, recognizable SVGs ONLY) */
  const CONVEYOR_ITEMS = [
    { name: "C++", svg: SKILLS_DATA.cpp.iconSvg },
    { name: "HTML5", svg: SKILLS_DATA.html5.iconSvg },
    { name: "CSS3", svg: SKILLS_DATA.css3.iconSvg },
    { name: "JavaScript", svg: SKILLS_DATA.js.iconSvg },
    { name: "Python", svg: SKILLS_DATA.python.iconSvg },
    { name: "SQL", svg: SKILLS_DATA.sql.iconSvg },
    { name: "Prompting", svg: SKILLS_DATA.prompting.iconSvg },
    {
      name: "Git",
      svg: `<svg viewBox="0 0 100 100" class="tech-svg"><path fill="#F05032" d="M92.7 45.4L54.6 7.3a6.8 6.8 0 0 0-9.6 0L33.7 18.6l12.2 12.2a8.1 8.1 0 0 1 10.3 10.3l11.7 11.7a8.1 8.1 0 1 1-4.8 4.8L52.1 46.6v23.2a8.1 8.1 0 1 1-6.8 0V45.7a8.1 8.1 0 0 1-4.4-10.6L28.8 23 7.3 44.5a6.8 6.8 0 0 0 0 9.6l38.1 38.1a6.8 6.8 0 0 0 9.6 0l37.7-37.7a6.8 6.8 0 0 0 0-9.1z"/></svg>`
    },
    {
      name: "GitHub",
      svg: `<svg viewBox="0 0 100 100" class="tech-svg"><path fill="#181717" d="M50 0C22.4 0 0 22.4 0 50c0 22.1 14.3 40.8 34.2 47.4 2.5.5 3.4-1.1 3.4-2.4v-8.5c-13.9 3-16.8-6.7-16.8-6.7-2.3-5.8-5.6-7.3-5.6-7.3-4.5-3.1.3-3 .3-3 5 0.4 7.6 5.1 7.6 5.1 4.4 7.6 11.6 5.4 14.4 4.1.4-3.2 1.7-5.4 3.1-6.7-11.1-1.3-22.8-5.6-22.8-24.8 0-5.5 2-10 5.2-13.5-.5-1.3-2.3-6.4.5-13.3 0 0 4.2-1.3 13.8 5.1 4-1.1 8.3-1.7 12.6-1.7 4.3 0 8.6.6 12.6 1.7 9.6-6.5 13.8-5.1 13.8-5.1 2.8 6.9 1 12 0.5 13.3 3.3 3.5 5.2 8 5.2 13.5 0 19.3-11.7 23.5-22.9 24.7 1.8 1.5 3.4 4.6 3.4 9.3v13.8c0 1.4.9 2.9 3.5 2.4C85.7 90.8 100 72.1 100 50c0-27.6-22.4-50-50-50z"/></svg>`
    },
    {
      name: "Codeforces",
      svg: `<svg viewBox="0 0 100 100" class="tech-svg"><rect x="10" y="46" width="20" height="46" rx="4" fill="#3B5998"/><rect x="40" y="24" width="20" height="68" rx="4" fill="#FFC107"/><rect x="70" y="6" width="20" height="86" rx="4" fill="#E61C24"/></svg>`
    },
    {
      name: "SoloLearn",
      svg: `<svg viewBox="0 0 100 100" class="tech-svg"><defs><linearGradient id="slGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#10B981"/><stop offset="100%" stop-color="#059669"/></linearGradient></defs><circle cx="50" cy="50" r="44" fill="url(#slGrad)"/><path d="M30 46 C30 32, 42 24, 52 24 C64 24, 72 32, 70 42 C68 52, 54 54, 46 58 C38 62, 34 68, 36 74 C38 80, 48 82, 58 78" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/></svg>`
    }
  ];

  /* ==========================================================================
     2. DAY / NIGHT WORLD TRANSITION (180° Environmental 3D Rotation)
     ========================================================================== */
  function initEnvironmentToggle() {
    const celestialBtn = document.getElementById('celestial-toggle');
    const envWorld = document.getElementById('env-world');
    const dewCanvas = document.getElementById('dew-canvas');
    if (!celestialBtn || !envWorld) return;

    let isDay = false;
    let isTransitioning = false;

    // Render Procedural Dew / Condensation Droplets
    if (dewCanvas) {
      renderDewDroplets(dewCanvas, isDay);
      window.addEventListener('resize', () => renderDewDroplets(dewCanvas, isDay), { passive: true });
    }

    celestialBtn.addEventListener('click', () => {
      if (isTransitioning) return;
      isTransitioning = true;
      isDay = !isDay;

      // Update button state and accessible labels
      celestialBtn.classList.toggle('is-day', isDay);
      celestialBtn.setAttribute('aria-label', isDay ? 'Switch to Night Mode' : 'Switch to Day Mode');
      celestialBtn.setAttribute('title', isDay ? 'Switch to Night Mode' : 'Switch to Day Mode');

      // 180° Environmental Rotation on the 3D world scene
      envWorld.style.transform = isDay ? 'rotateY(180deg)' : 'rotateY(0deg)';
      document.body.classList.toggle('day-mode', isDay);

      // Re-render droplets with day/night ambient color refraction
      if (dewCanvas) {
        setTimeout(() => renderDewDroplets(dewCanvas, isDay), 400);
      }

      // Unlock after transition finishes
      setTimeout(() => {
        isTransitioning = false;
      }, 1450);
    });
  }

  /**
   * Procedural Condensation & Water Droplet Generator
   * Draws realistic varying dew droplets with soft specular glints
   */
  function renderDewDroplets(canvas, isDay) {
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    // Deterministic procedural droplet placement for stability
    const dropCount = Math.floor((width * height) / 14000);
    const glintColor = isDay ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 229, 255, 0.75)';
    const shadowColor = isDay ? 'rgba(0, 0, 0, 0.18)' : 'rgba(0, 0, 0, 0.45)';

    for (let i = 0; i < dropCount; i++) {
      // Pseudo-random seeded coordinates
      const x = (Math.sin(i * 997.3) * 0.5 + 0.5) * width;
      const y = (Math.cos(i * 613.7) * 0.5 + 0.5) * height;
      const radius = 1.2 + (Math.sin(i * 331.1) * 0.5 + 0.5) * 3.8;

      // Droplet body with shadow
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = isDay ? 'rgba(255, 255, 255, 0.15)' : 'rgba(15, 23, 42, 0.28)';
      ctx.fill();

      ctx.lineWidth = 0.6;
      ctx.strokeStyle = shadowColor;
      ctx.stroke();

      // Specular highlight / glint
      ctx.beginPath();
      ctx.arc(x - radius * 0.35, y - radius * 0.35, radius * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = glintColor;
      ctx.fill();
    }
  }

  /* ==========================================================================
     3. TRUE INFINITE 3D LOOP CONVEYOR (No Teleporting, Seamless Spline Motion)
     ========================================================================== */
  function init3DConveyorTrack() {
    const conveyorStage = document.getElementById('conveyor-3d-stage');
    if (!conveyorStage) return;

    // Clear existing children
    conveyorStage.innerHTML = '';

    // Create dual-row continuous conveyor track nodes
    // We duplicate items across the track length so spacing is mathematically continuous
    const items = [...CONVEYOR_ITEMS, ...CONVEYOR_ITEMS]; // 22 boxes
    const totalBoxes = items.length;
    const elements = [];

    // Track physical parameters
    // Length is normalized arc [0, 1)
    items.forEach((item, index) => {
      const box = document.createElement('div');
      box.className = 'conveyor-box-3d';
      box.setAttribute('role', 'img');
      box.setAttribute('aria-label', item.name + ' Logo');

      const inner = document.createElement('div');
      inner.className = 'box-inner-logo';
      inner.innerHTML = item.svg;

      box.appendChild(inner);
      conveyorStage.appendChild(box);

      elements.push({
        el: box,
        offset: index / totalBoxes // Initial fractional position along closed path
      });
    });

    let animationFrameId = null;
    let startTime = performance.now();
    let isPaused = false;
    const speed = 0.024; // Normalized loops per second

    conveyorStage.addEventListener('mouseenter', () => { isPaused = true; });
    conveyorStage.addEventListener('mouseleave', () => { isPaused = false; });

    /**
     * Continuous 3D Closed Loop Spline Mapping
     * The track forms a continuous stadium/racecourse in 3D:
     * - Top lane: moves Left-to-Right along X from -W to +W (Z = 20)
     * - Right turnaround: curves smoothly around through depth (Z recedes to -120, turns 180° around Y)
     * - Bottom lane: moves Right-to-Left along X from +W to -W (Z = -60)
     * - Left turnaround: curves smoothly back to Top lane (Z comes forward to 20, turns back)
     * 
     * Mathematically closed & smooth everywhere: NO JUMP, NO TELEPORT.
     */
    function updateConveyor(now) {
      if (!isPaused) {
        const elapsed = (now - startTime) / 1000;
        const stageWidth = Math.min(conveyorStage.clientWidth || 1000, 1100);
        const halfWidth = (stageWidth / 2) - 60;
        const rowSpacing = 95; // Vertical distance between top & bottom lanes

        elements.forEach(item => {
          // Progress t in [0, 1)
          let t = (item.offset + elapsed * speed) % 1;
          if (t < 0) t += 1;

          let x = 0;
          let y = 0;
          let z = 0;
          let rotateY = 0;
          let opacity = 1;
          let scale = 1;

          // Split track into 4 smooth segments:
          // 0.00 - 0.40 : Top lane moving Left -> Right
          // 0.40 - 0.50 : Right turnaround into depth (smooth arc)
          // 0.50 - 0.90 : Bottom lane moving Right -> Left
          // 0.90 - 1.00 : Left turnaround surfacing forward (smooth arc)

          if (t < 0.40) {
            // Segment 1: Top lane
            const p = t / 0.40;
            x = -halfWidth + p * (2 * halfWidth);
            y = -rowSpacing;
            z = 30;
            rotateY = 0;
            scale = 1;
            opacity = 1;
          } else if (t < 0.50) {
            // Segment 2: Right Turnaround (Curves into background)
            const p = (t - 0.40) / 0.10; // 0 to 1
            const angle = p * Math.PI; // 0 to PI
            x = halfWidth + Math.sin(angle) * 70;
            y = -rowSpacing + p * (2 * rowSpacing);
            z = 30 - Math.sin(angle) * 160;
            rotateY = -angle * (180 / Math.PI);
            scale = 1 - Math.sin(angle) * 0.25;
            opacity = 0.95 - Math.sin(angle) * 0.3;
          } else if (t < 0.90) {
            // Segment 3: Bottom lane (moving Right -> Left)
            const p = (t - 0.50) / 0.40;
            x = halfWidth - p * (2 * halfWidth);
            y = rowSpacing;
            z = -40;
            rotateY = 0;
            scale = 0.92;
            opacity = 0.88;
          } else {
            // Segment 4: Left Turnaround (Surfacing forward to Top Lane)
            const p = (t - 0.90) / 0.10;
            const angle = p * Math.PI;
            x = -halfWidth - Math.sin(angle) * 70;
            y = rowSpacing - p * (2 * rowSpacing);
            z = -40 + Math.sin(angle) * 160;
            rotateY = angle * (180 / Math.PI);
            scale = 0.92 + Math.sin(angle) * 0.15;
            opacity = 0.88 + Math.sin(angle) * 0.12;
          }

          // Apply smooth GPU-accelerated 3D transform
          item.el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, ${z.toFixed(2)}px) rotateY(${rotateY.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
          item.el.style.opacity = opacity.toFixed(2);
        });
      }

      animationFrameId = requestAnimationFrame(updateConveyor);
    }

    animationFrameId = requestAnimationFrame(updateConveyor);

    // Clean up on unmount if needed
    window.addEventListener('beforeunload', () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    });
  }

  /* ==========================================================================
     4. INTERACTIVE TECHNICAL CAPABILITIES WHEEL & DETAIL PANEL
     ========================================================================== */
  function initSkillsWheelAndPanel() {
    const wheelContainer = document.getElementById('skills-wheel-list');
    const panelContent = document.getElementById('skill-detail-display');
    if (!wheelContainer || !panelContent) return;

    let activeSkillId = null;

    // Render Initial Overview State
    renderPanelOverview();

    // Attach click listener to each skill item in the wheel
    const skillItems = wheelContainer.querySelectorAll('.wheel-item');
    skillItems.forEach(item => {
      item.addEventListener('click', () => {
        const skillKey = item.dataset.skill;
        if (!skillKey || !SKILLS_DATA[skillKey]) return;

        // Toggle active visual highlight on wheel
        skillItems.forEach(si => si.classList.remove('active'));
        item.classList.add('active');
        activeSkillId = skillKey;

        // Render expanded detail view
        renderSkillDetail(SKILLS_DATA[skillKey]);
      });

      // Keyboard selection (Enter or Space)
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          item.click();
        }
      });
    });

    /**
     * Render Default Overview in Left Panel
     */
    function renderPanelOverview() {
      const data = SKILLS_DATA.overview;
      panelContent.innerHTML = `
        <div class="panel-fade-in">
          <div class="panel-badge-row">
            <span class="panel-badge">${data.badge}</span>
            <span class="panel-counter">${data.totalCount} Core Technologies</span>
          </div>

          <h3 class="panel-title">${data.title}</h3>
          <p class="panel-intro-text">${data.intro}</p>
          <p class="panel-body-text">${data.details}</p>

          <div class="panel-highlights-list">
            ${data.highlights.map(h => `
              <div class="panel-highlight-row">
                <span class="h-label">${h.label}</span>
                <span class="h-val">${h.val}</span>
              </div>
            `).join('')}
          </div>

          <div class="panel-guide-hint">
            <span class="hint-icon">⚙</span>
            <span>Scroll the wheel on the right &amp; click any skill to inspect progress and certificates.</span>
          </div>
        </div>
      `;
    }

    /**
     * Render Selected Skill Details with Animated Progress Bar
     */
    function renderSkillDetail(skill) {
      panelContent.innerHTML = `
        <div class="panel-fade-in">
          <div class="panel-top-nav">
            <button id="btn-back-overview" class="back-overview-btn" aria-label="Back to Overview">
              ← Back to Overview
            </button>
            <span class="skill-status-tag">${skill.level}</span>
          </div>

          <div class="selected-skill-header">
            <div class="selected-icon-box">
              ${skill.iconSvg}
            </div>
            <div>
              <h3 class="selected-skill-name">${skill.name}</h3>
              <span class="selected-skill-sub">${skill.level}</span>
            </div>
          </div>

          <!-- Animated Progress Bar -->
          <div class="progress-section">
            <div class="progress-labels">
              <span class="p-title">Proficiency &amp; Practice Progress</span>
              <span class="p-pct" id="progress-number">0%</span>
            </div>
            <div class="progress-track" role="progressbar" aria-valuenow="${skill.percentage}" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-fill" id="progress-bar-fill" style="width: 0%;"></div>
            </div>
          </div>

          <!-- Descriptions -->
          <div class="skill-desc-block">
            <h4 class="subhead">Overview &amp; Implementation</h4>
            <p class="skill-text">${skill.description}</p>
          </div>

          <div class="skill-exp-block">
            <h4 class="subhead">Hands-On Practice</h4>
            <p class="skill-text">${skill.experience}</p>
          </div>

          <!-- Certificate Section -->
          <div class="cert-status-block">
            <h4 class="subhead">Verified Credentials</h4>
            ${skill.certificate ? `
              <div class="cert-found-pill">
                <div class="cert-pill-text">
                  <strong>${skill.certificate.title}</strong>
                  <span>${skill.certLabel}</span>
                </div>
                <a href="${skill.certificate.url}" target="_blank" rel="noopener noreferrer" class="cert-view-btn">
                  Verify Link ↗
                </a>
              </div>
            ` : `
              <div class="cert-missing-pill">
                <span class="cert-info-dot"></span>
                <span>${skill.certLabel}</span>
              </div>
            `}
          </div>
        </div>
      `;

      // Smoothly animate the horizontal progress bar from 0 to stored percentage
      requestAnimationFrame(() => {
        setTimeout(() => {
          const fill = document.getElementById('progress-bar-fill');
          const num = document.getElementById('progress-number');
          if (fill) fill.style.width = skill.percentage + '%';
          if (num) {
            let current = 0;
            const target = skill.percentage;
            const stepTime = Math.max(10, Math.floor(600 / target));
            const timer = setInterval(() => {
              current++;
              num.textContent = current + '%';
              if (current >= target) clearInterval(timer);
            }, stepTime);
          }
        }, 50);
      });

      // Back to Overview interaction
      const backBtn = document.getElementById('btn-back-overview');
      if (backBtn) {
        backBtn.addEventListener('click', () => {
          skillItems.forEach(si => si.classList.remove('active'));
          activeSkillId = null;
          renderPanelOverview();
        });
      }
    }
  }

  /* ==========================================================================
     5. INITIALIZE ON DOM CONTENT LOADED
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initEnvironmentToggle();
    init3DConveyorTrack();
    initSkillsWheelAndPanel();
  });

})();
