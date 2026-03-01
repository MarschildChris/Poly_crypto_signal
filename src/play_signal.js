import player from "play-sound";
import path from "path";
import { fileURLToPath } from "url";

const audio = player({});

// needed in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function playSignal() {
  const file = path.join(__dirname, "engines/signal.mp3");

  audio.play(file, (err) => {
    if (err) console.error("❌ Audio error:", err);
  });
}