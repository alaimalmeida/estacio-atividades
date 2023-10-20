import tkinter
from tkinter import Button, Entry, Label, messagebox

def acao():
    print('Botão pressionado!')
    msg = messagebox.showinfo("Alerta!!!", texto.get())

principal = tkinter.Tk()
#Código da interface aqui

botao = Button(principal, text="Olá", command=acao)
botao.grid(row=0, column=2)

texto = Entry(principal)
texto.grid(row=0, column=1)

etiqueta = Label(principal, text="Label")
etiqueta.grid(row=0, column=0)

principal.mainloop()