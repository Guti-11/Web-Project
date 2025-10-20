  const formSU = document.getElementById('signupForm');
  const emailSU = document.getElementById('emailSignup');
  const pw1 = document.getElementById('passwordSignup');
  const pw2 = document.getElementById('passwordConfirm');
  const toggle1 = document.getElementById('togglePw1');
  const toggle2 = document.getElementById('togglePw2');
  const bar = document.getElementById('pwStrengthBar');
  const strengthText = document.getElementById('pwStrengthText');
  const matchText = document.getElementById('pwMatchText');
  const toastSU = document.getElementById('signupToast');

  // Show/Hide
  const toggleType = (input, btn) => {
    const isPw = input.type === 'password';
    input.type = isPw ? 'text' : 'password';
    btn.textContent = isPw ? 'Hide' : 'Show';
  };
  toggle1.addEventListener('click', () => toggleType(pw1, toggle1));
  toggle2.addEventListener('click', () => toggleType(pw2, toggle2));

  // Simple strength meter
  const strength = (val) => {
    let s = 0;
    if (val.length >= 8) s++;
    if (/[A-Z]/.test(val)) s++;
    if (/[a-z]/.test(val)) s++;
    if (/[0-9]/.test(val)) s++;
    if (/[^A-Za-z0-9]/.test(val)) s++;
    return Math.min(s, 4); // 0..4
  };

  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong', 'Strong'];
  const widthMap = ['10%', '35%', '65%', '85%', '100%'];
  const colorClass = (s) => (s < 2 ? 'bg-red-600' : s < 3 ? 'bg-orange-500' : 'bg-green-600');

  pw1.addEventListener('input', () => {
    const s = strength(pw1.value);
    bar.style.width = widthMap[s];
    bar.className = 'h-full rounded-full transition-all ' + colorClass(s);
    strengthText.textContent = 'Strength: ' + strengthLabels[s];
    checkMatch();
  });

  // Match check
  const checkMatch = () => {
    if (!pw2.value) { matchText.textContent = ''; matchText.className = 'mt-1 text-xs font-medium'; return; }
    if (pw1.value === pw2.value) {
      matchText.textContent = 'Passwords match';
      matchText.className = 'mt-1 text-xs font-medium text-green-500';
    } else {
      matchText.textContent = 'Passwords do not match';
      matchText.className = 'mt-1 text-xs font-medium text-red-500';
    }
  };
  pw2.addEventListener('input', checkMatch);

  // Basic email format check
  const validEmail = (e) => /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(e);

  // Submit (SPA demo)
  formSU.addEventListener('submit', async (e) => {
    e.preventDefault();

    // front-end validation
    if (!validEmail(emailSU.value)) {
      emailSU.focus();
      emailSU.classList.add('ring-2','ring-purple-600/30');
      setTimeout(() => emailSU.classList.remove('ring-2','ring-purple-600/30'), 1000);
      return;
    }
    if (pw1.value.length < 8) { pw1.focus(); return; }
    if (pw1.value !== pw2.value) { pw2.focus(); return; }
    if (!document.getElementById('terms').checked) { document.getElementById('terms').focus(); return; }

    const btn = formSU.querySelector('button[type=\"submit\"]');
    const prev = btn.textContent;
    btn.textContent = 'Creating…';
    btn.disabled = true;

    // Simulate async sign-up
    await new Promise(r => setTimeout(r, 1000));

    btn.textContent = prev;
    btn.disabled = false;

    // Show toast
    toastSU.classList.remove('hidden');
    setTimeout(() => toastSU.classList.add('hidden'), 1600);
  });