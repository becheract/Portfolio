const phrases = [
    'Creative',
    'Passionate',
    'Goal-oriented',
    'Always Learning',
    'Frontend',
    'Driven',
    'Backend',
    'Positive',
    'Web Design',
    'Detail-Oriented',
    'Self-Motivated',
    'Valuable',
    'Leader',
    'Energized',
    'Accomplished',
    'Resolved'
]

const sectionOne = document.querySelector('#AboutMe');

const options = {
  root: null, // it is the viewport
  threshold: 0,
  rootMargin: "-150px",
 };



const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
    console.log(entry.isIntersecting)

});
}, options);

observer.observe(sectionOne)

//  (() => {
//     let titleChange = document.getElementById('profile-container')
//     console.log(titleChange)
    
//     setInterval(() => {
//         let ramdomNum = Math.floor(Math.random() * phrases.length);
//         titleChange.innerHTML = phrases[ramdomNum]
//     }, 10000)
//  })

