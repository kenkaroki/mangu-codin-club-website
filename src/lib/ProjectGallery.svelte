<script lang="ts">
    let activeTab: 'software' | 'robotics' = 'software';

    const softwareProjects = [
        {
            title: "Mangu Mechatronics Club Website",
            description: "The very platform you are browsing right now! Built using modern web technologies for blazing fast performance and styled with a custom design system.",
            tags: ["Web", "UI/UX", "Frontend"],
            link: "https://github.com/mangu-codes-club",
            status: "Completed"
        },
        {
            title: "Student Management System",
            description: "A backend service designed to handle student data, event registration, and club resources securely.",
            tags: ["Python", "Flask", "Backend"],
            link: "#",
            status: "In Progress"
        },
        {
            title: "Cyber Capture The Flag Environment",
            description: "A purposefully vulnerable web application designed to help the Cyber Security team practice their penetration testing skills.",
            tags: ["Security", "Docker", "Linux"],
            link: "#",
            status: "Planning"
        }
    ];

    const roboticsProjects = [
        {
            title: "Autonomous Line Follower",
            description: "A fast, nimble robotic chassis powered by a microcontroller that can navigate complex track layouts using IR sensors.",
            tags: ["Hardware", "Sensors", "C++"],
            link: "#",
            status: "Completed"
        },
        {
            title: "Smart Weather Station",
            description: "An IoT device that collects temperature, humidity, and pressure data and streams it to a live cloud dashboard.",
            tags: ["IoT", "Circuits", "Data"],
            link: "#",
            status: "In Progress"
        },
        {
            title: "3D Printed Robotic Arm",
            description: "A 5-axis robotic arm designed entirely in CAD, 3D printed, and powered by high-torque servos for precise movements.",
            tags: ["CAD", "Mechanics", "3D Printing"],
            link: "#",
            status: "Planning"
        }
    ];

    function getStatusColor(status: string) {
        switch(status) {
            case 'Completed': return '#10b981';
            case 'In Progress': return '#f59e0b';
            case 'Planning': return '#64748b';
            default: return '#cbd5e1';
        }
    }
</script>

<div class="gallery-page" id="gallery">
    
    <div class="intro-container">
        <h1 class="main-title">Project Gallery</h1>
        <p class="gallery-intro">
            Explore the cutting-edge prototypes, applications, and hardware born from the Mang'u Mechatronics Club. 
            Here is where code leaves the screen and impacts the real world.
        </p>
    </div>

    <!-- Tab Navigation -->
    <div class="tab-container">
        <button 
            class="tab-btn {activeTab === 'software' ? 'active' : ''}" 
            on:click={() => activeTab = 'software'}>
            Software Projects
        </button>
        <button 
            class="tab-btn {activeTab === 'robotics' ? 'active' : ''}" 
            on:click={() => activeTab = 'robotics'}>
            Robotics Projects
        </button>
    </div>

    <div class="projects-grid">
        {#each (activeTab === 'software' ? softwareProjects : roboticsProjects) as project}
            <div class="project-card fade-in">
                <div class="project-visual">
                    <!-- Placeholder until real images are added -->
                    <div class="visual-placeholder">
                        <span class="placeholder-icon">{activeTab === 'software' ? '💻' : '⚙️'}</span>
                        <span class="placeholder-text">View Project</span>
                    </div>
                    <div class="status-badge" style="background: {getStatusColor(project.status)};">{project.status}</div>
                </div>
                
                <div class="project-content">
                    <h3 class="proj-title">{project.title}</h3>
                    <p class="proj-desc">{project.description}</p>
                    
                    <div class="tags-container">
                        {#each project.tags as tag}
                            <span class="tag">{tag}</span>
                        {/each}
                    </div>

                    <a href={project.link} class="view-btn" target="_blank" rel="noopener noreferrer">Explore Project →</a>
                </div>
            </div>
        {/each}
    </div>
</div>

<style>
    .gallery-page {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem 6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .intro-container {
        text-align: center;
        margin-bottom: 4rem;
        padding: 3rem;
        background: white;
        border-radius: 1.5rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.03);
        width: 100%;
        max-width: 900px;
    }

    .main-title {
        font-size: 3.5rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        background: linear-gradient(135deg, var(--primary-color, #10b981), var(--secondary-color, #047857));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .gallery-intro {
        font-size: 1.25rem;
        line-height: 1.8;
        color: var(--text-color, #334155);
        max-width: 700px;
        margin: 0 auto;
    }

    /* Tabs */
    .tab-container {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 4rem;
    }

    .tab-btn {
        padding: 1rem 2.5rem;
        font-size: 1.2rem;
        font-weight: 600;
        border: none;
        border-radius: 3rem;
        cursor: pointer;
        background: #f1f5f9;
        color: #475569;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }

    .tab-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        background: #e2e8f0;
    }

    .tab-btn.active {
        background: linear-gradient(135deg, var(--primary-color, #10b981), var(--secondary-color, #047857));
        color: white;
        box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
    }

    /* Grid */
    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 3rem;
        width: 100%;
    }

    .project-card {
        background: white;
        border-radius: 1.5rem;
        overflow: hidden;
        box-shadow: 0 15px 35px rgba(0,0,0,0.04);
        border: 1px solid rgba(0,0,0,0.02);
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .project-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.08);
    }

    .project-visual {
        height: 220px;
        position: relative;
        background: #0f172a;
    }

    .visual-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        color: #334155;
    }

    .placeholder-icon {
        font-size: 4rem;
        margin-bottom: 0.5rem;
        opacity: 0.5;
    }

    .placeholder-text {
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 700;
        opacity: 0.5;
    }

    .status-badge {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        color: white;
        font-size: 0.75rem;
        font-weight: 700;
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .project-content {
        padding: 2.5rem 2rem;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .proj-title {
        font-size: 1.5rem;
        margin: 0 0 1rem 0;
        color: #1e293b;
    }

    .proj-desc {
        color: #64748b;
        line-height: 1.6;
        margin: 0 0 1.5rem 0;
        flex: 1;
    }

    .tags-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 2rem;
    }

    .tag {
        background: #f1f5f9;
        color: #475569;
        font-size: 0.8rem;
        font-weight: 600;
        padding: 0.4rem 0.8rem;
        border-radius: 0.5rem;
    }

    .view-btn {
        display: inline-block;
        color: var(--primary-color);
        font-weight: 700;
        text-decoration: none;
        font-size: 1.1rem;
        transition: color 0.2s ease, transform 0.2s ease;
    }

    .project-card:hover .view-btn {
        transform: translateX(5px);
        color: var(--secondary-color);
    }

    .fade-in {
        animation: fadeIn 0.5s ease-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
        .gallery-page {
            padding: 2rem 1.5rem;
        }

        .main-title {
            font-size: 2.5rem;
        }

        .tab-btn {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
        }

        .projects-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
