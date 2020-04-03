from time import sleep

from .models import Travel
from .serializers import TravelSerializer, MyTokenObtainPairSerializer
from rest_framework import generics
from rest_framework_simplejwt.views import TokenObtainPairView
from kafka import KafkaProducer, KafkaConsumer
from json import dumps, loads
from django.core import serializers


class TravelList(generics.ListAPIView):
    queryset = Travel.objects.all()
    serializer_class = TravelSerializer


class AddTravel(generics.CreateAPIView):
    serializer_class = TravelSerializer


class DetailTravel(generics.ListAPIView):
    serializer_class = TravelSerializer

    def get_queryset(self):
        travel_id = self.request.query_params.get('travel_id')
        return Travel.objects.filter(pk=travel_id)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
