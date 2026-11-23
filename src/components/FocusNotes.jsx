
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function FocusNotes() {
  const notes = [
    {
      label: "YOUR DAILY REMINDER",
      title: "Stay focused on what matters.",
      description:
        "Organise your work, take one step at a time, and celebrate your progress."
    },
    {
      label: "ONE STEP AT A TIME",
      title: "Progress is better than perfection.",
      description:
        "Break big goals into small tasks. Every completed step moves you forward."
    },
    {
      label: "MAKE TODAY COUNT",
      title: "Your consistency creates success.",
      description:
        "Plan your priorities, protect your focus, and give your best to today's work."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Move to the previous slide
  const previousSlide = () => {
    setCurrentSlide((previous) =>
      previous === 0 ? notes.length - 1 : previous - 1
    );
  };

  // Move to the next slide
  const nextSlide = () => {
    setCurrentSlide((previous) =>
      previous === notes.length - 1 ? 0 : previous + 1
    );
  };

  return (
    <div className="focus-card">
      <div className="focus-content" aria-live="polite">
        <span className="focus-label">
          {notes[currentSlide].label}
        </span>

        <h2>{notes[currentSlide].title}</h2>

        <p>{notes[currentSlide].description}</p>

        <div className="focus-controls">
          <button
            className="focus-nav-button"
            onClick={previousSlide}
            aria-label="Previous focus note"
            type="button"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="focus-dots">
            {notes.map((note, index) => (
              <button
                key={note.label}
                type="button"
                className={`focus-dot ${
                  currentSlide === index ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to focus note ${index + 1}`}
                aria-pressed={currentSlide === index}
              />
            ))}
          </div>

          <button
            className="focus-nav-button"
            onClick={nextSlide}
            aria-label="Next focus note"
            type="button"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="focus-decoration">✦</div>
    </div>
  );
}

export default FocusNotes;
