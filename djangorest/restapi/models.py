from django.db import models
from datetime import date


class Travel(models.Model):
    place = models.CharField(max_length=50, default='')
    note = models.TextField(default='')
    date = models.DateField(default=date.today)
    owner_username = models.CharField(max_length=50, default='')
