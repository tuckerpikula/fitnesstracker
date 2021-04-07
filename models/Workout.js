const { model, Schema } = require('mongoose')

const WorkoutSchema = new Schema({
  day: Date,
  exercises: [{
    type: {
      type: String
    },
    name: {
      type: String
    },
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
    distance: Number
  }]
})

WorkoutSchema.set('toObject', { virtuals: true })
WorkoutSchema.set('toJSON', { virtuals: true })


WorkoutSchema.virtual('duration')
  .get(function () {
    let totalDuration = 0
    this.exercises.forEach(exercise => {
      totalDuration += exercise.duration
    })
    return totalDuration
  })

module.exports = model('Workout', WorkoutSchema)