from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import PlayerInfo
from DB.models import UserInfo

import json
from django.forms.models import model_to_dict

from staticfiles.get_info import calculate_age

class get_player_by_user_code(APIView):
    """
    user_code로 선수 데이터를 불러옴

    json 형식
    {
        'user_code' : {string}
    }
    """
    def post(self, request, *args, **kwargs):
        try:
            player = PlayerInfo.objects.get(user_code = request.data['user_code'])
            user = UserInfo.objects.get(uesr_code = request.data['user_code'])
        except PlayerInfo.DoesNotExist:
            return JsonResponse({'error': '해당 사용자가 존재하지 않습니다.'}, status=401)
        player = model_to_dict(player)
        player.pop('user_code')
        player['user_nickname'] = user.user_nickname
        player['age'] = calculate_age(user.user_birth)
        return JsonResponse(player, status=200)


class edit_player(APIView):
    def post(self, request, *args, **kwargs):
        try:
            player = PlayerInfo.objects.get(user_code = request.data['user_code'])
        except PlayerInfo.DoesNotExist:
            return JsonResponse({'error': '해당 사용자가 존재하지 않습니다.'}, status=401)
        
class get_all_players(APIView):
    """
    모든 선수를 json을 원소로 가진 배열 형태로 불러옴
    """
    def get(self, request, *args, **kwargs):
        try:
            all_players = PlayerInfo.objects.all()
            print()
        except PlayerInfo.DoesNotExist:
            return JsonResponse({'error': '해당 사용자가 존재하지 않습니다.'}, status=401)
        
        serialized_data = []
        for idx, record in enumerate(all_players):
            try:
                user = UserInfo.objects.get(user_code=record.user_code)
                user_name = getattr(user, 'user_name')
                age = calculate_age(getattr(user, 'user_birth'))
            except UserInfo.DoesNotExist:
                user_name = None

            serialized_data.append({
                'index' : idx,
                'user_code': record.user_code,
                'user_name': user_name,
                'player_height': record.player_height,
                'player_weight' : record.player_weight,
                'player_point' : record.player_point,
                'player_area' : record.player_area,
                'player_position' : record.player_position,
                'player_description' : record.player_description,
                'player_goal' : record.player_goal,
                'player_assist' : record.player_assist,
                'player_foot' : record.player_foot,
                'age' : age
            })
        return JsonResponse({'data' : serialized_data}, status=200)