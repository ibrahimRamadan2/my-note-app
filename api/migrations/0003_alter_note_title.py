# Generated by Django 4.1.3 on 2022-11-24 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_note_created'),
    ]

    operations = [
        migrations.AlterField(
            model_name='note',
            name='title',
            field=models.TextField(max_length=50, unique=True),
        ),
    ]