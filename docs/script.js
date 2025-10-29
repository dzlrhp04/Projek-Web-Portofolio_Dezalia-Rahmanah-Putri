// Basic interactions for nav, year, and form validation
document.addEventListener('DOMContentLoaded', function(){
  // set years in footers
  const y = new Date().getFullYear();
  ['year','year2','year3'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  // mobile nav toggles
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn=>{
    btn.addEventListener('click', () => {
      const header = btn.closest('.site-header');
      const nav = header.querySelector('.nav');
      nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    });
  });

  // highlight active nav link based on url
  const path = location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(a=>{
    if(a.getAttribute('href') === path || (path === '' && a.getAttribute('href') === 'index.html')){
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });

  // contact form behaviour
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const valid = form.checkValidity();
      const msg = document.getElementById('formMessage');
      if(!valid){
        msg.textContent = 'Mohon lengkapi form yang wajib.';
        msg.style.color = '#ffb4c8';
        return;
      }

      // collect form data (for demo: we'll just show success, not send)
      const data = new FormData(form);
      const obj = {};
      data.forEach((v,k)=> obj[k]=v);

      // for real project, integrate with backend or use formhandler, email API, or mailto fallback
      msg.textContent = 'Terima kasih! Pesanmu sudah terkirim (simulasi).';
      msg.style.color = '#b4ffd8';
      form.reset();

      // optional: console log
      console.log('Form submitted (simulated):', obj);
    });
  }

  // small enhancement: smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
