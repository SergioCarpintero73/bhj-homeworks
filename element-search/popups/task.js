

const mod = document.getElementById('modal_main');
const mod2 = document.getElementById('modal_success');
mod.className +=" modal_active";

const xxx = document.querySelectorAll(".modal__close_times");
xxx[0].onclick = () => mod.className = "modal";
xxx[1].onclick = () => mod2.className = "modal";

document.querySelector(".btn_danger").onclick = () => {
    mod.className = "modal";
    mod2.className +=" modal_active";
}