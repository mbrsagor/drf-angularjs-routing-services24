from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    author      = models.ForeignKey(User, on_delete = models.CASCADE)
    tilte       = models.CharField(max_length = 30)
    category    = models.CharField(max_length = 20)
    image       = models.ImageField(upload_to="image", blank=True, null=True)
    description = models.TextField()
    create_at   = models.DateField(auto_now_add = True)


    def __str__(self):
        return self.tilte
