# Generated by Django 3.2.9 on 2021-12-01 18:06

from django.conf import settings
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Campaign',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=40)),
                ('location', models.CharField(max_length=100)),
                ('description', models.TextField(blank=True)),
                ('header_img', models.CharField(blank=True, max_length=100)),
                ('target', models.IntegerField(default=1000, validators=[django.core.validators.MaxValueValidator(20000), django.core.validators.MinValueValidator(10)])),
                ('created_on', models.DateField(auto_now_add=True)),
                ('duration', models.IntegerField(default=60, validators=[django.core.validators.MaxValueValidator(90)])),
                ('supporters', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
