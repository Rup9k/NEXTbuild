from django.db import models

from django.db import models
from django.contrib.auth.models import AbstractUser

# Пользователь с ролями
class User(AbstractUser):
    ROLE_CHOICES = (
        ('USER', 'User'),
        ('ADMIN', 'Admin'),
    )
    role = models.CharField(max_length=5, choices=ROLE_CHOICES, default='USER')

# Товар
class Product(models.Model):
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(blank=True)
