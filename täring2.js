const täringud = {
    esimene_täring : "<i class=\"fa-solid fa-dice-one\"></i>",
    teine_täring : "<i class=\"fa-solid fa-dice-two\"></i>",
    kolmas_täring : "<i class=\"fa-solid fa-dice-three\"></i>",
    neljas_täring : "<i class=\"fa-solid fa-dice-four\"></i>",
    viies_täring : "<i class=\"fa-solid fa-dice-five\"></i>",
    kuues_täring : "<i class=\"fa-solid fa-dice-six\"></i>",
    veereta() {
    let kordade_arv = document.getElementById("täringud").value;
    let visked = [];
    if (Number(kordade_arv) > 0) {
        let vise = 0;
        let i = 0;
        while (i < kordade_arv){
            vise = Math.floor(Math.random() * 6) + 1;
            switch (vise) {
                case 1 :
                    visked.push(document.getElementById("tulemus").innerHTML = this.esimene_täring);
                    break;
                case 2 :
                    visked.push(document.getElementById("tulemus").innerHTML = this.teine_täring);
                    break;
                case 3 :
                    visked.push(document.getElementById("tulemus").innerHTML = this.kolmas_täring);
                    break
                case 4 :
                    visked.push(document.getElementById("tulemus").innerHTML = this.neljas_täring);
                    break
                case 5 :
                    visked.push(document.getElementById("tulemus").innerHTML = this.viies_täring);
                    break
                case 6 :
                    visked.push(document.getElementById("tulemus").innerHTML = this.kuues_täring);
                    break
            }
            i += 1;
        }
    }
    document.getElementById("tulemus").innerHTML = `${visked.join("\r\n")}`;
}
}


