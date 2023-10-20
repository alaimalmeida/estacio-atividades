def trocaTrecho(trechoLista, palavraLista, numero):
    posicoes = []
    for i in range(len(trechoLista) - len(palavraLista) + 1):
        palavraEncontrada = True
        for j in range(len(palavraLista)):
            if palavraLista[j].lower() != trechoLista[i + j].lower():
                palavraEncontrada = False
                break
        if palavraEncontrada:
            posicoes.append(i)
    for indice in posicoes:
        for k in range(indice, indice + len(palavraLista)):
            trechoLista[k] = "@"
    trechoAlterado = "".join(trechoLista)
    trechoAlterado = trechoAlterado.replace("@" * len(palavraLista), numero)
    return trechoAlterado

while True:
    try:
        palavra = input()
        numero = input()
        frase = input()
    except EOFError:
        break
    palavraLista = list(palavra)
    fraseLista = list(frase)
    tagAberta = False
    trechoLista, saidaLista = [], []
    for i in range(len(fraseLista)):
        if fraseLista[i] == "<":
            tagAberta = True
            trechoLista = []
            saidaLista.append("<")
        elif fraseLista[i] == ">":
            tagAberta = False
            trechoLista = trocaTrecho(trechoLista, palavraLista, numero)
            for k in range(len(trechoLista)):
                saidaLista.append(trechoLista[k])
            trechoLista = []
            saidaLista.append(">")
        elif not tagAberta:
            saidaLista.append(fraseLista[i])
        elif tagAberta:
            trechoLista.append(fraseLista[i])
    print("".join(saidaLista))
