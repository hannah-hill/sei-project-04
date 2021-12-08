from django.shortcuts import render

# Create your views here.
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from .models import Campaign, CampaignSupporters
from jwt_auth.models import User
from .serializers import CampaignSerializer, CampaignSupportersSerializer, PopulatedCampaignSerializer

def home(request):
    return HttpResponse('Hello world!')

class CampaignDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    
    def get(self, request, pk):
        try:
            campaign = Campaign.objects.get(id=pk)
            serialized_campaign = PopulatedCampaignSerializer(campaign)
            return Response(serialized_campaign.data, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, pk):
        try:
            campaign = Campaign.objects.get(id=pk)
            updated_campaign = CampaignSerializer(campaign, data=request.data)
            if updated_campaign.is_valid():
                updated_campaign.save()
                return Response(updated_campaign.data, status=status.HTTP_202_ACCEPTED)
        except:
            return Response(campaign.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
    def delete(self, request, pk):
        try:
            campaign = Campaign.objects.get(id=pk)
            campaign.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)



class CampaignListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    # /GET all campaigns
    def get(self, request):
        try:
            campaigns = Campaign.objects.all()
            serialized_campaigns = PopulatedCampaignSerializer(campaigns, many=True)
            return Response(serialized_campaigns.data, status=status.HTTP_200_OK)
        except: 
            return Response(status=status.HTTP_400_BAD_REQUEST)
    
    def post(self, request):
        try:
            campaign = CampaignSerializer(data=request.data)
            print(campaign)
            if campaign.is_valid():
                campaign.save(owner=request.user)
                return Response(campaign.data, status=status.HTTP_201_CREATED)
        except:
            return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class PledgeView(APIView):
    def post(self, request, pk):
        try:
            campaign = Campaign.objects.get(id=pk)
            value = request.data['value']
            user = request.user
            new_pledge = CampaignSupporters.objects.create(user=user, value=value, campaign=campaign)
            return Response(status=status.HTTP_202_ACCEPTED)
        except Exception as e:
            print(e)
            return Response(status=status.HTTP_400_BAD_REQUEST)

