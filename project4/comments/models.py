from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.
class Comment(models.Model):
    content = models.TextField(max_length=300)
    date = models.TimeField(auto_now_add=True)
    campaign = models.ForeignKey("campaigns.Campaign", on_delete=CASCADE, null=True)
    owner = models.ForeignKey("jwt_auth.User", null=True, on_delete=CASCADE)

    def __str__(self):
        return self.content
