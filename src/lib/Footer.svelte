<footer id="contact" class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <div class="logo">
          <h3>🥭 Mangu Coding Club</h3>
          <p>Empowering developers, building the future.</p>
        </div>
        <div class="social-links">
          <!-- <a href="#" class="social-link">
            <span class="social-icon">💬</span>
            Discord
          </a> -->
          <a href="mailto:mangucodingclub@proton.me" class="social-link">
            <span class="social-icon">📧</span>
            Email
          </a>
          <a href="https://github.com/mangu-codes-club" class="social-link">
            <span class="social-icon">🐙</span>
            GitHub
          </a>
          <a href="#" class="social-link">
            <span class="social-icon">📸</span>
            Instagram
          </a>
        </div>
      </div>
      
      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><a href="#home" on:click|preventDefault={() => handleNavigate('home', '#home')}>Home</a></li>
          <li><a href="#about" on:click|preventDefault={() => handleNavigate('home', '#about')}>About Us</a></li>
          <li><a href="#events" on:click|preventDefault={() => handleNavigate('home', '#events')}>Events</a></li>
          <li><a href="#contact" on:click|preventDefault={() => handleNavigate('home', '#contact')}>Contact</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Resources</h4>
        <ul class="footer-links">
          <li><a href="#" on:click|preventDefault={() => handleNavigate('learning')}>Learning Materials</a></li>
          <li><a href="#" on:click|preventDefault={() => handleNavigate('gallery')}>Project Gallery</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Get Involved</h4>
        <ul class="footer-links">
          <li><a href="#" on:click|preventDefault={() => handleNavigate('mentor')}>Become a Mentor</a></li>
          <li><a href="#" on:click|preventDefault={() => handleNavigate('sponsor')}>Sponsor Us</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>Contact Info</h4>
        <div class="contact-info">
          <div class="contact-item">
            <span class="icon">📍</span>
            <span>Mangu High School</span>
          </div>
          <div class="contact-item">
            <span class="icon">📧</span>
            <span>mangucodingclub@proton.me</span>
          </div>
          <div class="contact-item">
            <span class="icon">📞</span>
            <span>+254701342831</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>&copy; {new Date().getFullYear()} Coding Club. All rights reserved. Made with 💜 by our amazing community.</p>
        <div class="footer-bottom-links">
          <!-- <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a> -->
        </div>
      </div>
    </div>
  </div>
  

  <p></p>
</footer>

<style>
  .footer {
    background: #1a1a1a;
    color: white;
    padding: 4rem 0 0 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
    gap: 3rem;
    margin-bottom: 3rem;
  }
  
  .footer-section h3 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
  
  .footer-section h4 {
    margin: 0 0 1.5rem 0;
    font-size: 1.2rem;
    color: var(--primary-color);
  }
  
  .footer-section p {
    color: #ccc;
    line-height: 1.6;
    margin: 0 0 2rem 0;
  }
  
  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    text-decoration: none;
    background: #333;
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
  }
  
  .social-link:hover {
    background: var(--primary-color);
    transform: translateY(-2px);
  }
  
  .social-icon {
    font-size: 1.2rem;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-links li {
    margin-bottom: 0.8rem;
  }
  
  .footer-links a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: var(--primary-color);
  }
  
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    color: #ccc;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .contact-item .icon {
    font-size: 1rem;
    margin-top: 0.1rem;
  }
  
  .footer-bottom {
    border-top: 1px solid #333;
    padding: 2rem 0;
  }
  
  .footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .footer-bottom p {
    margin: 0;
    color: #888;
    font-size: 0.9rem;
  }
  
  .footer-bottom-links {
    display: flex;
    gap: 2rem;
  }
  
  .footer-bottom-links a {
    color: #888;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
  }
  
  .footer-bottom-links a:hover {
    color: var(--primary-color);
  }
  
  nav {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
  
  nav a {
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 500;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 1024px) {
    .footer-content {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
    }
    
    .footer-section:first-child {
      grid-column: 1 / -1;
    }
  }
  
  @media (max-width: 768px) {
    .footer {
      padding: 3rem 0 0 0;
    }
    
    .footer-content {
      grid-template-columns: 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .social-links {
      justify-content: center;
    }
    
    .footer-bottom-content {
      flex-direction: column;
      text-align: center;
      gap: 1rem;
    }
    
    .footer-bottom-links {
      gap: 1rem;
    }
  }
</style>

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function handleNavigate(page: string, hash: string = '') {
    dispatch('navigate', page);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
</script>
