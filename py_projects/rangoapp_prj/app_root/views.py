from django.http import HttpResponse,HttpRequest


def home(response: HttpRequest)->HttpResponse:
    return HttpResponse("<h1>Welcome to RangoApp </h1>")
