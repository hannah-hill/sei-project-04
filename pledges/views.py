from django.shortcuts import render

# Add the following import
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import status

from .models import Pledge
from .serializers import PledgeSerializer

class PledgeDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    
    def get(self, request, pk):
        try:
            pledge = Pledge.objects.get(id=pk)
            serialized_pledge = PledgeSerializer(pledge)
            return Response(serialized_pledge.data, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, pk):
        try:
            pledge = Pledge.objects.get(id=pk)
            updated_pledge = PledgeSerializer(pledge, data=request.data)
            if updated_pledge.is_valid():
                updated_pledge.save()
                return Response(updated_pledge.data, status=status.HTTP_202_ACCEPTED)
        except:
            return Response(updated_pledge.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
    def delete(self, request, pk):
        try:
            pledge = Pledge.objects.get(id=pk)
            pledge.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)

class PledgeListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request):
        pledges = Pledge.objects.all()
        serialized_pledges = PledgeSerializer(pledges, many=True) # serialize for sending over the wire
        return Response(serialized_pledges.data, status=status.HTTP_200_OK)
    def post(self, request):
        try:
            pledge = PledgeSerializer(data=request.data)
            if pledge.is_valid():
                pledge.save()
                return Response(pledge.data, status=status.HTTP_201_CREATED)
        except:
            return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)