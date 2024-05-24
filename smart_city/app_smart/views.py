from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def abre_index(request):
    mensagem = "Muito bem vindo ao Smart City"
    return HttpResponse(mensagem)

# http://127.0.0.1:8000/api/sensores/