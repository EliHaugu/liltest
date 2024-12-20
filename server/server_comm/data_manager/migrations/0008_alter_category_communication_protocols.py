# Generated by Django 5.1.1 on 2024-11-07 09:35

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data_manager', '0007_alter_device_communication_ids_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='communication_protocols',
            field=django.contrib.postgres.fields.ArrayField(
                base_field=models.CharField(
                    choices=[
                        ('wifi', 'WiFi'),
                        ('bluetooth', 'Bluetooth'),
                        ('lte', 'LTE'),
                    ],
                    max_length=50,
                ),
                blank=True,
                default=list,
                size=3,
            ),
        ),
    ]
