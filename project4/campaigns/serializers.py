from rest_framework import serializers
from jwt_auth.models import User
from jwt_auth.serializers import UserSerializer
from .models import Campaign

class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = '__all__'

class PopulatedCampaignSerializer(CampaignSerializer):
    supporters = UserSerializer(many=True)
