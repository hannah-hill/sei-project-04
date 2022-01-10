from django.shortcuts import render
# Add the following import
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import status
from rest_framework.views import APIView
from .serializers import CommentSerializer
from .models import Comment

class CommentDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    
    def get(self, request, pk):
        try:
            comment = Comment.objects.get(id=pk)
            serialized_comment = CommentSerializer(comment)
            return Response(serialized_comment.data, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    def put(self, request, pk):
        try:
            comment = Comment.objects.get(id=pk)
            updated_comment = CommentSerializer(comment, data=request.data)
            if updated_comment.is_valid():
                updated_comment.save()
                return Response(updated_comment.data, status=status.HTTP_202_ACCEPTED)
        except:
            return Response(updated_comment.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
    
    def delete(self, request, pk):
        try:
            comment = Comment.objects.get(id=pk)
            comment.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            return Response(status=status.HTTP_204_NO_CONTENT)


class CommentListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )
    def get(self, request):
        try:
            comments = Comment.objects.all()
            serialized_comments = CommentSerializer(comments, many=True)
            return Response(serialized_comments.data, status=status.HTTP_200_OK)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
    def post(self, request):
        try:
            comment = CommentSerializer(data=request.data)
            if comment.is_valid():
                comment.save(owner=request.user)
                return Response(comment.data, status=status.HTTP_201_CREATED)
        except:
            return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)
