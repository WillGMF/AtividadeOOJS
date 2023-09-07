function Cachorro(raca)  {
    this.raca = raca;
   
    this.latir = () => [console.log("au")]
}

function CachorroBravo(nome, raca, bravo) {
    this.nome = nome;

    this.bravo = bravo == "sim" ? "é bravo": "não é bravo";

    Cachorro.call(this, raca)
}

function CachorroAtletico(nome, raca, bravo, modalidades) {
    CachorroBravo.call(this, nome, bravo);
    Cachorro.call(this, raca);
    this.modalidades = modalidades
}

const cachorro1 = new Cachorro("boxer")
const cachorro2 = new CachorroBravo("thor","golden", "sim")
const cachorro3 = new CachorroAtletico("Tobi", "vira lata", "sim", ["atleta", "natação"])

cachorro2.latir()
console.log(cachorro3);