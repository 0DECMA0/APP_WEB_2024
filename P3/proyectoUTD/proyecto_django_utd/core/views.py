from django.shortcuts import render
from django.shortcuts import redirect
# Create your views here.

from django.shortcuts import render

def home(request):
    return render(request, 'index.html')

def acerca_de(request):
    return render(request, 'acercade.html')

def mision(request):
    return render(request, 'mision.html')

def vision(request):
    return render(request, 'vision.html')
    'title';vision,
    'content'

