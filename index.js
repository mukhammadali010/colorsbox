const boxes = document.getElementsByClassName('box');

for (const box of boxes) {
    box.onmouseover = async () => {
        box.style.backgroundColor = "yellow"
        box.style.transition = "1s";
        box.innerHTML = "yellow";

        let color = await new Promise((resolve, reject) => {
            setTimeout(() => {
                box.style.backgroundColor = "red";
                box.style.transition = ".3s"
                box.innerHTML = "red";
                resolve("green");
            }, 500)
        });
        color = await new Promise((resolve, reject) => {
            setTimeout(() => {
                box.style.backgroundColor = color;
                box.style.transition = "1s";
                box.innerHTML = color;
                resolve("coral");
            }, 500)
        });


        color = await new Promise((resolve, reject) => {
            setTimeout(() => {
                box.style.backgroundColor = color;
                box.style.transition = "1s";
                box.innerHTML = color;
                resolve(" rgb(36, 34, 34)");
            }, 500)
        });

        setTimeout(() => {
            box.style.backgroundColor = color;
            box.style.transition = "1s";
            box.innerHTML = color;
            box.innerHTML = '';
        })
    }
}