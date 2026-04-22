<script>
  const clubEmail = "mangucodingclub@proton.me";
  const phone = "+254701342831";
</script>

<div class="sponsor-page" id="sponsor-page">
  
  <div class="intro-container">
    <h1 class="main-title">Partner With Us</h1>
    <p class="sponsor-intro">
      Support our club’s mission to empower students through engineering and programming! 
      Your sponsorship directly fuels our ability to organize events, build ambitious projects, and train the innovators of tomorrow.
    </p>
  </div>

  <h2 class="section-heading">Why Sponsor Mang'u Mechatronics?</h2>
  <div class="benefits-grid">
    <div class="benefit-card">
      <span class="benefit-icon">🏆</span>
      <h3>Hackathons & Workshops</h3>
      <p>Enable student-led competitions and intense learning workshops that push technological boundaries.</p>
    </div>
    
    <div class="benefit-card">
      <span class="benefit-icon">🌍</span>
      <h3>Community Outreach</h3>
      <p>Support club functions, exhibitions, and off-campus outreach programs to foster tech education.</p>
    </div>
    
    <div class="benefit-card">
      <span class="benefit-icon">⚙️</span>
      <h3>Resources & Tools</h3>
      <p>Help us acquire the microcontrollers, 3D printing filaments, and cloud servers we need to innovate.</p>
    </div>
    
    <div class="benefit-card">
      <span class="benefit-icon">🤝</span>
      <h3>Brand Recognition</h3>
      <p>Get recognized as a valued partner across our community, digital platforms, and physical events.</p>
    </div>
  </div>

  <div class="cta-section">
    <h2>Ready to make an impact?</h2>
    <p>We are actively looking for companies and individuals willing to invest in the next generation. Reach out to discuss partnership modules.</p>
    <div class="contact-actions">
      <a href="mailto:{clubEmail}" class="action-btn email">
        📧 Email Club
      </a>
      <a href="tel:{phone}" class="action-btn phone">
        📞 Call Club
      </a>
    </div>
  </div>

</div>

<style>
  .sponsor-page {
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

  .sponsor-intro {
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--text-color, #334155);
    max-width: 700px;
    margin: 0 auto;
  }

  .section-heading {
    font-size: 2.2rem;
    margin-bottom: 3rem;
    color: #1e293b;
    text-align: center;
    width: 100%;
  }

  /* Benefits Grid */
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    width: 100%;
    margin-bottom: 6rem;
  }

  .benefit-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 1.5rem;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.02);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .benefit-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  }

  .benefit-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 1.5rem;
  }

  .benefit-card h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  .benefit-card p {
    color: #64748b;
    line-height: 1.6;
    margin: 0;
  }

  /* CTA Section */
  .cta-section {
    width: 100%;
    max-width: 800px;
    text-align: center;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: white;
    padding: 4rem 2rem;
    border-radius: 1.5rem;
    box-shadow: 0 20px 40px rgba(16, 185, 129, 0.2);
  }

  .cta-section h2 {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  .cta-section p {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    opacity: 0.9;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .contact-actions {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem 2rem;
    border-radius: 3rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    background: white;
  }

  .action-btn.email {
    color: var(--secondary-color);
  }

  .action-btn.phone {
    color: #0f172a;
    background: rgba(255, 255, 255, 0.9);
  }

  .action-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    background: white;
  }

  @media (max-width: 768px) {
    .sponsor-page {
      padding: 2rem 1.5rem;
    }

    .main-title {
      font-size: 2.5rem;
    }

    .benefits-grid {
      grid-template-columns: 1fr;
    }

    .contact-actions {
      flex-direction: column;
    }
  }
</style>