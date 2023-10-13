


let dead = document.getElementById(`dead`)
let lost = document.getElementById(`lost`)
let killed = 0
let miss = 0
let holes = (index) => document.getElementById(`hole${index}`)

for (let i = 1; i < 10; i++) {
    let hole = holes(i)
    hole.onclick = () => {
        if (hole.className === 'hole hole_has-mole') {
            killed += 1;
        } else {
            miss += 1;
        }
        if (killed === 10) {
            alert('Победа!');
            killed = 0;
            miss = 0;
        }
        if (miss === 5) {
            alert('Вы проиграли!');
            killed = 0;
            miss = 0;
        }
        dead.textContent = killed;
        lost.textContent = miss;
    }

}


