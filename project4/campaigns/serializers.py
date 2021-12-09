from rest_framework import serializers
from jwt_auth.models import User
from jwt_auth.serializers import UserSerializer
from pledges.serializers import PledgeSerializer
from .models import Campaign, CampaignSupporters

class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = '__all__'

class PopulatedCampaignSerializer(CampaignSerializer):
    supporters = UserSerializer(many=True)
    rewards = PledgeSerializer(many=True)

    funding = serializers.ReadOnlyField(
        source='total'
    )

class CampaignSupportersSerializer(serializers.ModelSerializer):
    class Meta:
        model = CampaignSupporters
        fields = '__all__'
