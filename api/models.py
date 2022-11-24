from django.db import models

# Create your models here.

class Note(models.Model):
    title =models.TextField(max_length=50 , unique=True)
    body = models.TextField(max_length=1000 , blank=True , null=True)
    created=models.DateField( auto_now=False)
    updated = models.DateField(auto_now=True)

    def __str__(self):
        return self.title
    