//Ez dit denbora eman js aplikatzeko, baina nere ideia zen botoiei emanda beste 5 pelikulak agertzea, beraz azkenean details batean jarri dut. 

let mostrandoPrimero = true;

function hurrengoIrudia() {
    const lista1 = document.querySelector("#pelikula_nabarmenak ul");
    const lista2 = document.querySelector("#pelikulak2 ul");

    if (mostrandoPrimero) {
        lista1.innerHTML = lista2.innerHTML;
    } else {
        lista1.innerHTML = `
            <li><img src="img/blackphone2.jpg"></li>
            <li><img src="img/die_my_love.jpg"></li>
            <li><img src="img/accidente.jpg"></li>
            <li><img src="img/ahora.jpg"></li>
            <li><img src="img/decorado.jpg"></li>
        `;
    }

    mostrandoPrimero = !mostrandoPrimero;
}
