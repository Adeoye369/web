from django.contrib import admin
from .models import ChoiceSelection, Question

# Register your models here.
admin.site.register(Question)
admin.site.register(ChoiceSelection)


