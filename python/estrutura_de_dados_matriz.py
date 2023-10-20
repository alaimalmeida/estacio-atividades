from numpy import array

def itera_matriz(matriz):
    for linha in matriz:
        print('Início de uma nova linha')
        for elemento in linha:
            print(elemento)

def altera_matriz(matriz, elemento, i, j):
    matriz[i][j] = elemento
    return matriz

def main():
    matriz = array([["Português", "Matemática", "Química"], ["História", "Geografia", "Física"]], dtype=str)
# matriz = altera_matriz(matriz, None, None, None)
    itera_matriz(matriz)

if __name__ == "__main__":
    main()
