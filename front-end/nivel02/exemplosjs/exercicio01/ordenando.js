//adicionar número na lista 
let numbers = [];

function add() {
    const numeroInput = document.getElementById("valor");
    const numero = parseInt(numeroInput.value);

    numbers.push(numero); // Adicionar número ao array
    const listaNumeros = document.getElementById("numberList");
    const novoItem = document.createElement("li");
    novoItem.appendChild(document.createTextNode(numero));
    listaNumeros.appendChild(novoItem);

    numeroInput.value = ""; // Limpar o input após adicionar 
}

//misturar lista  
function misturarLista() {
    const lista = document.getElementById("numberList");
    const items = Array.from(lista.children); // Convertendo os elementos da lista em um array

    for (var i = items.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = items[i];
        items[i] = items[j];
        items[j] = temp;
    }

    // Removendo todos os elementos da lista atual
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    // Adicionando os elementos embaralhados de volta à lista
    for (var i = 0; i < items.length; i++) {
        lista.appendChild(items[i]);
    }
}

function ordenarLista() {
    const sortSelector = document.getElementById("sortSelector");
    const selectedAlgorithm = sortSelector.value;

    switch (selectedAlgorithm) {
        case "bubbleSort":
            bubbleSort();
            break;
        case "selectionSort":
            selectionSort();
            break;
        case "quickSort":
            quickSort(numbers, 0, numbers.length - 1);
            break;
        default:
            break;
    }

    const numberList = document.getElementById("numberList");
    numberList.innerHTML = numbers.map(number => `<li>${number}</li>`).join("");
}

function bubbleSort() {
    const n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
            }
        }
    }
}

function selectionSort() {
    const n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (numbers[j] < numbers[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
        }
    }
}

function quickSort(arr, low, high) {
    if (low < high) {
        const pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

function partition(arr, low, high) {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}
