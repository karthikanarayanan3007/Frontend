const STORAGE_KEY = 'diwali-day-journal-v1';

const starterState = {
  profileName: '',
  about: '',
  profilePhoto: '',
  routine: [
    { id: 'r1', time: '08:00', title: 'A gentle start to the day', note: 'Freshen up, open the windows, and let the festive feeling in.', done: false },
    { id: 'r2', time: '10:30', title: 'Bring a little colour home', note: 'Arrange flowers, tidy the entry, and make a rangoli.', done: false },
    { id: 'r3', time: '13:00', title: 'Prepare something sweet', note: 'Set out your favourite treats to share with everyone.', done: false },
    { id: 'r4', time: '18:00', title: 'Light the diyas', note: 'Take a quiet moment for prayer, gratitude, and warmth.', done: false },
    { id: 'r5', time: '20:00', title: 'End the day together', note: 'Share stories, sweets, and wishes with the people you love.', done: false }
  ],
  sweets: [
    { id: 's1', name: 'Ladoo', photo: '' },
    { id: 's2', name: 'Kaju katli', photo: '' },
    { id: 's3', name: 'My favourite', photo: '' }
  ]
};

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!stored || typeof stored !== 'object') return structuredClone(starterState);
    return {
      ...structuredClone(starterState),
      ...stored,
      routine: Array.isArray(stored.routine) ? stored.routine : structuredClone(starterState.routine),
      sweets: Array.isArray(stored.sweets) ? stored.sweets : structuredClone(starterState.sweets)
    };
  } catch {
    return structuredClone(starterState);
  }
}

let state = loadState();
let toastTimer;
const routineList = document.querySelector('#routine-list');
const sweetGrid = document.querySelector('#sweet-grid');
const toast = document.querySelector('#toast');
const saveNote = document.querySelector('#save-note');

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    if (saveNote) saveNote.textContent = 'Your changes stay saved on this device.';
  } catch {
    if (saveNote) saveNote.textContent = 'This photo is too large to save. Try a smaller image.';
    showToast('Could not save — try a smaller image.');
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2600);
}

function formatTime(value) {
  if (!value) return '';
  const [hours, minutes] = value.split(':').map(Number);
  const suffix = hours >= 12 ? 'PM' : 'AM';
  const hour = hours % 12 || 12;
  return `${hour}:${String(minutes).padStart(2, '0')} ${suffix}`;
}

function renderRoutine() {
  const sorted = [...state.routine].sort((a, b) => (a.time || '').localeCompare(b.time || ''));
  routineList.innerHTML = sorted.map(item => `
    <article class="routine-card${item.done ? ' is-done' : ''}" data-id="${escapeHTML(item.id)}">
      <div class="time-column">
        <span class="time-dot" aria-hidden="true"></span>
        <label class="visually-hidden" for="time-${escapeHTML(item.id)}">Time for ${escapeHTML(item.title)}</label>
        <input class="time-input" id="time-${escapeHTML(item.id)}" type="time" value="${escapeHTML(item.time)}" aria-label="Time for ${escapeHTML(item.title)}" />
      </div>
      <div class="activity-copy">
        <label class="visually-hidden" for="title-${escapeHTML(item.id)}">Activity</label>
        <input class="activity-title" id="title-${escapeHTML(item.id)}" type="text" maxlength="80" value="${escapeHTML(item.title)}" aria-label="Edit activity" />
        <label class="visually-hidden" for="note-${escapeHTML(item.id)}">Activity note</label>
        <textarea class="activity-note" id="note-${escapeHTML(item.id)}" rows="1" maxlength="180" aria-label="Edit activity note">${escapeHTML(item.note)}</textarea>
      </div>
      <button class="done-button" type="button" data-action="done" aria-pressed="${Boolean(item.done)}" aria-label="Mark ${escapeHTML(item.title)} ${item.done ? 'not done' : 'done'}">${item.done ? '✓' : '○'}</button>
      <button class="remove-activity" type="button" data-action="remove" aria-label="Remove ${escapeHTML(item.title)}">×</button>
    </article>`).join('');

  routineList.querySelectorAll('.routine-card').forEach(card => {
    const item = state.routine.find(activity => activity.id === card.dataset.id);
    card.querySelector('.time-input').addEventListener('change', event => {
      item.time = event.currentTarget.value;
      saveState();
      renderRoutine();
    });
    card.querySelector('.activity-title').addEventListener('input', event => {
      item.title = event.currentTarget.value;
      saveState();
    });
    card.querySelector('.activity-note').addEventListener('input', event => {
      item.note = event.currentTarget.value;
      saveState();
    });
    card.querySelector('[data-action="done"]').addEventListener('click', () => {
      item.done = !item.done;
      saveState();
      renderRoutine();
    });
    card.querySelector('[data-action="remove"]').addEventListener('click', () => {
      state.routine = state.routine.filter(activity => activity.id !== item.id);
      saveState();
      renderRoutine();
      showToast('Moment removed from your day.');
    });
  });
}

