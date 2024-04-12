const promedio = (lista) => {
    const total = lista.reduce(function (acumulador, elemento) {
        return acumulador + elemento;
    }, 0);
    return total / lista.length
};

module.exports = { promedio }