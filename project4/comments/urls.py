from django.urls import path
from . import views
from .views import CommentDetailView, CommentListView

urlpatterns = [
    path('', CommentListView.as_view()),
    path('<int:pk>/', CommentDetailView.as_view())
]