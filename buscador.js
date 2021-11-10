let autosDisponibles = [
    {
        "modelo": "Corsa",
        "precio": 700000,
        "marca": "Chevrolet",
        "tipoVehiculo": "Hatchback",
        "año": "2007",
        "condicion": "Usado",
        "img": "https://http2.mlstatic.com/D_NQ_NP_790591-MLA45119570697_032021-W.jpg"
    },
    {
        "modelo": "Uno",
        "precio": 400000,
        "marca": "Fiat",
        "tipoVehiculo": "Hatchback",
        "año": "1999",
        "condicion": "Usado",
        "img": "https://imgcla.lavoz.com.ar/files/imagecache/ficha_aviso_mobile_462_253/avisos/aviso_auto/aviso-auto-fiat-uno-6804621.jpg"
    },
    {
        "modelo": "Civic SI",
        "precio": 1000000,
        "marca": "Honda",
        "tipoVehiculo": "Coupe",
        "año": "2008",
        "condicion": "Usado",
        "img": "https://noticias.coches.com/wp-content/uploads/2014/07/honda_civic-si-coupe-2008_r8.jpg"
    },
    {
        "modelo": "206",
        "precio": 610000,
        "marca": "Peugeot",
        "tipoVehiculo": "Hatchback",
        "año": "2009",
        "condicion": "Usado",
        "img": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Peugeot_206_Quicksilver_90.jpg"
    },
    {
        "modelo": "Onix",
        "precio": 3000000,
        "marca": "Chevrolet",
        "tipoVehiculo": "Hatchback",
        "año": "2021",
        "condicion": "Nuevo",
        "img": "https://www.megautos.com/wp-content/uploads/2021/04/Chevrolet-Onix-LTZ-2021-delantera.jpg"
    },
    {
        "modelo": "Focus",
        "precio": 2300000,
        "marca": "Ford",
        "tipoVehiculo": "Sedan",
        "año": "2015",
        "condicion": "Usado",
        "img": "https://i.blogs.es/2721a1/ford-focus-2015_/1366_2000.jpg"
    },
    {
        "modelo": "208",
        "precio": 2050000,
        "marca": "Peugeot",
        "tipoVehiculo": "Hatchback",
        "año": "2020",
        "condicion": "Nuevo",
        "img": "https://i.blogs.es/c4eee0/peugeot-208-2020_13/1366_2000.jpg"
    },
    {
        "modelo": "Gol Trend",
        "precio": 840000,
        "marca": "VolksWagen",
        "tipoVehiculo": "Hatchback",
        "año": "2009",
        "condicion": "Usado",
        "img": "https://autoblog.com.ar/wp-content/uploads/2013/02/gol3puertas1-600x321.jpg"
    },
    {
        "modelo": "Fiesta",
        "precio": 240000,
        "marca": "Ford",
        "tipoVehiculo": "Hatchback",
        "año": "2005",
        "condicion": "Usado",
        "img": "https://upload.wikimedia.org/wikipedia/commons/3/35/Ford_Fiesta_MK6_%28Facelift%2C_2005%E2%80%932008%29_front_MJ.JPG"
    },
    {
        "modelo": "128 Berlina",
        "precio": 10000,
        "marca": "Fiat",
        "tipoVehiculo": "Sedan",
        "año": "1978",
        "condicion": "Usado",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/1978_Fiat_128_Bello_%289364845278%29.jpg/1200px-1978_Fiat_128_Bello_%289364845278%29.jpg"
    },
    {
        "modelo": "207",
        "precio": 870000,
        "marca": "Peugeot",
        "tipoVehiculo": "Hatchback",
        "año": "2012",
        "condicion": "Usado",
        "img": "https://acroadtrip.blob.core.windows.net/publicaciones-imagenes/Small/peugeot/207-compact/ar/RT_PU_28a90918f57d4a73aac7105eb69acf1b.jpg"
    },
    {
        "modelo": "147",
        "precio": 32000,
        "marca": "Fiat",
        "tipoVehiculo": "Sedan",
        "año": "1995",
        "condicion": "Usado",
        "img": "https://upload.wikimedia.org/wikipedia/commons/8/88/Fiat_147_late.jpg"
    },
    {
        "modelo": "Polo",
        "precio": 2320000,
        "marca": "VolksWagen",
        "tipoVehiculo": "Hatchback",
        "año": "2021",
        "condicion": "Nuevo",
        "img": "https://autoblog.com.ar/wp-content/uploads/2021/08/LANZAMIENTO-VW-POLO-2022-1.jpg"
    },
    {
        "modelo": "C3",
        "precio": 1080000,
        "marca": "Citroën",
        "tipoVehiculo": "Hatchback",
        "año": "2014",
        "condicion": "Usado",
        "img": "https://http2.mlstatic.com/D_NQ_NP_863144-MLA43210829611_082020-W.jpg"
    },
    {
        "modelo": "C4",
        "precio": 1750000,
        "marca": "Citroën",
        "tipoVehiculo": "Hatchback",
        "año": "2016",
        "condicion": "Usado",
        "img": "https://http2.mlstatic.com/D_NQ_NP_619830-MLA45128104171_032021-O.webp"
    },
    {
        "modelo": "C5 Aircross",
        "precio": 6980000,
        "marca": "Citroën",
        "tipoVehiculo": "Hatchback",
        "año": "2021",
        "condicion": "Nuevo",
        "img": "https://fotos.perfil.com/2020/07/06/citroen-c5-aircross-981972.jpg"
    }
]


