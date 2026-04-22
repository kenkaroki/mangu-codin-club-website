<script lang="ts">
    const categories = [
        {
            title: "Software Engineering",
            icon: "💻",
            resources: [
                { name: "HTML", link: "https://www.youtube.com/watch?v=qz0aGYrrlhU&t=20s", type: "Course" },
                { name: "Python", link: "https://www.youtube.com/watch?v=_uQrJ0TkZlc", type: "Course" },
                // { name: "REST API Design Principles", link: "#", type: "Article" }
            ]
        },
        {
            title: "Embedded Systems",
            icon: "🤖",
            resources: [
                { name: "C++ for Beginners", link: "https://www.youtube.com/watch?v=ZzaPdXTrSb8&t=4810s", type: "Course" },
                { name: "Arduino For Beginers", link: "https://docs.arduino.cc/learn/starting-guide/getting-started-arduino/", type: "Document" },
                { name: "IoT Sensor Integration Guide", link: "#", type: "Repo" }
            ]
        },
        {
            title: "Cyber Security",
            icon: "🛡️",
            resources: [
                { name: "SQL Injections", link: "https://www.youtube.com/watch?v=2OPVViV-GQk", type: "Video" },
                { name: "Networking Fundamentals", link: "https://www.youtube.com/watch?v=qiQR5rTSshw", type: "Course" },
                
            ]
        },
        {
            title: "Mechatronics Design",
            icon: "📐",
            resources: [
                
                { name: "Physical Chassis Structuring", link: "https://www.societyofrobots.com/mechanics_chassisconstruction.shtml", type: "Article" }
            ]
        }
    ];

    function getTypeColor(type: string) {
        switch(type) {
            case 'Video': return 'var(--primary-color)';
            case 'Document': return '#ef4444';
            case 'Course': return '#3b82f6';
            case 'Repo': return '#1e293b';
            case 'Article': return '#f59e0b';
            default: return 'var(--secondary-color)';
        }
    }
</script>

<div class="learning-page" id="learning">
    
    <div class="intro-container">
        <h1 class="main-title">Learning Materials</h1>
        <p class="learning-intro">
            Continuous learning is the backbone of the Mang'u Mechatronics Club. Dive into our curated collection of roadmaps, tutorials, code repositories, and deep-dives tailored specifically for our members.
        </p>
    </div>

    <div class="categories-grid">
        {#each categories as category}
            <div class="category-card">
                <div class="card-header">
                    <span class="cat-icon">{category.icon}</span>
                    <h2 class="cat-title">{category.title}</h2>
                </div>
                
                <div class="resources-list">
                    {#each category.resources as resource}
                        <a href={resource.link} class="resource-item">
                            <div class="res-info">
                                <span class="res-type" style="background: {getTypeColor(resource.type)};">{resource.type}</span>
                                <span class="res-name">{resource.name}</span>
                            </div>
                            <span class="arrow">→</span>
                        </a>
                    {/each}
                </div>
            </div>
        {/each}
    </div>

</div>

<style>
    .learning-page {
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
        margin-bottom: 5rem;
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

    .learning-intro {
        font-size: 1.25rem;
        line-height: 1.8;
        color: var(--text-color, #334155);
        max-width: 700px;
        margin: 0 auto;
    }

    .categories-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 3rem;
        width: 100%;
    }

    .category-card {
        background: white;
        border-radius: 1.5rem;
        overflow: hidden;
        box-shadow: 0 15px 35px rgba(0,0,0,0.04);
        border: 1px solid rgba(0,0,0,0.02);
        display: flex;
        flex-direction: column;
        transition: transform 0.3s ease;
    }

    .category-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.08);
    }

    .card-header {
        background: #f8fafc;
        padding: 2rem;
        border-bottom: 1px solid #e2e8f0;
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .cat-icon {
        font-size: 2.5rem;
    }

    .cat-title {
        margin: 0;
        font-size: 1.5rem;
        color: #0f172a;
    }

    .resources-list {
        padding: 1rem 0;
        display: flex;
        flex-direction: column;
    }

    .resource-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.2rem 2rem;
        text-decoration: none;
        border-bottom: 1px solid #f1f5f9;
        transition: background 0.2s ease;
    }

    .resource-item:last-child {
        border-bottom: none;
    }

    .resource-item:hover {
        background: #f8fafc;
    }

    .resource-item:hover .arrow {
        transform: translateX(5px);
        color: var(--primary-color);
    }

    .res-info {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .res-type {
        color: white;
        font-size: 0.75rem;
        font-weight: 700;
        padding: 0.3rem 0.8rem;
        border-radius: 2rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        min-width: 70px;
        text-align: center;
    }

    .res-name {
        font-size: 1.1rem;
        font-weight: 500;
        color: #334155;
    }

    .arrow {
        font-size: 1.5rem;
        color: #cbd5e1;
        transition: transform 0.2s ease, color 0.2s ease;
    }

    @media (max-width: 768px) {
        .learning-page {
            padding: 2rem 1.5rem;
        }

        .main-title {
            font-size: 2.5rem;
        }

        .categories-grid {
            grid-template-columns: 1fr;
        }

        .res-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
    }
</style>
