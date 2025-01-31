class Resume {
    constructor() {
        this.currentView = 'list';
        this.currentPath = '/brandonb';
        this.selectedItem = null;
        
        this.homeTab = {
            title: "brandonb",
            files: [
                {
                    title: 'Cover Letter',
                    icon: './images/star.png',
                    details: [
                        `Brandon is a developer with an eye for design, blending code and creativity to build sleek, high-quality digital experiences. From front-end to back-end, websites to mobile apps, I craft seamless solutions with JavaScript, React, WordPress, and more.`,
                        `With a passion for art, design, and fashion, I bring a refined aesthetic to my work-balancing functionality with style. I'm always looking for new ways to push boundaries and create products that not only work flawlessly but look incredible too.`
                    ]
                }, {
                    title: 'Resume.pdf',
                    icon: './images/PDF.png',
                    details: [
                        'An ambitious and self-motivated developer.',
                        'A quick learner who can absorb new ideas and communicate effectively.'
                    ],
                }, {
                    title: 'Contact Info',
                    icon: './images/person.crop.circle.png',
                    details: [
                        '<a href="mailto:bbudron@gmail.com">bbudron@gmail.com</a>',
                        // '<a href="tel:+13213057677">321-305-7677</a>',
                        '<a href="https://www.linkedin.com/in/bbudron/" target="_blank">https://www.linkedin.com/in/bbudron/</a>'
                    ]
                }
            ]
        }
        this.experienceTab = {
            title: "Experience",
            files: [
                {
                    company: 'RAES',
                    icon: './images/RAES.png',
                    title: 'Front End Developer & UI Designer',
                    date: 'June 2022 - Present',
                    details: [
                        'Led UI/UX redesign of entire system using Photoshop and Figma',
                        'Created Bootstrap component library for web development team',
                        'Developed cross-platform mobile application using React Native, Expo, TypeScript',
                        'Collaborated with backend developers using Git for integration'
                    ]
                }, {
                    company: 'Budron Homes',
                    icon: './images/BH.png',
                    title: 'Web Developer & Project Manager',
                    date: 'March 2021 - Present',
                    details: [
                        'Led website development using WordPress, Elementor, HTML, CSS, JavaScript, and jQuery',
                        'Built employee portal using React, NodeJS, and Firebase',
                        'Reduced annual software costs by 40%',
                        'Increased lead generation by over 150%'
                    ]
                }, {
                    company: 'Constantly Creating',
                    icon: './images/CC.png',
                    title: 'Full Stack Developer & Graphic Designer',
                    date: 'January 2017 - Present',
                    details: [
                        'Managed multiple project lifecycles from ideation to deployment',
                        'Collaborated with product managers, investors, developers, and designers',
                        'Tested usability and improved functionality based on user feedback'
                    ]
                }, {
                    company: 'Legal Ease Marketing',
                    icon: './images/LE.png',
                    title: 'Web Developer',
                    date: 'April 2023 - December 2023',
                    details: [
                        'Developed high-performance websites from Figma mockups using WordPress, Wix, and WebFlow',
                        'Contributed to 320% increase in client website traffic within two months',
                        'Streamlined workflows reducing turnaround times by ~35%',
                        'Worked with design and marketing teams to optimize site performance'
                    ]
                }, {
                    company: 'XI Media Labs',
                    icon: './images/XI.png',
                    title: 'Software Developer',
                    date: 'July 2019 - June 2022',
                    details: [
                        'Developed web/mobile applications using Swift, React, React Native',
                        'Implemented REST APIs using Node.js, Express.js, MongoDB, SQL',
                        'Optimized API calls improving load times by ~90%',
                        'Implemented security features including JWT authentication',
                        'Integrated Firebase serving 15,000+ daily messages'
                    ]
                },
            ]
        }
        this.skillsTab = {
            title: "Skills",
            files: [
                {
                    title: 'Frontend',
                    icon: './images/Frontend.png',
                    description: "Building responsive and dynamic user interfaces using modern frameworks like React and TypeScript, with a focus on creating seamless web and mobile experiences",
                    details: ['React', 'React Native', 'TypeScript', 'HTML', 'CSS', 'JavaScript', 'jQuery']},
                {
                    title: 'Backend',
                    icon: './images/Server.png',
                    description: "Developing robust server-side solutions using Node.js and Express.js, with expertise in both SQL and NoSQL databases, plus machine learning integration with TensorFlow.",
                    details: ['Node.js', 'Express.js', 'Firebase', 'MongoDB', 'SQL', 'TensorFlow']},
                {
                    title: 'Design',
                    icon: './images/Design.png',
                    description: "Creating polished user experiences through professional design tools, from wireframing in Figma to producing refined visual assets with Adobe Creative Suite.",
                    details: ['Figma', 'Adobe Photoshop', 'Adobe InDesign']
                }
            ]
        }
        this.educationTab = {
            title: "Education",
            files: [
                {
                    school: "University of Central Florida",
                    icon: './images/UCF-1.svg',
                    title: 'Computer Science',
                    date: '2018 - 2020',
                    details: [
                        'Member of Knight Hacks organization'
                    ]
                }, {
                    school: "UCF Bootcamp",
                    icon: './images/UCF-2.png',
                    title: 'Full Stack Development Diploma',
                    date: '2017 - 2018',
                    details: [
                        'Immersive curriculum covering the MERN stack'
                    ]
                }, {
                    school: "Valencia College",
                    icon: './images/VALENCIA.png',
                    title: 'Business Administration',
                    date: '2015 - 2018',
                    details: [
                        "President's List - Earned at least a 3.75 GPA"
                    ]
                }, {
                    school: "Adobe",
                    icon: './images/PS.png',
                    title: 'Visual Communication & Digital Media Design',
                    date: 'Certification',
                    details: [
                        'Certified in Photoshop & InDesign',
                        'Focus on visual communication and digital media design'
                    ]
                }, {
                    school: "Google",
                    icon: './images/GOOGLE.png',
                    title: 'Data Analytics',
                    date: 'Certification',
                    details: [
                        'Certified in Google Analytics',
                        'Focus on data analytics and visualization'
                    ]
                }
            ]
        }
        
        this.initializeEventListeners();
        this.render();
    }

    initializeEventListeners() {
        // Sidebar navigation
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.addEventListener('click', (e) => this.handleSidebarClick(e));
        });

        // File list interactions
        document.addEventListener('click', (e) => {
            const row = e.target.closest('.file-list tr');
            if (row) {
                this.handleItemClick(row);
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));


        const shareButton = document.getElementById('shareButton');
        shareButton.addEventListener('click', (e) => this.handleShareButtonClick(e));
        document.addEventListener('click', (e) => this.handleDocumentClick(e));
    

        // Dark Mode Toggle
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const quote = document.getElementById('quote');
        const body = document.body;

        const lightQuote = '"Simple can be harder than complex, you have to work hard to get your thinking clean to make it simple"'
        const darkQuote = '"Stay hungry, stay foolish"'

        // Function to toggle dark mode
        function toggleDarkMode() {
            body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
            quote.innerText = body.classList.contains('dark-mode') ? darkQuote : lightQuote;
        }

        // Initial dark mode check
        if (localStorage.getItem('darkMode') === 'true') {
            body.classList.add('dark-mode');
            quote.innerText = darkQuote
        } else {
            quote.innerText = lightQuote
        }

        // Event listener for dark mode toggle button
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }

    handleItemClick(row) {
        document.querySelectorAll('.file-list tr').forEach(r => r.classList.remove('selected'));
        row.classList.add('selected');
        this.selectedItem = row;
        this.renderPreview();
    }

    handleKeyboard(e) {
        const rows = Array.from(document.querySelectorAll('.file-list tr'));
        const currentIndex = rows.findIndex(row => row.classList.contains('selected'));

        switch(e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (currentIndex < rows.length - 1) {
                    this.handleItemClick(rows[currentIndex + 1]);
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentIndex > 0) {
                    this.handleItemClick(rows[currentIndex - 1]);
                }
                break;
        }
    }

    handleSidebarClick(e) {
        const category = e.target.textContent.trim();
        this.currentPath = `/${category}`;
        
        document.querySelectorAll('.sidebar-item').forEach(item => {
            item.classList.remove('active');
        });
        e.target.classList.add('active');
        
        this.render();
    }

    render() {
        this.renderContent();
        this.renderPreview();
    }

    renderHome() {
        return `
            <table class="file-list">
                <tbody>
                    ${this.homeTab.files.map((data) => `
                        <tr>
                            <td>
                                <img src="${data.icon}" alt="file icon" class="file-icon">
                                ${data.title}
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `
    }

    renderSkills() {
        return `
            <table class="file-list">
                <tbody>
                    ${this.skillsTab.files.map((data) => `
                        <tr>
                            <td>
                                <img src="${data.icon}" alt="file icon" class="file-icon">
                                ${data.title}
                            </td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    renderExperience() {
        return `
            <table class="file-list">
                <tbody>
                    ${this.experienceTab.files.map((data) => `
                        <tr>
                            <td class="name-column">
                                <img src="${data.icon}" alt="file icon" class="file-icon">
                                ${data.title}
                            </td>
                            <td class="date-column">${data.date || ''}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    renderEducation() {
        return `
            <table class="file-list">
                <tbody>
                    ${this.educationTab.files.map((data) => `
                        <tr>
                            <td class="name-column">
                                <img src="${data.icon}" alt="file icon" class="file-icon">
                                ${data.title}
                            </td>
                            <td class="date-column">${data.date || ''}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    renderContent() {
        const container = document.querySelector('.file-browser');

        switch (this.currentPath) {
            case "/brandonb":
                container.innerHTML = this.renderHome();
                break;
        
            case "/Experience":
                container.innerHTML = this.renderExperience();
                break;

            case "/Education":
                container.innerHTML = this.renderEducation();
                break;

            case "/Skills":
                container.innerHTML = this.renderSkills();
                break;

            default:
                container.innerHTML = ``;
                break;
        }
    }

    renderPreview() {
        const selected = document.querySelector('.file-list tr.selected');
        const previewPanel = document.querySelector('.preview-panel');

        if (!selected || !previewPanel) {
            previewPanel.style.display = 'none';
            return;
        }
        previewPanel.style.display = 'flex';

        const itemName = selected.querySelector('td:first-child').textContent.trim();
        const category = this.currentPath.slice(1);

        let itemData;

        switch (this.currentPath) {
            case "/brandonb":                
                itemData = this.homeTab.files.find(file => file.title === itemName)
                break;
        
            case "/Experience":
                itemData = this.experienceTab.files.find(file => file.title === itemName)
                break;

            case "/Education":
                itemData = this.educationTab.files.find(file => file.title === itemName)
                break;

            case "/Skills":
                itemData = this.skillsTab.files.find(file => file.title === itemName)
                break;

            default:
                break;
        }

        if (!itemData) return;

        this.renderDetailedPreview(itemName, itemData);
    }

    renderHomeDetails(itemName, itemData) {
        return `
            <div class="preview-header">
                <div class="preview-title">${itemName}</div>
            </div>
            <div class="preview-content">
                ${itemName == "Resume.pdf" ? `<div class="preview-section">
                    <object
                        class="pdf" 
                        data="./Brandon-Budron-Resume.pdf"
                        width="100"
                        height="450"
                    >
                    </object>
                </div>`
                : 
                `<div class="preview-section">
                    <div class="textual">${itemData.details.map(detail => `<div>${detail}<br/><br/></div>`).join('')}</div>
                </div>`}
            </div>
        `;
    }

    renderSkillsDetails(itemName, itemData) {
        return `
            <div class="preview-header">
                <div class="preview-title">${itemName}</div>
                <div class="preview-subtitle">${itemData.description || ''}</div>
            </div>
            <div class="preview-content">
                <div class="preview-section">
                    <ul class="preview-list">
                        <div class="textual">${itemData.details?.map(detail => `<li>${detail}</li>`).join('') || ''}</div>
                    </ul>
                </div>
            </div>
        `;
    }

    renderExperienceDetails(itemName, itemData) {
        return `
            <div class="preview-icon-container">
                <img src="${itemData.icon}" alt="file icon" class="preview-icon">
            </div>
                <div class="company-name">${itemData.company || ''}</div>
            <div class="preview-header">
                <div class="preview-title">${itemName}</div>
                <div class="preview-subtitle">${itemData.date || ''}</div>
            </div>
            <div class="preview-content">
                <div class="preview-section">
                    <ul class="preview-list">
                        <div class="textual">${itemData.details?.map(detail => `<li>${detail}</li>`).join('') || ''}</div>
                    </ul>
                </div>
            </div>
        `;
    }

    renderEducationDetails(itemName, itemData) {
        return `
            <div class="preview-icon-container">
                <img src="${itemData.icon}" alt="file icon" class="preview-icon">
            </div>
                <div class="company-name">${itemData.school || ''}</div>
            <div class="preview-header">
                <div class="preview-title">${itemName}</div>
                <div class="preview-subtitle">${itemData.date || ''}</div>
            </div>
            <div class="preview-content">
                <div class="preview-section">
                    <ul class="preview-list">
                        <div class="textual">${itemData.details?.map(detail => `<li>${detail}</li>`).join('') || ''}</div>
                    </ul>
                </div>
            </div>
        `;
    }

    renderDetailedPreview(itemName, itemData) {
        const previewPanel = document.querySelector('.preview-panel');
        switch (this.currentPath) {
            case "/brandonb":
                previewPanel.innerHTML = this.renderHomeDetails(itemName, itemData);
                break;
            case "/Skills":
                previewPanel.innerHTML = this.renderSkillsDetails(itemName, itemData);
                break;
        
            case "/Experience":
                previewPanel.innerHTML = this.renderExperienceDetails(itemName, itemData);
                break;

            case "/Education":
                previewPanel.innerHTML = this.renderEducationDetails(itemName, itemData);
                break;

            default:
                previewPanel.innerHTML = ``;
                break;
        }
    }

    shareMenu = null;

    createShareMenu() {
        if (this.shareMenu) {
            this.shareMenu.remove();
        }

        this.shareMenu = document.createElement('div');
        this.shareMenu.className = 'share-menu';
        this.shareMenu.innerHTML = `
            <div class="share-menu-item" data-action="copy">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none">
                    <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                </svg>
                Copy URL
            </div>
            <div class="share-menu-item" data-action="email">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Email
            </div>
        `;
        
        document.body.appendChild(this.shareMenu);
        
        const shareButton = document.getElementById('shareButton');
        const buttonRect = shareButton.getBoundingClientRect();
        this.shareMenu.style.top = buttonRect.bottom + 'px';
        this.shareMenu.style.right = (window.innerWidth - buttonRect.right) + 'px';

        this.shareMenu.querySelectorAll('.share-menu-item').forEach(item => {
            item.addEventListener('click', (e) => this.handleShareAction(e));
        });

        setTimeout(() => this.shareMenu.classList.add('active'), 0);
    }

    async handleShareAction(e) {
        const action = e.currentTarget.dataset.action;
        
        switch(action) {
            case 'copy':
                try {
                    await navigator.clipboard.writeText(window.location.href);
                    this.showToast('Link copied to clipboard!');
                } catch (err) {
                    this.showToast('Failed to copy link');
                }
                break;
            case 'email':
                const subject = encodeURIComponent('Brandon Budron');
                const body = encodeURIComponent(`Take a look at Brandon's resume: brandonbudron.com`);
                window.location.href = `mailto:?subject=${subject}&body=${body}`;
                break;
        }
        
        this.closeShareMenu();
    }

    showToast(message) {        
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = message;
        
        // Position toast relative to share button
        document.body.appendChild(toast);
        
        // Add show class after a brief delay to trigger animation
        requestAnimationFrame(() => {
            toast.classList.add('show');
        });
        
        // Remove toast after delay
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

    closeShareMenu() {
        if (this.shareMenu) {
            this.shareMenu.classList.remove('active');
            setTimeout(() => {
                this.shareMenu.remove();
                this.shareMenu = null;
            }, 200);
        }
    }

    handleShareButtonClick(e) {
        e.stopPropagation();
        if (this.shareMenu) {
            this.closeShareMenu();
        } else {
            this.createShareMenu();
        }
    }

    handleDocumentClick(e) {
        if (this.shareMenu && !this.shareMenu.contains(e.target) && e.target !== document.getElementById('shareButton')) {
            this.closeShareMenu();
        }
    }
}

const resume = new Resume();