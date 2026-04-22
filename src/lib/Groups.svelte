<script lang="ts">
    // software group images
    import SoftwareImage from '../assets/clubs_images/software.jpg';
    import HackingImage from '../assets/clubs_images/hacking.jpg';
    import EmbeddedImage from '../assets/clubs_images/embededPrograming.jpg';
    import GameDevImage from '../assets/clubs_images/gamedev.jpg';

    // Robotics group images
    import DesignImage from '../assets/clubs_images/design.jpg';
    import MechanicsImage from '../assets/clubs_images/mechanics.jpg';
    import ElectronicsImage from '../assets/clubs_images/electronics.jpg';

    
    
    

    let activeTab: 'software' | 'robotics' = 'software';

    const softwareGroups = [
        {
            name: 'Software Engineering',
            icon: '💻',
            description: 'From next-generation databases to the future of user experience. We craft applications, build large language models, and turn imagination into reality.',
            image: SoftwareImage
        },
        {
            name: 'Embedded Programming',
            icon: '🤖',
            description: 'We bring intelligence to hardware. From microcontrollers to IoT solutions, we build smart devices that interact with the physical world.',
            image: EmbeddedImage
        },
        {
            name: 'Ethical Hacking & Cyber Security',
            icon: '👨🏼‍💻',
            description: 'The guardians of the digital realm. From penetration testing to ethical hacking, we learn how to break systems to make them stronger.',
            image: HackingImage
        },
        {
            name: 'Game Development',
            icon: '🎮',
            description: 'Imagination becomes reality. From stunning 2D worlds to immersive 3D adventures, we create interactive experiences powered by cutting-edge engines.',
            image: GameDevImage
        }
    ];

    const roboticsGroups = [
        {
            name: 'Mechanics',
            icon: '⚙️',
            description: 'We design the physical chassis, moving parts, and structural integrity of advanced robots. Turning ideas into sturdy, functional machines.',
            image: MechanicsImage
        },
        {
            name: 'Electronics',
            icon: '⚡',
            description: 'The nervous system of robotics. We design circuits, manage power distribution, and wire the sensors that allow robots to perceive their environment.',
            image: ElectronicsImage
        },
        {
            name: 'Design',
            icon: '📐',
            description: 'Drafting perfection. We use CAD software to model components for 3D printing and manufacturing, ensuring everything fits flawlessly.',
            image: DesignImage
        }
    ];

</script>

<section class="groups-section">
    <div class="intro-container">
        <h2 class="main-title">How We Work</h2>
        <p class="groups-intro">
            The way Mechatronics club approaches learning is simple and efficient. We break into groups, each dealing with its own unique aspect.<br/><br/>
            We have two main branches: <strong>Software</strong> and <strong>Robotics</strong>, each featuring specialized sub-groups.
        </p>
    </div>

    <!-- Tab Navigation -->
    <div class="tab-container">
        <button 
            class="tab-btn {activeTab === 'software' ? 'active' : ''}" 
            on:click={() => activeTab = 'software'}>
            Software Branch
        </button>
        <button 
            class="tab-btn {activeTab === 'robotics' ? 'active' : ''}" 
            on:click={() => activeTab = 'robotics'}>
            Robotics Branch
        </button>
    </div>

    <!-- Groups Grid -->
    <div class="groups-grid">
        {#each activeTab === 'software' ? softwareGroups : roboticsGroups as group}
            <div class="group-card">
                <div class="card-image-wrapper">
                    <img src={group.image} alt="{group.name} Photo" class="card-image" />
                    <div class="card-overlay"></div>
                </div>
                <div class="card-content">
                    <h3 class="group-name">{group.name} <span class="group-icon">{group.icon}</span></h3>
                    <p class="group-description">{group.description}</p>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .groups-section {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 6rem;
        padding: 0 2rem;
        font-family: inherit;
    }

    .intro-container {
        text-align: center;
        margin-bottom: 4rem;
        padding: 3rem;
        background: var(--card-background, #f8fafc);
        border-radius: 1.5rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    }

    .main-title {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        background: linear-gradient(135deg, var(--primary-color, #10b981), var(--secondary-color, #047857));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .groups-intro {
        font-size: 1.25rem;
        line-height: 1.8;
        color: var(--text-color, #334155);
        max-width: 800px;
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
        background: var(--card-background, #f1f5f9);
        color: var(--text-color, #475569);
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
    .groups-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2.5rem;
        animation: fadeIn 0.5s ease-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    .group-card {
        background: white;
        border-radius: 1.5rem;
        overflow: hidden;
        box-shadow: 0 15px 35px rgba(0,0,0,0.05);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 1px solid rgba(0,0,0,0.05);
        display: flex;
        flex-direction: column;
    }

    .group-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 25px 50px rgba(0,0,0,0.1);
        border-color: var(--primary-color, #10b981);
    }

    .card-image-wrapper {
        position: relative;
        height: 250px;
        overflow: hidden;
    }

    .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .group-card:hover .card-image {
        transform: scale(1.05);
    }

    .card-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50%;
        background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
    }

    .card-content {
        padding: 2rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .group-name {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0 0 1rem 0;
        color: var(--text-color, #1e293b);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .group-icon {
        font-size: 1.8rem;
    }

    .group-description {
        font-size: 1rem;
        line-height: 1.6;
        color: #64748b;
        margin: 0;
    }

    @media (max-width: 768px) {
        .intro-container {
            padding: 2rem 1.5rem;
        }

        .main-title {
            font-size: 2.2rem;
        }

        .tab-btn {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
        }

        .groups-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
