// Array de participantes ya inicializado con algunos elementos
let participantes = [
    { nombre: "Caussa Enzo", numero: "001" },
    { nombre: "Correnti Ariel", numero: "002" },
    { nombre: "Longoni Omar", numero: "003" },
    { nombre: "Fux Cesar", numero: "004" },
    { nombre: "Lopez Chocho", numero: "005" },
    { nombre: "Tibaldo Daniel", numero: "006" },
    { nombre: "Lozano Hernan", numero: "007" },
    { nombre: "Bartizaghi Leonardo", numero: "008" },
    { nombre: "Fux Hector", numero: "009" },
    { nombre: "Presser Nestor", numero: "010" },
    { nombre: "Kuchken Hugo", numero: "011" },
    { nombre: "Rossini Elmo", numero: "012" },
    { nombre: "Rodriguez Eliana", numero: "013" },
    { nombre: "Tardivo Mauro", numero: "014" },
    { nombre: "Muller Telmo", numero: "015" },
    { nombre: "Causa Ricardo", numero: "016" },
    { nombre: "Stirnemann Monica", numero: "017" },
    { nombre: "Lorenz Federico", numero: "024" },
    { nombre: "Williner Daniel", numero: "025" },
    { nombre: "Williner Iara", numero: "026" },
    { nombre: "Banco Santa Fe", numero: "027" },
    { nombre: "San Pedro", numero: "028" },
    { nombre: "Zen Oscar", numero: "030" },
    { nombre: "Schnell Luis", numero: "031" },
    { nombre: "Walpen Daniel", numero: "032" },
    { nombre: "Muller Mario", numero: "034" },
    { nombre: "Hang Americo", numero: "035" },
    { nombre: "Muller Elbio", numero: "036" },
    { nombre: "Bieler Walter", numero: "037" },
    { nombre: "Perren Ester", numero: "038" },
    { nombre: "Felipa Celso", numero: "042" },
    { nombre: "Muller Graciela", numero: "043" },
    { nombre: "Establecimiento La Torre", numero: "044" },
    { nombre: "Sucesion Neri Claudio", numero: "047" },
    { nombre: "Bassano Carlos", numero: "050" },
    { nombre: "Correnti Carlos", numero: "058" },
    { nombre: "Rocchia Paulo", numero: "059" },
    { nombre: "Pereyra Marcos", numero: "060" },
    { nombre: "Agro Ataliva", numero: "061" },
    { nombre: "Besone Alvaro", numero: "062" },
    { nombre: "Santa Maria Ataliva", numero: "063" },
    { nombre: "Jardin De infantes NRO 36", numero: "064" },
    { nombre: "Martinez Juan Manuel", numero: "082" },
    { nombre: "Martinez Carli", numero: "083" },
    { nombre: "Saluzo Rodrigo", numero: "084" },
    { nombre: "Lopez Cuca", numero: "085" },
    { nombre: "Perren Carlos", numero: "086" },
    { nombre: "Cantoni Sebastian", numero: "087" },
    { nombre: "Meyer Rodrigo", numero: "088" },
    { nombre: "Zimmermann Roberto", numero: "089" },
    { nombre: "Zimmermann Miguel", numero: "090" },
    { nombre: "Agropecuaria Perassi Hermanos", numero: "091" },
    { nombre: "Williner Silvia", numero: "092" },
    { nombre: "Bieler Ariel", numero: "093" },
    { nombre: "Picco Guillermo", numero: "094" },
    { nombre: "Schmidalter Ester", numero: "095" },
    { nombre: "Bechis Walter", numero: "096" },
    { nombre: "Banco Macro", numero: "097" },
    { nombre: "Fux Hermanos", numero: "098" },
    { nombre: "Burgi Omar", numero: "099" },
    { nombre: "Varengo Adrian", numero: "100" },
    { nombre: "Colegio San Jose Primario", numero: "101" },
    { nombre: "Albergue Ancianos", numero: "102" },
    { nombre: "Colegio San Jose Secundario", numero: "103" },
    { nombre: "Biblioteca Felicia", numero: "104" },
    { nombre: "Bomberos Voluntarios", numero: "105" },
    { nombre: "Club Atletico", numero: "106" },
    { nombre: "Club Juventud", numero: "107" },
    { nombre: "Centro Jubilados", numero: "108" },
    { nombre: "Coprocer", numero: "109" },
    { nombre: "Grupo Agroservicios", numero: "110" },
    { nombre: "Grupo Picadora", numero: "111" },
    { nombre: "Grupo Fumigadora", numero: "112" },
    { nombre: "Estudio Bonetti", numero: "113" },
    { nombre: "Iglesia Evangelica", numero: "114" },
    { nombre: "Paucar", numero: "115" },
    { nombre: "CER N° 338", numero: "116" },
    { nombre: "Escuela N° 337", numero: "117" },
    { nombre: "Escuela N° 6100", numero: "118" },
    { nombre: "SAMCO", numero: "119" },
    { nombre: "Las Colonias", numero: "120" },
];

// Función para agregar un participante
function agregarParticipante() {
    const nombre = document.getElementById('nombre').value;
    const numero = document.getElementById('numero').value;

    // Validar que ambos campos estén llenos
    if (nombre && numero) {
        // Verificar si el número ya existe en el array de participantes
        const numeroExistente = participantes.some(participante => participante.numero == numero);

        if (numeroExistente) {
            alert('El número ya está registrado, por favor ingrese otro número.');
        } else {
            // Agregar el nuevo participante
            participantes.push({ nombre, numero });
            document.getElementById('nombre').value = ''; 
            document.getElementById('numero').value = '';
            mostrarRestantes();
        }
    } else {
        alert('Por favor, complete ambos campos');
    }
}

// Función para sortear un ganador
function sortear() {
    if (participantes.length === 0) {
        document.getElementById('resultado').innerText = 'No hay participantes para sortear.';
        return;
    }

    const ganadorIndex = Math.floor(Math.random() * participantes.length);
    const ganador = participantes[ganadorIndex];

    document.getElementById('resultado').innerText = `Ganador: #${ganador.numero} - ${ganador.nombre}`;

    participantes.splice(ganadorIndex, 1);
    mostrarRestantes();
}

//
function mostrarRestantes() {
    if (participantes.length === 0) {
        document.getElementById('restantes').innerText = '';
    } else if (participantes.length === 1) {
        document.getElementById('restantes').innerText = 'Queda 1 participante restante';
    } else {
        document.getElementById('restantes').innerText = `Quedan ${participantes.length} participantes restantes`;
    }
}
