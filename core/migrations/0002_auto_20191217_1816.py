# Generated by Django 2.2.6 on 2019-12-17 21:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Usuario',
            new_name='Genero',
        ),
        migrations.RenameField(
            model_name='flor',
            old_name='usuario',
            new_name='genero',
        ),
    ]