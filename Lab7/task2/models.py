class Animal():
    def __init__(self, name, age, sound):
        self.name = name
        self.age = age
        self.sound = sound
    
    def speak(self):
        return self.sound

    def move(self):
        return f'The {self.name} is moved'

    def __str__(self):
        return f'{self.name} {self.age} {self.sound}'


class Cat(Animal):
    def __init__(self, name, age, sound, color):
        super().__init__(name, age, sound)
        self.color = color

    def move(self):
        return 'The cat is moved'

    def show_color(self):
        return self.color


class Dog(Animal):
    def __init__(self, name, age, sound, color):
        super().__init__(name, age, sound)
        self.color = color

    def move(self):
        return 'The dog is moved'

    def show_color(self):
        return self.color