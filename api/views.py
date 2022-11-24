from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Note
from .serializers import Note_Serializer
# Create your views here.


class Notes_List_View(APIView):
    def get(self, request):
        try:
            notes = Note.objects.all().order_by('-created')
            serializer_data = Note_Serializer(notes, many=True)
            return Response(serializer_data.data, status=status.HTTP_200_OK)
        except:
            return Response(serializer_data.errors, status=status.HTTP_400_BAD_REQUEST)

class Note_View(APIView):
    def get(self , reqeust , pk):
        note = Note.objects.get(id=pk)
        serialized_data = Note_Serializer(note ,many=False)
        return Response(serialized_data.data , status.HTTP_200_OK) 
    
    def post(self , reqeust):
        serialized_data = Note_Serializer(data = reqeust.data)
        if(serialized_data.is_valid()):
            serialized_data.save() 
            return Response({"msg":"Note Created Successfully"} , status.HTTP_200_OK)

        return Response(serialized_data.errors , status.HTTP_400_BAD_REQUEST) 

    def put(self , reqeust, pk):
        note = Note.objects.get(id = pk)
        serialzer = Note_Serializer(instance=note, data = reqeust.data) 
        if(serialzer.is_valid()):
            serialzer.save()
            return Response({'msg':'i am ok'} , status.HTTP_200_OK)
        return Response({'msg':'i am not ok'} , status.HTTP_200_OK)

            
    def delete(self , reqeust, pk):
        note =Note.objects.get(id=pk)
        note.delete()
        return Response({"msg":"Note is Deleted"},status=status.HTTP_200_OK)