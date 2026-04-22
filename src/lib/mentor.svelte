<script>
  import anonymus from '../assets/founders/anonymus.png';

  let chair = {
    name: "Ken Karoki",
    role: "Chairperson / Co-founder",
    image: anonymus, // Using the anonymus asset we used in history
    email: "kenkaroki92@gmail.com"
  };

  let patron = {
    name: "Mr. Simon Wekesa",
    role: "Patron",
    image: anonymus,
    contacts: {
      phone: "+254701342831",
      email: "mangucodingclub@proton.me",
      clubEmail: "mangucodingclub@proton.me"
    }
  };

  let club = {
    name: "Mang'u Mechatronics",
    role: "Official Inbox",
    image: anonymus,
    email: "mangucodingclub@proton.me"
  };
</script>

<div class="mentor-page" id="mentor-page">
  
  <div class="intro-container">
    <h1 class="main-title">Become a Mentor</h1>
    <p class="mentor-intro">
      Are you passionate about technology and shaping the next generation of engineers? 
      As a mentor at the Mang'u Mechatronics Club, you will guide, support, and inspire 
      young minds in their coding and hardware journey.
    </p>
  </div>

  <div class="requirements-section">
    <div class="requirement-card">
      <span class="req-icon">💡</span>
      <h3>Knowledge Sharing</h3>
      <p>Help students debug, architect solutions, and approach problems with an engineering mindset.</p>
    </div>
    <div class="requirement-card">
      <span class="req-icon">⏱️</span>
      <h3>Commitment</h3>
      <p>Regularly attend club meetings, workshops, or hackathons either virtually or in-person.</p>
    </div>
    <div class="requirement-card">
      <span class="req-icon">🚀</span>
      <h3>Inspire</h3>
      <p>Show students what is possible in the real world of technology and software development.</p>
    </div>
  </div>

  <h2 class="section-heading">Key Contacts</h2>
  <div class="contacts-grid">
    <!-- Patron Card -->
    <div class="contact-card">
      <div class="card-header"></div>
      <img src={patron.image} alt={patron.name} class="contact-image" />
      <div class="contact-info">
        <h3>{patron.name}</h3>
        <span class="role-badge">{patron.role}</span>
        <div class="contact-actions">
          <a href="mailto:{patron.contacts.email}" class="action-btn email">
            📧 Email Patron
          </a>
          <a href="tel:{patron.contacts.phone}" class="action-btn phone">
            📞 Call Patron
          </a>
        </div>
      </div>
    </div>

    <!-- Chair Card -->
    <div class="contact-card">
      <div class="card-header alternate"></div>
      <img src={chair.image} alt={chair.name} class="contact-image" />
      <div class="contact-info">
        <h3>{chair.name}</h3>
        <span class="role-badge">{chair.role}</span>
        <div class="contact-actions">
          <a href="mailto:{chair.email}" class="action-btn email">
            📧 Email Chairman
          </a>
        </div>
      </div>
    </div>

    <!-- Official Club Card -->
    <div class="contact-card">
      <div class="card-header"></div>
      <img src={club.image} alt={club.name} class="contact-image" />
      <div class="contact-info">
        <h3>{club.name}</h3>
        <span class="role-badge">{club.role}</span>
        <div class="contact-actions">
          <a href="mailto:{club.email}" class="action-btn email" style="background: rgba(16, 185, 129, 0.1); color: var(--secondary-color);">
            📬 Email Club Inbox
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="cta-section">
    <h2>Ready to make an impact?</h2>
    <p>Reach out to the club's official email address to begin your mentorship application process.</p>
    <a href="mailto:{patron.contacts.clubEmail}" class="btn primary">Apply via Email</a>
  </div>

</div>

<style>
  .mentor-page {
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

  .mentor-intro {
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--text-color, #334155);
    max-width: 700px;
    margin: 0 auto;
  }

  /* Requirements Grid */
  .requirements-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    width: 100%;
    margin-bottom: 5rem;
  }

  .requirement-card {
    background: white;
    padding: 2.5rem 2rem;
    border-radius: 1.5rem;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0,0,0,0.04);
    border: 1px solid rgba(0,0,0,0.02);
    transition: transform 0.3s ease;
  }

  .requirement-card:hover {
    transform: translateY(-5px);
  }

  .req-icon {
    font-size: 3rem;
    display: block;
    margin-bottom: 1.5rem;
  }

  .requirement-card h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  .requirement-card p {
    color: #64748b;
    line-height: 1.6;
    margin: 0;
  }

  /* Contacts Grid */
  .section-heading {
    font-size: 2.2rem;
    margin-bottom: 3rem;
    color: #1e293b;
    text-align: center;
    width: 100%;
  }

  .contacts-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    width: 100%;
    margin-bottom: 5rem;
  }

  .contact-card {
    width: 100%;
    max-width: 380px;
    background: white;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0,0,0,0.05);
    position: relative;
    padding-bottom: 2rem;
    transition: transform 0.3s ease;
  }

  .contact-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(0,0,0,0.08);
  }

  .card-header {
    height: 120px;
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  }

  .card-header.alternate {
    background: linear-gradient(135deg, var(--accent-hover) 0%, var(--accent-color) 100%);
  }

  .contact-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid white;
    margin: -60px auto 1rem;
    display: block;
    background: #f1f5f9;
  }

  .contact-info {
    text-align: center;
    padding: 0 2rem;
  }

  .contact-info h3 {
    font-size: 1.6rem;
    margin: 0 0 0.5rem;
    color: #1e293b;
  }

  .role-badge {
    display: inline-block;
    padding: 0.3rem 1rem;
    background: #f1f5f9;
    color: #64748b;
    border-radius: 2rem;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  .contact-actions {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem;
    border-radius: 0.8rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.2s ease;
  }

  .action-btn.email {
    background: rgba(16, 185, 129, 0.1);
    color: var(--secondary-color);
  }

  .action-btn.phone {
    background: rgba(59, 130, 246, 0.1);
    color: #2563eb;
  }

  .action-btn:hover {
    filter: brightness(0.95);
    transform: translateY(-2px);
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
  }

  .btn.primary {
    background: white;
    color: var(--secondary-color);
    padding: 1.2rem 2.5rem;
    border-radius: 3rem;
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    display: inline-block;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .btn.primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    .mentor-page {
      padding: 2rem 1.5rem;
    }

    .main-title {
      font-size: 2.5rem;
    }

    .contacts-grid {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
