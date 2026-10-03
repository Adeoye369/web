import datetime

from django.db import models
from django.utils import timezone


class Question(models.Model):
    question_text = models.CharField(max_length=300)
    published_date= models.DateTimeField("published date")

    def __str__(self)-> str:
        return f"question: {self.question_text}, pub. date: {self.published_date}\n"

    def was_published_recently(self) -> bool:
        return self.published_date >= (timezone.now() - datetime.timedelta(days=1))


class ChoiceSelection(models.Model):
    question   = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes      = models.IntegerField(default=0)

    def __str__(self) -> str:
        return f"choice: {self.choice_text} votes: {self.votes}\n"
    

