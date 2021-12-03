from django.db import models
from django.db.models.deletion import CASCADE


# Create your models here.
class Pledge(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    value = models.IntegerField()
    campaign = models.ForeignKey('campaigns.Campaign', on_delete=CASCADE, related_name='rel_campaign')

    def __str__(self):
        return self.title
