// // const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

// // pageTurnBtn.forEach((el, index) => {
// //     el.onclick = () => {

// //         const pageTurnId = el.getAttribute('data-page');
// //         const pageTurn = document.getElementById(pageTurnId);

// //         if(pageTurn.classList.contains('turn')){
// //             pageTurn.classList.remove('turn');

// //             setTimeout(() => {
// //                 pageTurn.style.zIndex = 2 - index;
// //             }, 500);

// //         }else{
// //             pageTurn.classList.add('turn');

// //             setTimeout(() => {
// //                 pageTurn.style.zIndex = 2 + index;
// //             }, 500);
// //         }
// //     }
// // });


// // // contact me button when click
// // const pages = document.querySelectorAll('.book-page.page-right');
// // const contactMeBtn = document.querySelector('.btn.contact-me');

// // contactMeBtn.onclick = () => {
// //     pages.forEach((page, index) => {
// //         setTimeout(() => {

// //             page.classList.add('turn');
// //             setTimeout(() => {
// //                 page.style.zIndex = 20 + index;
// //             },500);
// //         }, (index + 1) * 200 + 100)
// //     });
// // }


// // // create reverse index function
// // let totalPages = pages.length;
// // let pageNumber = 0;

// // function reverseIndex() {
// //     pageNumber--;
// //     if(pageNumber < 0){
// //         pageNumber = totalPages - 1;
// //     }
// // }


// // // back profile button when click
// // const backProfileBtn = document.querySelector('.back-profile');

// // backProfileBtn.onclick = () => {
// //     pages.forEach((_, index) => {
// //         setTimeout(() => {
// //             reverseIndex();

// //             pages[pageNumber].classList.remove('turn');

// //             setTimeout(() => {
// //                 reverseIndex();
// //                 pages[pageNumber].style.zIndex = 10 + index;
// //             }, 500)
// //         }, (index + 1) * 200 + 100)

// //     })
// // }


// // // opening animation
// // const coverRight = document.querySelector('.cover.cover-right');
// // const pageLeft = document.querySelector('.book-page.page-left');


// // // open animation (cover right animation)
// // setTimeout(() => {
// //     coverRight.classList.add('turn');
// // }, 2100);

// // setTimeout(() => {
// //     coverRight.style.zIndex = -1;
// // }, 2800);


// // pages.forEach((_, index) => {
// //     setTimeout(() => {
// //         reverseIndex();

// //         pages[pageNumber].classList.remove('turn');

// //         setTimeout(() => {
// //             reverseIndex();
// //             pages[pageNumber].style.zIndex = 10 + index;
// //         }, 500)
// //     }, (index + 1) * 200 + 2100)

// // })

// // ===============================
// // Portfolio Book - Complete JS
// // ===============================

// // Next/Prev arrow buttons for turning one page at a time
// const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

// pageTurnBtn.forEach((el, index) => {
//     el.onclick = () => {
//         const pageTurnId = el.getAttribute('data-page');
//         const pageTurn = document.getElementById(pageTurnId);

//         if (pageTurn.classList.contains('turn')) {
//             pageTurn.classList.remove('turn');
//             setTimeout(() => {
//                 pageTurn.style.zIndex = 2 - index;
//             }, 500);
//         } else {
//             pageTurn.classList.add('turn');
//             setTimeout(() => {
//                 pageTurn.style.zIndex = 2 + index;
//             }, 500);
//         }
//     };
// });

// // All right-side pages (those that flip)
// const pages = document.querySelectorAll('.book-page.page-right');

// // -----------------------------
// // "Contact Me!" button behavior
// // -----------------------------
// const contactMeBtn = document.querySelector('.btn.contact-me');

// if (contactMeBtn) {
//     contactMeBtn.onclick = () => {
//         pages.forEach((page, index) => {
//             setTimeout(() => {
//                 page.classList.add('turn'); // flip to the back sides
//                 setTimeout(() => {
//                     page.style.zIndex = 20 + index;
//                 }, 500);
//             }, (index + 1) * 200 + 100);
//         });
//     };
// }

// // -----------------------------
// // "View Resume" button behavior
// // Turns to the resume page (turn-3) front
// // -----------------------------
// const viewResumeBtn = document.querySelector('.btn.view-resume');

