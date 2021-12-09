from django.urls import path
from . import views
from .views import CampaignListView, CampaignDetailView, CategoryView, PledgeView, CampaignTrendingView

urlpatterns = [
    # path('campaigns/', views.home, name='home'),
    path('', CampaignListView.as_view()),
    path('<int:pk>/', CampaignDetailView.as_view()),
    path('<int:pk>/pledge/', PledgeView.as_view()),
    path('trending/', CampaignTrendingView.as_view()),
    path('categories/', CategoryView.as_view())
]