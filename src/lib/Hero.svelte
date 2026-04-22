<script>
    // TODO: Add your robotic arm video here
    import roboticArmVideo from '../assets/animations/roboticarmanimation.mp4';
    
</script>

<section id="home" class="hero">
  <div class="container">
    <div class="hero-content">
      <h1>
        Welcome to<br />
        Mangu Mechatronics<br />
         Club
      </h1>
      <p class="hero-subtitle">
        Where passion meets engineering! <br />Join our community of developers,<br /> 
        builders, and innovators as <br />we explore the exciting <br />world of code and hardware together.
      </p>
      <div class="hero-buttons">
        <button class="btn secondary"><a href="#about">Learn More</a></button>
      </div>
    </div>
    <div class="hero-visual">
      <div class="video-block">
        {#if roboticArmVideo}
            <video 
                src={roboticArmVideo} 
                autoplay 
                loop 
                muted 
                playsinline>
            </video>
        {:else}
            <!-- Placeholder while video is missing -->
            <div class="video-placeholder">
                <span class="placeholder-icon">🦾</span>
                
            </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: white;
    padding: 6rem;
    min-height: 80vh;
    display: flex;
    align-items: center;
  }
  
  .container {
    max-width: 1350px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 4rem;
    align-items: center;
  }
  
  .hero-content h1 {
    font-size: 3.5rem;
    font-weight: bold;
    margin: 0 0 1.5rem 0;
    line-height: 1.2;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 0 0 2rem 0;
    opacity: 0.9;
  }
  
  .hero-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .btn {
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Fix anchor tag text visibility inside buttons */
  .btn a {
    color: inherit;
    text-decoration: none;
    display: block;
  }
  
  .btn.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }
  
  .btn.secondary:hover {
    background: white;
    color: var(--primary-color);
    transform: translateY(-2px);
  }
  
  .video-block {
    background: #1e1e1e;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #0f172a;
    border: 1px solid rgba(255,255,255,0.1);
  }
  
  .video-block video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .video-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #94a3b8;
    text-align: center;
  }

  .placeholder-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.7;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  @media (max-width: 768px) {
    .hero {
      padding: 4rem;
      overflow-x: hidden;
      width: 100%;
      
    }
    
    .container {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    
    .hero-content {
      text-align: center;
    }
    
    .hero-content h1 {
      font-size: 2.5rem;
    }
    
    .hero-subtitle {
      font-size: 1.1rem;
    }
    
    .video-block {
      max-width: 100%;
    }
  }
</style>
