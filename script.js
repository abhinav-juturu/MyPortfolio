// Collect right-side pages
const pages = Array.from(document.querySelectorAll('.book-page.page-right'));

// Assign dataset index for tracking
pages.forEach((p, i) => p.dataset.idx = i);

// ===============================
// z-index Manager for stable flipping
// ===============================
function layoutPages() {
  const N = pages.length;
  pages.forEach((p, i) => {
    const turned = p.classList.contains('turn');
    // Unturned pages stay on top; turned pages go below
    p.style.zIndex = turned ? (10 + i) : (100 + (N - i));
  });
}

// Helper functions
function turnPage(pageEl) {
  if (!pageEl.classList.contains('turn')) {
    pageEl.classList.add('turn');
    setTimeout(layoutPages, 500);
  }
}

function unturnPage(pageEl) {
  if (pageEl.classList.contains('turn')) {
    pageEl.classList.remove('turn');
    setTimeout(layoutPages, 500);
  }
}

// Initial layout
layoutPages();

// ===============================
// Next/Prev Buttons
// ===============================
document.querySelectorAll('.nextprev-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-page');
    const page = document.getElementById(id);
    if (!page) return;

    if (btn.classList.contains('back')) {
      unturnPage(page);
    } else {
      turnPage(page);
    }
  });
});

// ===============================
// "Contact Me!" Button -> flips to last page
// ===============================
const contactMeBtn = document.querySelector('.btn.contact-me');
if (contactMeBtn) {
  contactMeBtn.addEventListener('click', () => {
    pages.forEach((p, i) => {
      setTimeout(() => turnPage(p), i * 200);
    });
  });
}

// ===============================
// Back to Profile Button -> unflips all
// ===============================
const backProfileBtn = document.querySelector('.back-profile');
if (backProfileBtn) {
  backProfileBtn.addEventListener('click', () => {
    [...pages].reverse().forEach((p, i) => {
      setTimeout(() => unturnPage(p), i * 200);
    });
  });
}

// ===============================
// Opening Animation (Initial Entry)
// ===============================
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

// Step 1: Animate book appearance
setTimeout(() => {
  document.querySelector('.wrapper').style.animation = 'show-animate 2s forwards';
}, 500);

// Step 2: Flip open right cover
setTimeout(() => {
  if (coverRight) coverRight.classList.add('turn');
}, 2100);

// Step 3: Move cover behind
setTimeout(() => {
  if (coverRight) coverRight.style.zIndex = -1;
}, 2800);

// Step 4: Sequentially reset all right pages to initial stack
pages.forEach((_, index) => {
  setTimeout(() => {
    const page = pages[index];
    page.classList.remove('turn');
    layoutPages();
  }, (index + 1) * 200 + 2100);
});

// ===============================
// "View Resume" Button
// ===============================
const viewResumeBtn = document.querySelector('.btn.view-resume');
if (viewResumeBtn) {
  viewResumeBtn.addEventListener('click', () => {
    const p1 = document.getElementById('turn-1');
    const p2 = document.getElementById('turn-2');
    const p3 = document.getElementById('turn-3');
    if (!p1 || !p2 || !p3) return;

    turnPage(p1);
    setTimeout(() => turnPage(p2), 220);
    setTimeout(() => {
      p3.classList.remove('turn'); // show resume front
      layoutPages();
    }, 600);
  });
}

// ===============================
// Contact Form (mailto + fallback)
// ===============================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = contactForm.elements['name'].value.trim();
    const email = contactForm.elements['email'].value.trim();
    const msg = contactForm.elements['message'].value.trim();
    if (!name || !email || !msg) return;

    const to = 'juturnagaabhinavasai@gmail.com';
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      alert("If your email app didn't open, please contact me directly at: " + to);
    }, 1500);
  });
}

// ===============================
// Phone & Mail Icon Fallbacks
// ===============================
const phoneLink = document.querySelector('a[href^="tel:"]');
if (phoneLink) {
  phoneLink.addEventListener('click', function (e) {
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (!isMobile) {
      e.preventDefault();
      alert("📞 Call me at: +91 81423 88150");
    }
  });
}

const mailLink = document.querySelector('a[href^="mailto:"]');
if (mailLink) {
  mailLink.addEventListener('click', function () {
    setTimeout(() => {
      alert("📧 Email me at: juturnagaabhinavasai@gmail.com");
    }, 1500);
  });
}

// ===============================
// Auto Scale Portfolio Book
// ===============================
function scaleBook() {
  const wrapper = document.querySelector('.wrapper');
  const container = document.querySelector('.scale-container');
  if (!wrapper || !container) return;

  const designWidth = 1056;  // 66rem * 16px
  const designHeight = 720;  // 45rem * 16px

  const scaleX = container.clientWidth / designWidth;
  const scaleY = container.clientHeight / designHeight;
  const scale = Math.min(scaleX, scaleY);

  wrapper.style.transform = `scale(${scale})`;
}

// Run on load and resize
window.addEventListener('load', scaleBook);
window.addEventListener('resize', scaleBook);
