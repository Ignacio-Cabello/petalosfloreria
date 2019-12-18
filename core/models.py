from django.db import models

# Create your models here.
#Tablas en la base de datos


class Flor(models.Model):
    nombre = models.CharField(max_length=200)
    precio = models.IntegerField()
    descripcion = models.TextField(null=True, blank=True)
    estado = models.CharField(max_length=20)
    stock = models.IntegerField()
    imagen = models.ImageField(null=True, blank=True)

    def __str__(self):
        return self.nombre
    