function renderSweets() {
  sweetGrid.innerHTML = state.sweets.map((sweet, index) => `
    <article class="sweet-card" data-id="${escapeHTML(sweet.id)}">
      <button class="sweet-remove" type="button" data-action="remove-sweet" aria-label="Remove ${escapeHTML(sweet.name || 'sweet')}">×</button>
      <div class="sweet-photo">
        <img class="sweet-image${sweet.photo ? ' visible' : ''}" alt="${escapeHTML(sweet.name || 'Diwali sweet')}" ${sweet.photo ? `src="${sweet.photo}"` : ''} />
        <div class="sweet-placeholder${sweet.photo ? ' hidden' : ''}"><span aria-hidden="true">✿</span><span>Add a photo of this sweet</span></div>
        <button class="sweet-photo-button" type="button" data-action="upload-sweet">${sweet.photo ? 'Change photo' : 'Add sweet photo'}</button>
        <input class="visually-hidden sweet-file" type="file" accept="image/*" aria-label="Choose a photo of ${escapeHTML(sweet.name || 'this sweet')}" />
      </div>
      <label class="visually-hidden" for="sweet-name-${escapeHTML(sweet.id)}">Sweet name</label>
      <input class="sweet-name" id="sweet-name-${escapeHTML(sweet.id)}" type="text" maxlength="50" value="${escapeHTML(sweet.name)}" aria-label="Edit sweet name ${index + 1}" />
    </article>`).join('');

  sweetGrid.querySelectorAll('.sweet-card').forEach(card => {
    const sweet = state.sweets.find(item => item.id === card.dataset.id);
    const fileInput = card.querySelector('.sweet-file');
    card.querySelector('.sweet-name').addEventListener('input', event => {
      sweet.name = event.currentTarget.value;
      card.querySelector('.sweet-image').alt = sweet.name || 'Diwali sweet';
      saveState();
    });
    card.querySelector('[data-action="upload-sweet"]').addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', async event => {
      const file = event.currentTarget.files && event.currentTarget.files[0];
      if (!file) return;
      try {
        sweet.photo = await compressImage(file, 1100, .78);
        saveState();
        renderSweets();
        showToast('Sweet photo added.');
      } catch {
        showToast('That photo could not be opened. Try another one.');
      }
    });
    card.querySelector('[data-action="remove-sweet"]').addEventListener('click', () => {
      state.sweets = state.sweets.filter(item => item.id !== sweet.id);
      saveState();
      renderSweets();
      showToast('Sweet removed from your collection.');
    });
  });
}

function compressImage(file, maxSide, quality) {
  return new Promise((resolve, reject) => {
    const objectURL = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      const scale = Math.min(1, maxSide / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      const context = canvas.getContext('2d');
      if (!context) {
        URL.revokeObjectURL(objectURL);
        reject(new Error('Canvas is unavailable'));
        return;
      }
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(objectURL);
      resolve(canvas.toDataURL('image/jpeg', quality));
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectURL);
      reject(new Error('Could not read image'));
    };
    image.src = objectURL;
  });
}

function updateProfile() {
  const profileName = document.querySelector('#profile-name');
  const aboutNote = document.querySelector('#about-note');
  const profilePhoto = document.querySelector('#profile-photo');
  const placeholder = document.querySelector('#photo-placeholder');
  profileName.value = state.profileName || '';
  aboutNote.value = state.about || '';
  if (state.profilePhoto) {
    profilePhoto.src = state.profilePhoto;
    profilePhoto.classList.add('visible');
    placeholder.classList.add('hidden');
  }
  profileName.addEventListener('input', event => {
    state.profileName = event.currentTarget.value;
    saveState();
  });
  aboutNote.addEventListener('input', event => {
    state.about = event.currentTarget.value;
    saveState();
  });

  document.querySelector('#photo-input').addEventListener('change', async event => {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    if (!file) return;
    try {
      state.profilePhoto = await compressImage(file, 1300, .8);
      profilePhoto.src = state.profilePhoto;
      profilePhoto.classList.add('visible');
      placeholder.classList.add('hidden');
      saveState();
      showToast('Your photo is part of the page now.');
    } catch {
      showToast('That photo could not be opened. Try another one.');
    }
  });
}

