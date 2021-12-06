from django.urls import path
from . import views
from .views import CampaignListView, CampaignDetailView, PledgeView

urlpatterns = [
    # path('campaigns/', views.home, name='home'),
    path('', CampaignListView.as_view()),
    path('<int:pk>/', CampaignDetailView.as_view()),
    path('<int:pk>/pledge/', PledgeView.as_view()),
]