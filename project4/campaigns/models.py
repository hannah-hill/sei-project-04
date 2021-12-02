from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Campaign(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=40)
    location = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    header_img = models.CharField(max_length=100, blank=True)
    target = models.IntegerField(
        default=1000,
        validators=[
            MaxValueValidator(20000), 
            MinValueValidator(10)
        ]
    )
    created_on = models.DateField(auto_now_add=True)
    duration = models.IntegerField(default=60, validators=[MaxValueValidator(90)])
    supporters = models.ManyToManyField("jwt_auth.User", blank=True)

    def __str__(self):
	    return self.title

    






