print('Módulo importado!')

def calcula_imc(peso, altura):
  print("Parâmetro peso: ", peso)
  print("Parâmetro altura: ", altura)
  imc = peso/altura**2
  return imc
