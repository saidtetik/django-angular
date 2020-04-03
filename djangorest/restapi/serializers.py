from .models import Travel
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class TravelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Travel
        fields = ['id', 'place', 'note', 'date', 'owner_username']


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['name'] = user.username
        return token
