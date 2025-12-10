// =======================================================
// CORE BOOK ANIMATION LOGIC (From Original Template)
// =======================================================

const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
const pages = Array.from(document.querySelectorAll('.book-page.page-right'));
const backProfileBtn = document.querySelector('.back-profile');
const contactMeBtn = document.querySelector('.btn.contact-me');
const viewResumeBtn = document.querySelector('.btn.view-resume');
const coverRight = document.querySelector('.cover.cover-right');
let totalPages = pages.length;


// Z-index Manager for stable flipping
function layoutPages() {
  const N = pages.length;
  pages.forEach((p, i) => {
    const turned = p.classList.contains('turn');
    // Unturned pages stay on top; turned pages go below
    p.style.zIndex = turned ? (10 + i) : (100 + (N - i));
  });
}


// Helper functions for turning logic
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


// =======================================================
// 1. EVENT LISTENERS (Flipping and Buttons)
// =======================================================

// Next/Prev Buttons Logic
pageTurnBtn.forEach((el) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute('data-page');
    const pageTurn = document.getElementById(pageTurnId);

    if (el.classList.contains('back')) {
      unturnPage(pageTurn);
    } else {
      turnPage(pageTurn);
    }
  }
});


// "Contact Me!" Button -> flips to last page (Page 6)
if (contactMeBtn) {
  contactMeBtn.onclick = () => {
    pages.forEach((p, i) => {
      // Sequential flipping
      setTimeout(() => turnPage(p), (i + 1) * 200 + 100);
    });
  }
}

// "Back to Profile" Button -> unflips all
if (backProfileBtn) {
  backProfileBtn.onclick = () => {
    // Sequential un-flipping in reverse order
    [...pages].reverse().forEach((p, i) => {
      setTimeout(() => unturnPage(p), (i + 1) * 200 + 100);
    });
  }
}

// "View Resume" Button -> Flips specifically to Page 5
if (viewResumeBtn) {
  viewResumeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const p1 = document.getElementById('turn-1');
    const p2 = document.getElementById('turn-2');
    const p3 = document.getElementById('turn-3');
    if (!p1 || !p2 || !p3) return;

    // Sequence: Flip P1 -> Flip P2 -> Flip P3 (to show Page 5)
    turnPage(p1);
    setTimeout(() => turnPage(p2), 220);
    setTimeout(() => {
      unturnPage(p3); // P3's front page is Page 5 (Resume)
    }, 440);
  });
}


// =======================================================
// 2. OPENING ANIMATION (Initial Entry)
// =======================================================

// Step 1: Flip open right cover
setTimeout(() => {
  if (coverRight) coverRight.classList.add('turn');
}, 2100);

// Step 2: Move cover behind
setTimeout(() => {
  if (coverRight) coverRight.style.zIndex = -1;
}, 2800);


// Step 3: Sequentially reset all right pages to initial stack
// This creates the effect of the pages fanning open and then settling closed.
pages.forEach((page, index) => {
  setTimeout(() => {
    page.classList.remove('turn');
    layoutPages();
  }, (index + 1) * 200 + 2100)
});


// =======================================================
// 3. RESPONSIVE SCALING FIX (The core solution)
// =======================================================

function scaleBook() {
  const wrapper = document.querySelector('.wrapper');
  const container = document.querySelector('.scale-container');
  if (!wrapper || !container) return;

  // Fixed book dimensions (1056px x 720px)
  const designWidth = 1056;
  const designHeight = 720;

  // Calculate scale factor based on container size
  const scaleX = container.clientWidth / designWidth;
  const scaleY = container.clientHeight / designHeight;

  // Use the smaller scale factor to ensure the entire book fits within the screen
  const scale = Math.min(scaleX, scaleY);

  // Apply the scale transformation to the wrapper
  wrapper.style.transform = `scale(${scale})`;
}

// Run scaling on page load and on window resize
window.addEventListener('load', scaleBook);
window.addEventListener('resize', scaleBook);