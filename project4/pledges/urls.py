from django.urls import path
from . import views
from .views import PledgeDetailView, PledgeListView

urlpatterns = [
    path('', PledgeListView.as_view()),
    path('<int:pk>/', PledgeDetailView.as_view()),
]

