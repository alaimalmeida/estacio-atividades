numero = int(input())

ano = numero // 365
numero = numero - ano*365

mes = numero // 30
numero = numero - mes*30
dias = numero

print('{} ano(s)'.format(ano))
print('{} mes(es)'.format(mes))
print('{} dia(s)'.format(dias))