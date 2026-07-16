# Analog Clock

A minimalist analog clock built with vanilla HTML, CSS, and JavaScript. The clock hands update in real time based on the user's system time.

![Clock preview](<img width="1860" height="997" alt="screenshot" src="https://github.com/user-attachments/assets/6c7c82bd-6e9d-4603-b35d-e18d07f371c9" />
)

## Features

- Smooth, live-updating hour, minute, and second hands
- Clean, dark-themed circular clock face
- No frameworks or dependencies — pure HTML/CSS/JS

## Project Structure

```
Watch/
├── index.html      # Main HTML file
├── style.css        # Styling for the clock face and hands
├── script.js        # Clock logic (hand rotation, time updates)
├── img/
│   └── clock.png     # Clock face background image
└── README.md
```

## Getting Started

### Prerequisites

Just a modern web browser. No build tools or dependencies required.

### Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/Watch.git
   cd Watch
   ```

2. Open `index.html` directly in your browser, **or** serve it locally:
   ```bash
   npx serve
   ```

That's it — the clock will start ticking immediately.

## How It Works

- `script.js` reads the current time every second using `Date()` and rotates the hour, minute, and second hands via CSS `transform: rotateZ()`.
- Each hand's rotation angle is calculated in degrees (360° / 60 for minutes and seconds, 360° / 12 for hours), with the hour hand also accounting for elapsed minutes for smoother movement.

## License

This project is open source and available under the [MIT License](LICENSE).
