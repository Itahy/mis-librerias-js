
document.getElementById('isrForm').onsubmit = function(e) {
    e.preventDefault();

    let ingreso = parseFloat(document.getElementById('ingreso').value);
    let tasa = parseFloat(document.getElementById('tasa').value);

    try {
        let resultado = calcularISR(ingreso, tasa);

        document.getElementById('isrCalculado').textContent = resultado.isrCalculado.toFixed(2);
        document.getElementById('netoCalculado').textContent = resultado.ingresoNeto.toFixed(2);
        document.getElementById('resultado').style.display = 'block';

    } catch (error) {
        alert(error.message);
    }
};
