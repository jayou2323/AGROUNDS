from django.db import models

# Create your models here.
# Create your models here.
class ARank(models.Model):
    a_team_code = models.CharField(primary_key=True, max_length=45)
    a_team_score = models.CharField(max_length=45)
    a_update_time = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'a_rank'
        
class AnalGame(models.Model):
    anal_code = models.CharField(primary_key=True, max_length=45)
    anal_game_code = models.CharField(max_length=45)
    anal_gps_code = models.CharField(max_length=45)
    anal_team_code = models.CharField(max_length=45)
    anal_result = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'anal_game'
        
class AnalPlayer(models.Model):
    anal_code = models.CharField(primary_key=True, max_length=45)
    anal_gps_code = models.CharField(max_length=45)
    anal_player_code = models.CharField(max_length=45)
    anal_result = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'anal_player'
        
class GameGps(models.Model):
    gps_code = models.CharField(primary_key=True, max_length=45)
    gps_game_code = models.CharField(max_length=45)
    gps_team_code = models.CharField(max_length=45)
    gps_player_code = models.CharField(max_length=45)
    gps_device_code = models.CharField(max_length=45)
    gps_time = models.CharField(max_length=45)
    gps_lat = models.CharField(max_length=45)
    gps_lon = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'game_gps'
        
class GameInfo(models.Model):
    game_code = models.IntegerField(primary_key=True)
    game_home_team = models.CharField(max_length=45)
    game_away_team = models.CharField(max_length=45)
    game_home_player = models.CharField(max_length=45)
    game_away_player = models.CharField(max_length=45)
    game_home_result = models.CharField(max_length=45)
    game_away_result = models.CharField(max_length=45)
    game_type = models.CharField(max_length=45)
    game_time = models.CharField(max_length=45)
    game_place = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'game_info'
        
class TeamInfo(models.Model):
    team_code = models.CharField(primary_key=True, max_length=45)
    team_name = models.CharField(max_length=45)
    team_host = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'team_info'
        
class UserInfo(models.Model):
    user_code = models.CharField(primary_key=True, max_length=45)
    user_id = models.CharField(max_length=45)
    user_pw = models.CharField(max_length=45)
    user_birth = models.CharField(max_length=45)
    user_name = models.CharField(max_length=45)
    user_gender = models.CharField(max_length=45)
    user_email = models.CharField(max_length=45)
    user_team = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'user_info'