from django.contrib import admin

# Register your models here.
from .models import Campaign, CampaignSupporters


admin.site.register(Campaign)
admin.site.register(CampaignSupporters)