function connectInteractions() {
  const dialog = document.querySelector('#activity-dialog');
  document.querySelector('#add-activity').addEventListener('click', () => dialog.showModal());
  document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  document.querySelector('#activity-form').addEventListener('submit', event => {
    event.preventDefault();
    const time = document.querySelector('#activity-time').value;
    const title = document.querySelector('#activity-name').value.trim();
    const note = document.querySelector('#activity-note').value.trim();
    if (!title) return;
    state.routine.push({ id: `r${Date.now()}`, time, title, note, done: false });
    saveState();
    renderRoutine();
    event.currentTarget.reset();
    document.querySelector('#activity-time').value = time || '16:00';
    dialog.close();
    showToast('A new moment has been added.');
  });
  document.querySelector('#add-sweet').addEventListener('click', () => {
    state.sweets.push({ id: `s${Date.now()}`, name: 'A new favourite', photo: '' });
    saveState();
    renderSweets();
    sweetGrid.lastElementChild?.querySelector('.sweet-name')?.focus();
  });
  document.querySelector('#glow-toggle').addEventListener('click', event => {
    const active = document.body.classList.toggle('glow-mode');
    event.currentTarget.setAttribute('aria-pressed', String(active));
    event.currentTarget.innerHTML = active ? '<span aria-hidden="true">✦</span> Diyas glowing' : '<span aria-hidden="true">✦</span> Light the diyas';
    showToast(active ? 'Let the little lights glow.' : 'A little softer now.');
  });
  document.querySelector('#share-greeting').addEventListener('click', async () => {
    const message = 'Wishing you a Diwali filled with light, love, and little moments of joy.';
    try {
      if (navigator.share) {
        await navigator.share({ title: 'A little Diwali love', text: message });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(message);
        showToast('A Diwali wish is copied, ready to share.');
      } else {
        showToast(message);
      }
    } catch (error) {
      if (error.name !== 'AbortError') showToast('Wishing you a bright and joyful Diwali.');
    }
  });
}

updateProfile();
renderRoutine();
renderSweets();
connectInteractions();


