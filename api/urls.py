from django.urls import path
from . import views

urlpatterns = [
    path('notes/', views.Notes_List_View.as_view()),
    path('note/create',views.Note_View.as_view() ),
    path('note/<str:pk>', views.Note_View.as_view()),
]
