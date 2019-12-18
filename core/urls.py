from django.urls import path, include
from .views import home, galeria, listado_flores, nueva_flor, modificar_flor, eliminar_flor, registro_usuario, FlorViewSet, guardar_token
from rest_framework import routers

router = routers.DefaultRouter()
router.register('flores', FlorViewSet)

#Lo primero es la URL que se ejecuta al entrar en raiz
##Lo segundo es el templates
#El ultimo es el alias con el cual se imprime las urls del proyecto
urlpatterns = [
    path('', home, name="home"), 
    path('galeria/', galeria,name="galeria"),
    path('listado-flores/', listado_flores, name="listado_flores"),
    path('nueva-flor/', nueva_flor, name="nueva_flor"),
    path('modificar-flor/<id>/', modificar_flor, name="modificar_flor"),
    path('eliminar-flor/<id>/', eliminar_flor, name="eliminar_flor"),
    path('registro/', registro_usuario, name='registro_usuario'),
    path('api/', include(router.urls)),
    path('guardar-token/', guardar_token, name="guardar_token"),
    ]

