from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
# from .models import User_info
from DB.models import LeagueInfo
from .serializers import League_info_Serializer

class makeleague(APIView):
    """
    json 형식
    {
    "league_host": "test_host",
    "league_name": "test_name",
    "league_startdate": "2024-02-10",
    "league_enddate": "2024-05-10",
    "league_startjoin": "2024-01-01",
    "league_endjoin": "2024-02-01",
    "league_team": ["team1", "team2", "team3"],
    "league_area": "test_area",
    "league_logo": "test_logo",
    "league_winner": "test_winner",
    "league_gametype": "test_gametype",
    "league_official": "test_official",
    "league_description": "test_description"
    }

    """
    def post(self, request, *args, **kwargs):
        serializer = League_info_Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            # 유효성 검사 오류 메시지를 확인하여 반환합니다.
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)