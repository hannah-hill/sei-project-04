# Generated by Django 3.2.9 on 2021-12-07 13:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0007_auto_20211207_1131'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='campaignsupporters',
            name='date',
        ),
    ]