function initFireworks() {
  const section = document.querySelector('#night');
  const canvas = document.querySelector('#fireworks-canvas');
  const launchButton = document.querySelector('#launch-fireworks');
  const sendWishButton = document.querySelector('#send-wish');
  const launchLabel = document.querySelector('#launch-label');
  const wishInput = document.querySelector('#wish-message');
  const hint = document.querySelector('#fireworks-hint');
  if (!section || !canvas || !launchButton || !sendWishButton) return;

  const context = canvas.getContext('2d');
  if (!context) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const colours = ['#ffd16f', '#ff8ba5', '#a7e4d1', '#d6a8ff', '#ff9d75', '#fff0bd'];
  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let animationFrame = 0;
  let lastLaunch = 0;
  let visible = false;
  let playing = false;
  let userPaused = false;
  let rockets = [];
  let particles = [];
  let stars = [];

  function resizeCanvas() {
    const rect = section.getBoundingClientRect();
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.max(1, Math.round(width * pixelRatio));
    canvas.height = Math.max(1, Math.round(height * pixelRatio));
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    stars = Array.from({ length: Math.max(35, Math.round(width / 16)) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.1 + .25,
      alpha: Math.random() * .55 + .18,
      phase: Math.random() * Math.PI * 2
    }));
  }

  function launchRocket() {
    const targetX = width * (.12 + Math.random() * .76);
    const targetY = height * (.15 + Math.random() * .4);
    const startX = targetX + (Math.random() - .5) * width * .25;
    const startY = height + 12;
    const travelFrames = 34 + Math.random() * 13;
    rockets.push({
      x: startX,
      y: startY,
      targetY,
      vx: (targetX - startX) / travelFrames,
      vy: -(startY - targetY) / travelFrames,
      colour: colours[Math.floor(Math.random() * colours.length)],
      trail: []
    });
  }

  function burst(x, y, colour) {
    const reduced = reducedMotion.matches;
    const count = reduced ? 26 : 76 + Math.floor(Math.random() * 28);
    const base = Math.random() * Math.PI * 2;
    for (let index = 0; index < count; index += 1) {
      const angle = base + (index / count) * Math.PI * 2 + (Math.random() - .5) * .12;
      const speed = (reduced ? .7 : 1) + Math.random() * (reduced ? 1.4 : 3.3);
      particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        gravity: .024 + Math.random() * .035,
        drag: .983 + Math.random() * .012,
        life: (reduced ? 28 : 45) + Math.random() * (reduced ? 12 : 42),
        age: 0,
        radius: .8 + Math.random() * 1.8,
        colour: Math.random() > .28 ? colour : colours[Math.floor(Math.random() * colours.length)]
      });
    }
  }

  function setPlaying(next, manual = false) {
    playing = next;
    if (manual) userPaused = !next;
    launchButton.setAttribute('aria-pressed', String(next));
    launchLabel.textContent = next ? 'Pause the show' : (manual ? 'Resume the show' : 'Start the show');
    if (next) {
      hint.textContent = 'The night sky is glowing—send a wish into it.';
      lastLaunch = 0;
      requestAnimation();
    } else if (manual) {
      hint.textContent = 'Fireworks paused. Your wishes are still glowing.';
      requestAnimation();
    }
  }

  function drawFrame(time) {
    animationFrame = 0;
    if (!visible) return;
    context.clearRect(0, 0, width, height);

    stars.forEach(star => {
      const twinkle = .72 + Math.sin(time * .001 + star.phase) * .25;
      context.beginPath();
      context.fillStyle = `rgba(255, 232, 194, ${star.alpha * twinkle})`;
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fill();
    });

    if (playing && time - lastLaunch > (reducedMotion.matches ? 1350 : 1700)) {
      launchRocket();
      lastLaunch = time;
    }

    rockets = rockets.filter(rocket => {
      rocket.trail.unshift({ x: rocket.x, y: rocket.y });
      if (rocket.trail.length > 8) rocket.trail.pop();
      rocket.x += rocket.vx;
      rocket.y += rocket.vy;
      context.beginPath();
      rocket.trail.forEach((point, index) => {
        if (index === 0) context.moveTo(point.x, point.y);
        else context.lineTo(point.x, point.y);
      });
      context.strokeStyle = rocket.colour;
      context.lineWidth = 1.5;
      context.globalAlpha = .72;
      context.shadowBlur = 12;
      context.shadowColor = rocket.colour;
      context.stroke();
      context.globalAlpha = 1;
      context.shadowBlur = 0;
      if (rocket.y <= rocket.targetY) {
        burst(rocket.x, rocket.y, rocket.colour);
        return false;
      }
      return true;
    });

    context.globalCompositeOperation = 'lighter';
    particles = particles.filter(particle => {
      particle.age += 1;
      particle.vx *= particle.drag;
      particle.vy = particle.vy * particle.drag + particle.gravity;
      particle.x += particle.vx;
      particle.y += particle.vy;
      const opacity = Math.max(0, 1 - particle.age / particle.life);
      context.beginPath();
      context.fillStyle = particle.colour;
      context.globalAlpha = opacity;
      context.shadowBlur = reducedMotion.matches ? 5 : 11;
      context.shadowColor = particle.colour;
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
      return particle.age < particle.life;
    });
    context.globalAlpha = 1;
    context.globalCompositeOperation = 'source-over';
    context.shadowBlur = 0;

    if (playing || rockets.length || particles.length) requestAnimation();
  }

  function requestAnimation() {
    if (visible && !animationFrame) animationFrame = window.requestAnimationFrame(drawFrame);
  }

  sendWishButton.addEventListener('click', () => {
    const wish = wishInput.value.trim();
    hint.textContent = wish
      ? `A sparkle for “${wish}” is on its way.`
      : 'A little Diwali sparkle is on its way.';
    if (reducedMotion.matches) {
      burst(width * (.25 + Math.random() * .5), height * (.22 + Math.random() * .28), colours[Math.floor(Math.random() * colours.length)]);
      requestAnimation();
      return;
    }
    launchRocket();
    requestAnimation();
  });

  launchButton.addEventListener('click', () => {
    if (reducedMotion.matches) {
      hint.textContent = 'Motion is minimized; use “Send my wish” for one brief sparkle.';
      return;
    }
    setPlaying(!playing, true);
  });

  const observer = new IntersectionObserver(entries => {
    const entry = entries[0];
    visible = entry.isIntersecting;
    if (visible) {
      if (!userPaused && !reducedMotion.matches) setPlaying(true);
      requestAnimation();
    } else if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }
  }, { threshold: .12 });

  resizeCanvas();
  observer.observe(section);
  window.addEventListener('resize', resizeCanvas, { passive: true });
}

initFireworks();
