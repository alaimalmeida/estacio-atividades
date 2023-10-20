from numpy import array
#notas_real = array([2, 5, 10, 20, 50, 100], dtype=int)
#print(notas_real[3])

def main():
    idades = array([10, 30, 45, 62, 74], dtype=int)
    print(f"vetor antes da insercao: {idades}")
    
    indice = eval(input())  # recebe o índice
    elemento = eval(input())  # recebe o novo elemento
    # inserindo o novo elemento escolhido
    idades[indice] = elemento
    print(f"vetor depois da insercao: {idades}")


# Teste lógico __name__ == "__main__"
# __name__ é uma variável especial do Python
# __name__ terá o valor  “__main__” quando o script é executado diretamente
# (nosso caso, quando o botão Executar do emulador for pressionado)
# __name__ terá como valor o nome do script (sem o .py) em caso de importação do script como módulo por um outro script
if __name__ == "__main__":
    main()
