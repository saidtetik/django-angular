from django.core.management.base import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):
    def handle(self, *args, **options):
        if not User.objects.filter(username='user1'):
            User.objects.create_superuser('root', '', 'root')
            for i in range(3):
                User.objects.create_user('user' + str(i + 1), None, 'user' + str(i + 1))
