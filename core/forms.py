from django import forms
from django.forms import ModelForm
from .models import Flor
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class FlorForm(ModelForm):

    nombre = forms.CharField(min_length=4, max_length=200)
    precio = forms.IntegerField(min_value=2000, max_value=100000)
   

    class Meta:
        model = Flor
        fields = ['nombre','precio','descripcion','estado', 'stock', 'imagen']

class CustomUserForm(UserCreationForm):
    
    class Meta:
        model = User
        fields = ['first_name', 'last_name','email','username','password1','password2']

