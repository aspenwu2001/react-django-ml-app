from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render

from rest_framework import viewsets
from .serializers import WordPairSerializer, WordSerializer
from .models import WordPair, Word
from rest_framework.views import APIView
import json
from .Algorithm import controller
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

class WordPairViewSet(viewsets.ModelViewSet):
    queryset = WordPair.objects.all().order_by('pair1')
    serializer_class  = WordPairSerializer

class WordViewSet(viewsets.ModelViewSet):
    queryset = Word.objects.only('word')
    print(queryset)
    serializer_class  = WordSerializer

class WordView(APIView):
    @csrf_exempt
    def post(self, request):
        if request.META['CONTENT_TYPE'] == "application/json":
            request = json.loads(request.body)
            word = Word(word = request['word'])
        else:
            word = Word(word = request.POST['word'])
            
        cc = controller.maincontroller()
        cc.setType(2)
        cc.initialise()

        return JsonResponse({
            'bias_pair': cc.processSentence(word)
        })
        