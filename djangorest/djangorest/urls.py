"""djangorest URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from restapi import views
from rest_framework_simplejwt.views import TokenRefreshView

from restapi.views import MyTokenObtainPairView

urlpatterns = [

    path('admin/', admin.site.urls),
    path('api/token/', MyTokenObtainPairView.as_view()),
    path('api/refresh/', TokenRefreshView.as_view()),
    path('api/get/', views.TravelList.as_view()),
    path('api/add/', views.AddTravel.as_view()),
    path('api/detail/', views.DetailTravel.as_view())

]
