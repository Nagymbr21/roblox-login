document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('loginForm');
  const user=document.getElementById('user');
  const pass=document.getElementById('pass');
  const msg=document.getElementById('formMessage');

  const topSearch = document.getElementById('topSearch');
  const topSearchForm = document.querySelector('.search');
  if(topSearchForm){
    topSearchForm.addEventListener('submit', (ev)=>{
      ev.preventDefault();
      const q = topSearch.value.trim();
      if(!q) return;
      msg.style.color = 'var(--muted)';
      msg.textContent = `Search for "${q}" (demo)`;
      setTimeout(()=> msg.textContent='',1400);
    });
  }

  form.addEventListener('submit',e=>{
    e.preventDefault();
    msg.textContent='';
    if(!user.value.trim()||!pass.value.trim()){
      msg.textContent='Please enter username and password.';
      return;
    }

    // Simulate network/login
    const btn=document.getElementById('submitBtn');
    btn.disabled=true;btn.textContent='Signing in...';
    setTimeout(()=>{
      btn.disabled=false;btn.textContent='Sign In';
      msg.style.color='green';
      msg.textContent='Signed in successfully (demo). Redirecting...';
      setTimeout(()=>{ msg.textContent=''; },1200);
    },1100);
  });
  
  // small focus ripple for inputs
  document.querySelectorAll('input').forEach(i=>{
    i.addEventListener('focus',()=> i.classList.add('focused'))
    i.addEventListener('blur',()=> i.classList.remove('focused'))
  })
});
