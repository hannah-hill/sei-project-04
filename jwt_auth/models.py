from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profile_img = models.CharField(max_length=100, blank=True)
    bio = models.CharField(max_length=140, blank=True)

    def __str__(self):
        return id
    
    