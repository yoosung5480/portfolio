import { SpeakNoteView } from './SpeakNoteView';
import { useSpeakNote } from './useSpeakNote';

export function SpeakNotePage() {
  const model = useSpeakNote();
  return <SpeakNoteView model={model} />;
}
