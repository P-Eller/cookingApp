from django.db.models import CharField,TextField, Model
from django_mysql.models import ListCharField

class Recipe(Model):
    name = CharField(max_length=50)
    author= CharField(max_length=20)
    preparation = TextField()
    ingredients = TextField()
    tags = ListCharField(
        base_field=CharField(max_length=10),
        max_length=(6 * 11) 
    )

    def __str__(self):
        return self.name
