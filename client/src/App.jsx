import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");
  const [activities, setActivities] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    if (!mood) return;

    fetch(`http://localhost:5000/activities/${mood}`)
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.log(err));
  }, [mood]);

  const markCompleted = (id) => {
    if (completed.includes(id)) {
      setCompleted(completed.filter((item) => item !== id));
    } else {
      setCompleted([...completed, id]);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Mood-Based Activity Recommender</h1>
        <p className="subtitle">
          Choose your mood and get activity ideas to match how you feel.
        </p>

        <div className="mood-buttons">
          <button onClick={() => setMood("happy")}>😊 Happy</button>
          <button onClick={() => setMood("sad")}>😢 Sad</button>
          <button onClick={() => setMood("stressed")}>😣 Stressed</button>
          <button onClick={() => setMood("bored")}>😐 Bored</button>
          <button onClick={() => setMood("energetic")}>⚡ Energetic</button>
        </div>

        {mood && <h2>Recommended Activities</h2>}

        <div className="activity-list">
          {activities.map((activity) => (
            <div
              className={`card ${completed.includes(activity.id) ? "completed-card" : ""}`}
              key={activity.id}
            >
              <span className={completed.includes(activity.id) ? "done" : ""}>
                {activity.activity_name}
              </span>

              <button onClick={() => markCompleted(activity.id)}>
                {completed.includes(activity.id) ? "Undo" : "Complete"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;