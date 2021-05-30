var asortiman = [
  {
     naziv: "Logitech Gaming G33",
     cijena: "350kn",
     bluetooth: "Ne",
     boja: "Crna",
     sifra: "23875",
     slika: "img/sl1.jfif"
  },
  {
     naziv: "JBL Tune 500BT",
     cijena: "379kn",
     bluetooth: "Da",
     boja: "Ružičasta",
     sifra: "23455",
     slika: "img/sl2.jfif"
  },
  {
     naziv: "Sony WH-CH510",
     cijena: "425kn",
     bluetooth: "Da",
     boja: "Crna",
     sifra: "23856",
     slika: "img/sl3.jfif"
  },
  {
     naziv: "Philips TAUT102",
     cijena: "255kn",
     bluetooth: "Da",
     boja: "Crna",
     sifra: "78875",
     slika: "img/sl4.jfif"
  },
  {
     naziv: "Logitech G432",
     cijena: "500kn",
     bluetooth: "Ne",
     boja: "Crna/Plava",
     sifra: "65975",
     slika: "img/sl5.jfif"
  },
  {
     naziv: "White Shark GH-1845",
     cijena: "499kn",
     bluetooth: "Ne",
     boja: "Srebrna/Plava",
     sifra: "63598",
     slika: "img/sl6.jfif"
  }
];

function stranica(stvar) {
  return `
    <div class="stvar">
    <img src="${stvar.slika}"/>
    <h2 class="naziv">${stvar.naziv}</h2>
    <p>Cijena: <b>${stvar.cijena}</b></p>
    <p>Bluetooth: <b>${stvar.bluetooth}</b></p>
    <p>Boja: <b>${stvar.boja}</b></p>
    <p>Šifra: <b>${stvar.sifra}</b></p>
    </div>
  `;
}

document.getElementById("stranica").innerHTML = `
  <h1 class="naslov">Asortiman (${asortiman.length} stvari)</h1>
  ${asortiman.map(stranica).join("")}
`;