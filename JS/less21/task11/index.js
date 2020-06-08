
export function manageClasses() {
    const li1 = document.querySelector('.one');
    li1.classList.add('selected');
    const li2 = document.querySelector('.two');
    li2.classList.remove('selected');
    const li3 = document.querySelector('.three');
    li3.classList.toggle('three_done');
    const li4 = document.querySelector('.four');
    if(li4.classList.contains('some-class')) {li4.classList.add('another-class')}
}
