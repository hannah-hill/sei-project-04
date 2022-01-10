from django.db import models
from django.db.models import Sum
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db.models.deletion import CASCADE

from pledges.models import Pledge

# Create your models here.
class Campaign(models.Model):
    title = models.CharField(max_length=100)
    category = models.CharField(max_length=40)
    location = models.CharField(max_length=100)
    byline = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)
    header_img = models.CharField(max_length=100, blank=True)
    target = models.IntegerField(
        default=1000,
        validators=[
            MaxValueValidator(20000), 
            MinValueValidator(10)
        ]
    )
    funded = models.IntegerField(default=0, blank=True)
    created_on = models.DateField(auto_now_add=True)
    duration = models.IntegerField(default=60, validators=[MaxValueValidator(90)])
    supporters = models.ManyToManyField("jwt_auth.User", through='CampaignSupporters', blank=True)
    owner = models.ForeignKey('jwt_auth.User', null=True, on_delete=models.PROTECT, related_name='owner_id')

    def total(self):
        funding = CampaignSupporters.objects.filter(campaign=self,).aggregate(Sum('value'))
        return funding
    
    def rewards(self):
        rewards = Pledge.objects.filter(campaign=self).order_by('value')
        return rewards
        
    def __str__(self):
	    return self.title

    

class CampaignSupporters(models.Model):
    campaign = models.ForeignKey("campaigns.Campaign", on_delete=models.PROTECT)
    user = models.ForeignKey("jwt_auth.User", on_delete=models.PROTECT)
    value = models.IntegerField()

    

        


    






