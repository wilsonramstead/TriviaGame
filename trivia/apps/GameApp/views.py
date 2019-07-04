from django.shortcuts import render, HttpResponse

def index(request):
    return render(request, "GameApp/trivia.html")
