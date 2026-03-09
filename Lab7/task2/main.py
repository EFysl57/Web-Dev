from models import Animal, Cat, Dog


animal1 = Animal('Animal1', 2, 'Sound1')
cat = Cat('cat_name', 1, 'meow', 'orange')
dog = Dog('dog_name', 3, 'bark', 'yellow')


animals = [animal1, cat, dog]


for animal in animals:
    print(animal)
    print(animal.speak())
    print(animal.move())


print(cat.show_color())
print(dog.show_color())