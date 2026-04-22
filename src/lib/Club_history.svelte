<script lang="ts">
    import anonymus from '../assets/founders/anonymus.png';
    let activeEra: 'coding' | 'robotics' | 'merger' = 'merger';
</script>

<section class="history-section">
    <div id="club_history_intro" class="club_history_intro">
        <h2 class="main-title">Our Evolution</h2>
        <p class="intro_speech">
            The Mechatronics Club was not built in a day. It is the result of parallel passions colliding.<br />
            Explore the storied past of our foundational roots and see how two powerful clubs merged to form an unstoppable alliance.
        </p>
    </div>

    <!-- Navigation Tabs -->
    <div class="era-tabs">
        <button 
            class="tab-btn {activeEra === 'merger' ? 'active' : ''}" 
            on:click={() => activeEra = 'merger'}>
            The Mechatronics Merger
        </button>
        <button 
            class="tab-btn {activeEra === 'coding' ? 'active' : ''}" 
            on:click={() => activeEra = 'coding'}>
            The Coding Club
        </button>
        <button 
            class="tab-btn {activeEra === 'robotics' ? 'active' : ''}" 
            on:click={() => activeEra = 'robotics'}>
            The Robotics Club
        </button>
    </div>

    <!-- Era: Coding Club -->
    {#if activeEra === 'coding'}
    <div class="era-content fade-in">
        <div class="era-description">
            <h3>Mang'u Coding Club (Est. 2024)</h3>
            <p>Formed in the year 2024 by three passionate developers who wanted to give back to the community. They underwent multiple challenges but eventually succeeded in officializing the club. Later, it found a capable patron who could carry the club to greater heights. Mr. Waswa together with Collins Thayu, Alvin Ngondo, and Ken Karoki began the historic journey of the Coding Club.</p>
        </div>

        <!-- Collins Thayu -->
        <div class="speech-block right-align">
            <img class="co_founders_image" src="{anonymus}" alt="Collins Thayu - co-founder">
            <div class="speech-text">
                <h3 class="founder-name">Collins Thayu</h3>
                <p>
                    This isn’t just another club—it’s a movement. When we founded Mangu Coding Club, we envisioned a community where everyone—regardless of experience—could find a place to learn, grow, and lead.
                    <br><br>
                    Coding is not just about writing lines of code. It’s about solving problems, thinking critically, and shaping a better future. It’s about teamwork—because the best innovations don’t happen in isolation; they happen when passionate people come together.
                    <br><br>
                    So, I challenge each one of you: collaborate, ask questions, share your knowledge. This is your platform to innovate, to fail without fear, and to turn ideas into impact. Let’s make Mangu Coding Club the home of tomorrow’s tech leaders. The journey starts now!
                </p>
            </div>
        </div>

        <!-- Ken Karoki -->
        <div class="speech-block left-align">
            <div class="speech-text">
                <h3 class="founder-name">Ken Karoki</h3>
                <p>
                    It’s amazing to see so many bright minds gathered here today. When we started Mangu Coding Club, our dream was simple: to create a space where curiosity meets innovation, where ideas are not just discussed—but built.
                    <br><br>
                    Today, technology is moving faster than ever. From artificial intelligence to blockchain, from cybersecurity to game development, the possibilities are endless. But here’s the truth—opportunities don’t just come; they’re created by those who dare to build.
                    <br><br>
                    Our mission is to be those creators. To learn, to experiment, to fail fast, and to rise even stronger. Whether you’re passionate about coding, security, AI, or building the next big app, this is your home. Together, we’ll push boundaries and show the world what the Mangu spirit of excellence truly means.
                </p>
            </div>
            <img class="co_founders_image" src="{anonymus}" alt="Ken Karoki - co-founder">
        </div>

        <!-- Alvin Ngondo -->
        <div class="speech-block right-align">
            <img class="co_founders_image" src="{anonymus}" alt="Alvin Ngondo - co-founder">
            <div class="speech-text">
                <h3 class="founder-name">Alvin Ngondo</h3>
                <p>
                    When we talk about technology, we often think about big companies—Google, Tesla, OpenAI—but guess what? Every one of those giants started with a small group of people, united by passion. That’s exactly what we have here.
                    <br><br>
                    Technology is not magic—it’s creativity, curiosity, and consistency. Here at Mangu Coding Club, we believe in building, not just consuming. Whether it’s AI, game development, cybersecurity, or embedded systems—we’re here to create, innovate, and challenge what’s possible.
                    <br><br>
                    So dream big. Code bigger. And remember: this is just the beginning. The next breakthrough could come from right here, from you. Let’s make history together!
                </p>
            </div>
        </div>

        <!-- Simon Wekesa -->
        <div class="speech-block left-align">
            <div class="speech-text">
                <h3 class="founder-name">Simon Wekesa <span class="badge">First Patron</span></h3>
                <p>
                    It is a true honor to say as the first patron of the Mangu Coding Club—a club that began as a spark of curiosity and has grown into a beacon of innovation in our school.
                    <br><br>
                    When this journey started, the vision was clear: to give students the tools, the confidence, and the mindset to thrive in the digital age. I have watched these young pioneers—Ken Karoki, Collins Thayu, and Alvin Ngondo—turn an idea into a movement, and I couldn’t be prouder.
                    <br><br>
                    In the early days, resources were few, challenges were many, and doubts were everywhere. But what set this club apart was its resilience. These students didn’t just talk about technology—they lived it. They stayed late, learned new languages, built projects, and most importantly, created a culture of collaboration and innovation.
                    <br><br>
                    To the new members here today, let me tell you this: the future is not something you wait for—it is something you create. Coding is more than writing code; it’s about problem-solving, creativity, and perseverance. Every great invention started with a student just like you, willing to take that first step.
                    <br><br>
                    Keep pushing boundaries. Ask questions. Take risks. And never underestimate the power of a single line of code—it can change the world.
                </p>
            </div>
            <img class="co_founders_image" src="{anonymus}" alt="Simon Wekesa - patron">
        </div>
    </div>
    {/if}

    <!-- Era: Robotics Club -->
    {#if activeEra === 'robotics'}
    <div class="era-content fade-in">
        <div class="era-description">
            <h3>Mang'u Robotics Club</h3>
            <p>Running in parallel to the software engineers, the hardware enthusiasts led by Trevor Njuru built their own legacy. Tinkering with circuits, soldering wires, and engineering physical mechanics, the Robotics Club paved the way for tangible innovation at Mang'u.</p>
        </div>

        <div class="speech-block right-align">
            <img class="co_founders_image" src="{anonymus}" alt="Trevor Njuru - Robotics Lead">
            <div class="speech-text">
                <h3 class="founder-name">Trevor Njuru</h3>
                <p>
                    Code is powerful, but until you give it a physical body, it remains trapped behind a screen. When I started leading the Robotics Club, my goal was simple: get our hands dirty. Real engineering isn’t just typing syntax; it's measuring voltages, calibrating servos, and turning a pile of metal and plastic into an autonomous machine.
                    <br><br>
                    We started small—blinking LEDs, simple motor drivers, RC cars. But the ambition was always bigger. We wanted to build systems that could perceive their environment and react to it. We wanted to bridge the gap between imagination and the physical world.
                    <br><br>
                    The late nights smelling burnt flux, the frustration of short-circuits, and the pure joy of watching a robotic arm move exactly as intended—those are the moments that defined our club. We proved that hardware is the foundation of the future.
                </p>
            </div>
        </div>
    </div>
    {/if}

    <!-- Era: Mechatronics Merger -->
    {#if activeEra === 'merger'}
    <div class="era-content fade-in">
        <div class="era-description">
            <h3>The Formation of Mechatronics</h3>
            <p>A realization soon struck the leaders of both clubs. Code without hardware lacks physical impact, and hardware without code lacks intelligence. Ken Karoki and Trevor Njuru orchestrated the merger of the decade, combining their clubs into the Mang'u Mechatronics Club—a powerhouse of total end-to-end engineering.</p>
        </div>

        <div class="speech-block right-align">
            <img class="co_founders_image" src="{anonymus}" alt="Ken Karoki - Mechatronics Co-Founder">
            <div class="speech-text">
                <h3 class="founder-name">Ken Karoki <span class="badge">Co-Founder, Mechatronics</span></h3>
                <p>
                    Software has incredible power, but it lives behind a screen. We realized at the Coding Club that we were building brilliant logic, but we lacked a way to interact with the physical world. 
                    <br><br>
                    Then, we saw what Trevor and his robotics team were executing. They were building the muscle, and we were building the brain. It became incredibly obvious that these two disciplines weren't meant to be separate. The future isn't just software, and it isn't just hardware—it's the seamless integration of both.
                    <br><br>
                    Merging into the Mechatronics Club transformed us from programmers into true inventors. Now, when we write code, it moves. It senses. It acts. This is the true culmination of Mang'u's spirit of excellence.
                </p>
            </div>
        </div>

        <div class="speech-block left-align">
            <div class="speech-text">
                <h3 class="founder-name">Trevor Njuru <span class="badge">Co-Founder, Mechatronics</span></h3>
                <p>
                    I remember the exact moment it clicked. My team had built an incredible rover chassis, but we were struggling to write an elegant, optimized algorithm for obstacle avoidance. Meanwhile, Ken’s team at the Coding Club had brilliant software architects, but they were running their algorithms in simulated, consequence-free environments. 
                    <br><br>
                    We realized we were two halves of the same brain. I sat down with Ken, and we laid out the vision. Why operate in silos? Why be just a software guy or just a hardware guy when the real world demands both? That’s how Mechatronics was born. 
                    <br><br>
                    By merging our operations, we didn’t just combine members—we created an entirely new discipline at Mang'u. Now, our software engineers write code that runs on the embedded systems designed by our electronics team, powering the chassis built by our mechanics team. We became unstoppable.
                </p>
            </div>
            <img class="co_founders_image" src="{anonymus}" alt="Trevor Njuru - Mechatronics Co-Founder">
        </div>
    </div>
    {/if}

</section>

<style>
    .history-section {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 6rem;
        padding: 0 2rem;
        font-family: inherit;
    }

    .club_history_intro {
        text-align: center;
        margin-bottom: 3rem;
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

    .intro_speech {
        font-size: 1.25rem;
        line-height: 1.8;
        color: var(--text-color, #334155);
        max-width: 800px;
        margin: 0 auto;
    }

    /* Tabs */
    .era-tabs {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
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

    /* Era Content */
    .era-description {
        text-align: center;
        margin-bottom: 4rem;
    }

    .era-description h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--text-color, #1e293b);
    }

    .era-description p {
        font-size: 1.15rem;
        line-height: 1.7;
        color: #64748b;
        max-width: 800px;
        margin: 0 auto;
    }

    .fade-in {
        animation: fadeIn 0.6s ease-out;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(15px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Speeches */
    .speech-block {
        display: flex;
        align-items: center;
        gap: 3rem;
        background: white;
        padding: 3rem;
        border-radius: 1.5rem;
        margin-bottom: 3rem;
        box-shadow: 0 15px 35px rgba(0,0,0,0.04);
        border: 1px solid rgba(0,0,0,0.03);
        transition: transform 0.3s ease;
    }

    .speech-block:hover {
        transform: translateY(-5px);
        border-color: rgba(16, 185, 129, 0.2);
    }

    .speech-text {
        flex: 1;
    }

    .founder-name {
        font-size: 1.8rem;
        font-weight: 700;
        margin-bottom: 1rem;
        color: var(--primary-color, #10b981);
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .badge {
        font-size: 0.8rem;
        padding: 0.3rem 0.8rem;
        background: var(--card-background, #f1f5f9);
        color: #64748b;
        border-radius: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .speech-text p {
        font-size: 1.1rem;
        line-height: 1.8;
        color: #475569;
        margin: 0;
    }

    .co_founders_image {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 1rem;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }

    @media (max-width: 968px) {
        .speech-block {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
            gap: 2rem;
        }

        .speech-block.left-align {
            flex-direction: column-reverse;
        }

        .co_founders_image {
            width: 200px;
            height: 200px;
        }

        .founder-name {
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .tab-btn {
            width: 100%;
            padding: 1rem;
        }
        
        .era-tabs {
            flex-direction: column;
        }
        
        .main-title {
            font-size: 2.2rem;
        }
    }
</style>
