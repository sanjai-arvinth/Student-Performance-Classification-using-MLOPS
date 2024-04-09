# urls.py
from django.urls import path
from .views import input_data_view

urlpatterns = [
    path('api/inputdata/', input_data_view, name='input_data'),
]
