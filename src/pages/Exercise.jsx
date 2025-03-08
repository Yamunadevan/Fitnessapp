import { useParams } from 'react-router-dom';
import workoutImage1 from '../assets/russian-twist.gif';
import workoutImage2 from '../assets/up-down-using-table.gif';
import '../styles/Exercise.css'

const Exercise = () => {
    const { id } = useParams(); // Get the dynamic ID from URL
    console.log("Exercise page loaded with ID:", id);

    return (
        <div className='exercise-page'>
            <img src={workoutImage1} alt="Workout" className="custom-workout-img" />
            <div>
              <h1>Russian Twist</h1>
              <p><strong>Russian Twist: Core (Obliques, Rectus Abdominis)
              </strong></p>
            <p><i>Sets/Reps: 3 sets of 20 reps (10 per side)</i></p>
            <li>Sit on the floor with knees bent and feet slightly off the ground.</li>
            <li>Lean back slightly while keeping your back straight and core engaged.</li>
            <li>Hold your hands together (or a weight for more resistance).</li>
            <li>Twist your torso to the right, bringing your hands toward the floor.</li>
            <li>Return to the center, then twist to the left.</li>
            <li>Continue alternating sides in a controlled motion.</li>
            <p>For Reference: <a href="https://youtu.be/2pLT-olgUJs">Russian Twist</a></p>
            </div>
            <img src={workoutImage2} alt="Workout" className="custom-workout-img" />
            <div>
              <h1>Straight Leg Crunch</h1>
            <p><strong>Target: Core (Upper Rectus Abdominis)</strong></p>
            <p><i>Sets/Reps: 3 sets of 15 reps</i></p>
            <li>Lie on your back with legs extended straight and arms behind your head.</li>
            <li>Engage your core and lift your shoulders off the floor while keeping your legs straight.</li>
            <li>Exhale as you crunch up, keeping your neck relaxed.            </li>
            <li>Lower yourself back down slowly without fully resting your head on the ground.</li>
            <li>Repeat for the desired reps.</li>
            <p>For Reference: <a href="https://youtu.be/2pLT-olgUJs">Straight Leg Crunch</a></p>
            </div>
        </div>
    );
};

export default Exercise;