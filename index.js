// Array de participantes ya inicializado con algunos elementos
let participantes = [
    { nombre: "Prueba 1", numero: 1 },
    { nombre: "Prueba 2", numero: 2 },
    { nombre: "Prueba 3", numero: 3 },
    { nombre: "Prueba 4", numero: 4 },
    { nombre: "Prueba 5", numero: 5 }
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
