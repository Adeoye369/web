from django.http import HttpRequest, HttpResponse


def index(request: HttpRequest) -> HttpResponse:
    return HttpResponse("Is this your Home?")

# class IndexView:
#     def __init__(self, request: HttpRequest):
#         self.request = request

#     def get(self)-> HttpResponse:
#         return HttpResponse("Is this your Home?")