let BaseDeDatos = [
    {
        id: 'a',
        nombre: "Juan",
        apellido: "Perez",
        edad: 66,
        profecion: "Ing Mecanico"
    },
    {
        id: 2,
        nombre: "Sofía",
        apellido: "Rodríguez",
        edad: 22,
        profecion: "Lic Marketing Digital"
    },
    {
        id: 3,
        nombre: "Mariana",
        apellido: "García",
        edad: 33,
        profecion: "Ing Sistemas Computacionales"
    },
    {
        id: 4,
        nombre: null,
        apellido: "Martínez",
        edad: 18,
        profecion: "Ing Industrial"
    },
    {
        id: 5,
        nombre: "Valentina",
        apellido: "Gómez",
        edad: 26,
        profecion: "Lic Derecho"
    },
    {
        id: 6,
        nombre: "Alejandro",
        apellido: "Flores",
        edad: 17,
    },
];

document.getElementById('searchBtn').addEventListener('click', () => {
    let inputId = document.getElementById('inputId').value;
    let resultDiv = document.getElementById('result');
    let errorDiv = document.getElementById('error');
    
    resultDiv.innerHTML = '';
    errorDiv.innerHTML = '';

    try {
        if (!inputId) throw new Error('Debes ingresar un ID');

        let record = BaseDeDatos.find(item => item.id == inputId);

        if (!record) throw new Error('No se encontró un registro con ese ID');

        if (typeof record.id !== 'number' && isNaN(Number(record.id))) {
            throw new Error('El ID no es un número');
        }

        if (!record.nombre) throw new Error('El nombre contiene un null');

        if (!('profecion' in record)) throw new Error('La propiedad "profecion" no existe');

        resultDiv.innerHTML = `
            <p><strong>ID:</strong> ${record.id}</p>
            <p><strong>Nombre:</strong> ${record.nombre}</p>
            <p><strong>Apellido:</strong> ${record.apellido}</p>
            <p><strong>Edad:</strong> ${record.edad}</p>
            <p><strong>Profeción:</strong> ${record.profecion}</p>
        `;
    } catch (error) {
        errorDiv.textContent = error.message;
    }
});