// if (viewResumeBtn) {
//     viewResumeBtn.onclick = () => {
//         const p1 = document.getElementById('turn-1');
//         const p2 = document.getElementById('turn-2');
//         const p3 = document.getElementById('turn-3');

//         if (!p1 || !p2 || !p3) return;

//         // Step 1: ensure resume page shows its FRONT (remove 'turn' if present)
//         p3.classList.remove('turn');

//         // Step 2: animate flipping pages 1 and 2 so we "move forward"
//         [p1, p2].forEach((p, i) => {
//             setTimeout(() => {
//                 p.classList.add('turn');
//                 setTimeout(() => {
//                     p.style.zIndex = 20 + i; // bring them above during animation
//                 }, 500);
//             }, i * 220 + 80);
//         });

//         // Step 3: bring page 3 to the top so its front (resume iframe) is visible
//         setTimeout(() => {
//             p3.style.zIndex = 25;
//         }, 2 * 220 + 500);
//     };
// }

// // -----------------------------
// // Utilities for back navigation
// // -----------------------------
// let totalPages = pages.length;
// let pageNumber = 0;

// function reverseIndex() {
//     pageNumber--;
//     if (pageNumber < 0) {
//         pageNumber = totalPages - 1;
//     }
// }

// // Back to profile button (unflip all to return)
// const backProfileBtn = document.querySelector('.back-profile');

// if (backProfileBtn) {
//     backProfileBtn.onclick = () => {
//         pages.forEach((_, index) => {
//             setTimeout(() => {
//                 reverseIndex();
//                 pages[pageNumber].classList.remove('turn');
//                 setTimeout(() => {
//                     reverseIndex();
//                     pages[pageNumber].style.zIndex = 10 + index;
//                 }, 500);
//             }, (index + 1) * 200 + 100);
//         });
//     };
// }

// // -----------------------------
// // Opening animation
// // -----------------------------
// const coverRight = document.querySelector('.cover.cover-right');
// const pageLeft = document.querySelector('.book-page.page-left');

// // open animation (cover right)
// setTimeout(() => {
//     if (coverRight) coverRight.classList.add('turn');
// }, 2100);

// setTimeout(() => {
//     if (coverRight) coverRight.style.zIndex = -1;
// }, 2800);

// // sequentially bring right pages to initial stack order
// pages.forEach((_, index) => {
//     setTimeout(() => {
//         reverseIndex();
//         pages[pageNumber].classList.remove('turn');
//         setTimeout(() => {
//             reverseIndex();
//             pages[pageNumber].style.zIndex = 10 + index;
//         }, 500);
//     }, (index + 1) * 200 + 2100);
// });

// const contactForm = document.getElementById("contactForm");

// if (contactForm) {
//     contactForm.addEventListener("submit", function (e) {
//         e.preventDefault();

//         const name = contactForm.elements["name"].value.trim();
//         const email = contactForm.elements["email"].value.trim();
//         const msg = contactForm.elements["message"].value.trim();

//         if (!name || !email || !msg) return;

//         const to = "juturnagaabhinavasai@gmail.com";
//         const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
//         const body = encodeURIComponent(
//             `Name: ${name}\nEmail: ${email}\n\n${msg}`
//         );

//         const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
//         window.location.href = mailto;

//         setTimeout(() => {
//             alert(
//                 "If your email app didn't open, please contact me directly at: " +
//                 to
//             );
//         }, 1500);
//     });
// }

// const phoneLink = document.querySelector('a[href^="tel:"]');

// if (phoneLink) {
//   phoneLink.addEventListener("click", function (e) {
//     // For desktop: show alert so user can see your number
//     if (!/Mobi|Android/i.test(navigator.userAgent)) {
//       e.preventDefault();
//       alert("📞 Call me at: +91 81423 88150");
//     }
//   });
// }

// const mailLink = document.querySelector('a[href^="mailto:"]');
// if (mailLink) {
//   mailLink.addEventListener("click", function (e) {
//     // Try opening mail client — but for some users, it won't work
//     setTimeout(() => {
//       // If no mail client, this alert gives fallback info
//       alert("📧 Email me at: juturnagaabhinavasai@gmail.com");
//     }, 1500);
//   });
// }