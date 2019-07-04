from django.urls import path

from .views import RecipeListView, RecipeDetailView

urlpatterns = [
    path('', RecipeListView.as_view()),
    #path('<pk>', RecipeDetailView.as_view()),
    
    path('<user_id>', RecipeDetailView.as_view()),
]