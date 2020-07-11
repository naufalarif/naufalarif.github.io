// Navbar animation
// $(document).ready(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 50) {
//             $('.navbar').css('background-color','rgba(0, 0, 0, 0.63)');
//             $('.navbar').css('margin-top','0px');
//         } else {
//             $('.navbar').css('background-color','transparent');
//             $('.navbar').css('margin-top','30px');
//         }
//     });
// });

// Copyright Date
const d = new Date()
const crDate = d.getFullYear()
const crText = document.getElementById('copyright')
crText.textContent += ` ${crDate} All rights reserved.`

