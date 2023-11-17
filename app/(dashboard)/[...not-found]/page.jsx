import { notFound } from "next/navigation";

// use this to fix a bug not picking up custom not-found,jsx from dashboard (will work if moved in app folder but will loose wrapping)

export default function NotFound() {
  notFound();
}
