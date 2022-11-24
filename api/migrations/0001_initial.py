# Generated by Django 4.1.3 on 2022-11-21 21:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='note',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(max_length=50)),
                ('body', models.TextField(blank=True, max_length=1000, null=True)),
                ('created', models.DateField(auto_now=True)),
                ('updated', models.DateField(auto_now=True)),
            ],
        ),
    ]
