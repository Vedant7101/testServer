from django.urls import path
from testazureapp.views import *

urlpatterns = [
    path('', home)
]