def is_hexadecimal(value):
    if not value.isdigit():
        return True
    return False

while (True):
    value = input()
    if (value == '-1'):
        break

    if is_hexadecimal(value):
        numero = int(value, base=16)
        print('{}'.format(numero))

    else:
        numero = int(value)
        print('{}'.format(hex(numero)))
print()