function filtrar(arreglo, marca, tipoDeVehiculo, condicion, precioMin,precioMax){
    console.log(marca,tipoDeVehiculo,condicion,precioMin,precioMax)
    let devolucion = arreglo.filter(function(ele){
        return (ele.marca==marca || marca == "todas")
        && (ele.tipoVehiculo==tipoDeVehiculo || tipoDeVehiculo == "cualquiera")
        && (ele.condicion==condicion || condicion == "cualquieraCondicion") 
        && (ele.precio>=precioMin || precioMin == "")
        && (ele.precio <= precioMax || precioMax == "");
    })
    return devolucion;
}

function mostrarAutos() {

    document.getElementById("results-section").innerHTML = "";
    let autosFiltrados= filtrar(autosDisponibles,document.getElementById("marca").value,
                        document.getElementById("tipoVehiculo").value,
                        document.getElementById("condicion").value,
                        document.getElementById("precioMin").value,
                        document.getElementById("precioMax").value);
   
    for (let i = 0; i < autosFiltrados.length; i++) {
        let elementResults = document.getElementById("results-section");
        let car = document.createElement("div");
        car.className = "car";
        let imgsrc = autosFiltrados[i].img;
        let titleV = document.createElement("h3");
        let precioV = document.createElement("h4");
        let marcaV = document.createElement("small");
        let tipoVehiculoV = document.createElement("small");
        let añoV = document.createElement("small");
        let condicionV = document.createElement("small");
        let nombre = autosFiltrados[i].marca.concat(" " + autosFiltrados[i].modelo );
        let precio = "$".concat(autosFiltrados[i].precio); //variable
        let marca = autosFiltrados[i].marca; //variable
        let tipoVehiculo = autosFiltrados[i].tipoVehiculo; //variable
        let año = autosFiltrados[i].año;//variable
        let condicion = autosFiltrados[i].condicion;//variable
        titleV.innerText = nombre;
        precioV.innerText = precio;
        marcaV.innerText = marca;
        tipoVehiculoV.innerText = tipoVehiculo;
        añoV.innerText = año;
        condicionV.innerText = condicion;
        let img = document.createElement("img");
        img.src = imgsrc;
        car.appendChild(img);
        car.appendChild(titleV);
        car.appendChild(precioV);
        car.appendChild(marcaV);
        car.appendChild(tipoVehiculoV);
        car.appendChild(añoV);
        car.appendChild(condicionV);
        elementResults.append(car);
        console.log(elementResults);
        console.log(document.getElementById("marca").value);
    }
}
