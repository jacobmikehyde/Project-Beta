# Generated by Django 4.0.3 on 2023-01-25 22:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0005_automobilevo_color_automobilevo_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='import_href',
            field=models.CharField(max_length=255, null=True),
        ),
    ]