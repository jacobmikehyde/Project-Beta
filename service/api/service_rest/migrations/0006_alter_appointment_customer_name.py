# Generated by Django 4.0.3 on 2023-01-25 16:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0005_alter_appointment_vin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appointment',
            name='customer_name',
            field=models.CharField(max_length=200, null=True),
        ),
    ]
