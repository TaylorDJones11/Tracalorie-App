class CalorieTracker {
    constructor() {
        // private constructor function
        this._calorieLimit = 2000;
        this._totalCalories = 0;
        this._meals = [];
        this._workouts = [];
    }

    // public methods
    addMeal(meal) {
        this._meals.push(meal);
        this._totalCalories += meal.calories
    }

    addWorkout(workout) {
        this._workouts.push(workout);
        this._totalCalories -= workout.calories
    }
}

class Meal {
    constructor(name, calories) {
        // generates a random id number, strictly for Frontend Applications
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}

class Workout {
    constructor(name, calories) {
        // generates a random id number, strictly for Frontend Applications
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
        // possibly add length?
    }
}

