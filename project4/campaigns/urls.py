from django.urls import path
from . import views
from .views import CampaignListView, CampaignDetailView

urlpatterns = [
    path('campaigns/', views.home, name='home'),
    path('', CampaignListView.as_view()),
    path('<int:pk>/', CampaignDetailView.as_view())
]