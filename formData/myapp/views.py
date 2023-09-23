from django.shortcuts import render, redirect

from django.http import JsonResponse, HttpResponse
import json

def home(request):
    return render(request, 'home.html')

def get_data(request):
    print('Function invoked')
    
    if request.method == "POST":
        print("POST request received")
        
        data = request.POST.get('data')
        data = json.loads(data)
        for i in data:
            print(i)
            print(i['name'])
            print(i['email'])
            print(i['terms'])

    return HttpResponse('Done')
