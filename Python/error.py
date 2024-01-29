print("%10.3e" % (356.08977))
print("%10o" % (25))
print("Percentage sign: %%" % ())
print("%#5o" % (25))
print("%+d" % (42))
print("%+d" % (-42))
print("% d" % (42))
print("%d" % (42))
print("%+5d" % (42))
"{0:<20s} {1:6.2f}".format('Spam & Eggs:', 6.99)
"{0:<10s} {1:6.2f}" .format("Eggs:", 6.99)

data = dict(province="Ontario", capital="Toronto")
print(data)
print("The capital of {province} is {capital}".format(**data))

capital_country = {"US": "Washington",
                   "Canada": "Ottawa",
                   "UK": "London"}
print("Countries and their capitals:")
for i in capital_country:
    print("{country}: {capital}" .format(
        country=i, capital=capital_country[i]))

print("Countries and their capitals:")
for c in capital_country:
    format_string = c + ": {" + c + "}"
    print(format_string.format(**capital_country))

a = 42
b = 47


def f():
    return 42


locals()
print("a={a}, b={b} and f={f}".format(**locals()))
