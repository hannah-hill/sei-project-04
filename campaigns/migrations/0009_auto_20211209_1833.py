# Generated by Django 3.2.9 on 2021-12-09 18:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('campaigns', '0008_remove_campaignsupporters_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='campaign',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='owner_id', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='campaignsupporters',
            name='campaign',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='campaigns.campaign'),
        ),
        migrations.AlterField(
            model_name='campaignsupporters',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
        ),
    ]
